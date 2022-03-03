import { Repository } from '@/repository/Repository';
import { Tweet } from '@/models/Tweet';
import { _db } from '@/infra/sqlite/_db';

export const MessageRepository: Repository<Tweet> = {
    all(limit): Promise<Tweet[]> {
        return new Promise<Tweet[]>((resolve, reject) => {
            _db.all(`SELECT * from tweets ORDER BY id DESC LIMIT ${limit};;`, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    },

    create(item): Promise<Tweet> {
        return new Promise<Tweet>((resolve, reject) => {
            const stmt = _db.prepare(
                'INSERT INTO tweets (message, account_id, created_at) VALUES(?, ?, strftime("%s", "now"));',
            );
            stmt.run([item.message, item.userId], async function (err: Error) {
                if (err) {
                    reject(err);
                }
                await MessageRepository.findById(String(this.lastID)).then((data) => {
                    resolve(data as Tweet);
                });
            });
        });
    },

    findById(id: string): Promise<Tweet | null> {
        return new Promise<Tweet | null>((resolve, reject) => {
            _db.get(`SELECT * from tweets WHERE id=${id}`, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    },

    remove(id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            _db.run(`DELETE FROM tweets where id=${id}`, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },

    update(id: string, item: Partial<Tweet>): Promise<Tweet | null> {
        const sets = Tweet.toDB(item);
        console.log(`UPDATE tweets SET ${sets} where id=${id};`);
        return new Promise<Tweet | null>((resolve, reject) => {
            _db.run(`UPDATE tweets SET ${sets} where id=${id};`, async function (err) {
                if (err) {
                    console.log('eeeee', err);
                    reject(err);
                } else {
                    const result = await MessageRepository.findById(id);
                    resolve(result);
                }
            });
        });
    },
};
