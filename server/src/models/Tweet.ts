export interface Tweet {
    id: string;
    message: string;
    like: number;
    userId: number;
}

export const Tweet = {
    create(message: string, userId: number): Omit<Tweet, 'id'> {
        return {
            message,
            like: 0,
            userId,
        };
    },

    fromDB(source: { id: string; message: string; like: number; account_id: number }): Tweet {
        return {
            id: source.id,
            like: source.like,
            message: source.message,
            userId: source.account_id,
        };
    },

    toDB(item: Partial<Tweet>): string {
        const result = [];
        if (hasValue(item.like)) {
            result.push(`like=${item.like}`);
        }
        if (hasValue(item.message)) {
            result.push(`message="${item.message}"`);
        }
        if (hasValue(item.userId)) {
            result.push(`account_id=${item.userId}`);
        }
        return result.join(',');
    },
};

function hasValue(value: unknown): boolean {
    return value !== null && value !== undefined;
}
