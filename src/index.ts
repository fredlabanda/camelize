export default function camelize(o: any) {
    let newO: any;
    let origKey, newKey, value;
    if (o instanceof Array) {
        return o.map(val => {
            if (typeof val === 'object') {
                val = camelize(val);
            }
            return val;
        });
    } else {
        newO = {};
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
                value = o[origKey];
                if (value instanceof Array || (value !== null && value.constructor === Object)) {
                    value = camelize(value);
                }
                newO[newKey] = value;
            }
        }
    }

    return newO;
}
