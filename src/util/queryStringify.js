export default function queryStringify(obj, prefix) {
    const pairs = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            const enkey = encodeURIComponent(key);
            let pair;
            if (typeof value === 'object') {
                pair = queryStringify(value, prefix ? `${prefix}[${enkey}]` : enkey);
            } else {
                pair = `${prefix ? `${prefix}[${enkey}]` : enkey}=${encodeURIComponent(value)}`;
            }
            pairs.push(pair);
        }
    }
    return pairs.join('&');
}
