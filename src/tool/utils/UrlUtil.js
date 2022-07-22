
export function getQueryMap(url) {
    if (url == null) {
        return {}
    }
    const paramsStartIndex = url.indexOf('?');
    if (paramsStartIndex < 0) {
        return {}
    }
    const queryMap = {}
    let isValue = false
    const length = url.length;
    let keyTemp = ''
    let valueTemp = ''
    for (let i = paramsStartIndex + 1; i < length; i++) {
        const t = url.charAt(i);
        switch (t) {
            case "&":
                queryMap[keyTemp] = valueTemp;
                keyTemp = valueTemp = ''
                isValue = false
                continue
            case "=":
                isValue = true
                continue
            default:
                if (isValue === false) {
                    keyTemp += t
                    continue
                }
                valueTemp += t
        }
    }
    return queryMap;
}
