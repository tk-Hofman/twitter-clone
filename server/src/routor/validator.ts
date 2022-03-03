export function validateString(str: unknown, option?: { min?: number; max?: number }): str is string {
    const isString = typeof str === 'string';
    if (!isString) return false;
    if (!option) {
        return isString;
    } else {
        const { min, max } = option;
        return containRange(str.length, min, max);
    }
}

export function validateNumber(num: unknown, option?: { min?: number; max?: number }): num is number {
    const isNumber = typeof num === 'number';
    if (!isNumber) return false;
    if (!option) {
        return isNumber;
    } else {
        const { min, max } = option;
        return containRange(num, min, max);
    }
}

function containRange(num: number, min: number | undefined, max: number | undefined): boolean {
    if (min !== undefined && max !== undefined) {
        return min <= num && num <= max;
    } else if (min !== undefined) {
        return min <= num;
    } else if (max !== undefined) {
        return num <= max;
    } else {
        return true;
    }
}
