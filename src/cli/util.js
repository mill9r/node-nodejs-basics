
export function getArgsAsMap(args, argStartWith = '--') {
    const map = new Map();
    if(!args || args.length === 0) {
        return new Map();
    }

    for (let i = 0; i < args.length; i++) {
        const key = args[i];
        const value = args[i + 1];

        if(key.startsWith(argStartWith)) {
            map.set(key.replace(argStartWith, ''), value);
            i++;
        }
    }

    return map;
}


