export interface Model {
    id: string;
}
export interface Repository<T extends Model> {
    create(item: Omit<T, 'id'>): Promise<T>;
    update(id: string, item: Omit<T, 'id'>): Promise<T | null>;
    remove(id: string): Promise<void>;
    all(limit: number): Promise<T[]>;
    findById(id: string): Promise<T | null>;
}
