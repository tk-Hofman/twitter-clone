import { MessageRepository } from '@/infra/sqlite/MessageRepository';
import { Tweet } from '@/models/Tweet';
import { Router } from '@/routor/router';
import { validateNumber, validateString } from '@/routor/validator';

const router = new Router();
router.addRoute('/message/:messageId', {
    async get(res, { query }) {
        const result = await MessageRepository.all(Number(query.limit) || 100);
        res.success(result);
    },
    async post(res, { body }) {
        const { message, userId } = body;
        if (!validateString(message, { min: 1 }) || !validateNumber(userId, { min: 0 })) {
            res.fail(400);
        } else {
            const result = await MessageRepository.create(Tweet.create(message, userId));
            res.success(result);
        }
    },
    async delete(res, { params }) {
        const { messageId } = params;
        if (!validateString(messageId, { min: 1 })) {
            res.fail(400);
        } else {
            await MessageRepository.remove(messageId);
            res.success({});
        }
    },
    async put(res, { params, body }) {
        const { messageId } = params;
        if (!validateString(messageId, { min: 1 }) || body === null || body === undefined) {
            res.fail(400);
        } else {
            const result = await MessageRepository.update(messageId, body as Omit<Tweet, 'id'>);
            res.success(result);
        }
    },
});
router.listen(4000);
