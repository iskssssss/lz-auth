
export function getQueryMap(url) {
    if (url == null) {
        return {}
    }
    const paramsStartIndex = url.indexOf('?');
    if (paramsStartIndex < 0) {
        return {}
    }
    const queryMap = {}
    const length = url.length;
    const params = url.substring(paramsStartIndex + 1, length)
    const paramList = params.split('&')
    for (let param of paramList) {
        const split = param.split('=');
        const key = split[0]
        let value = ''
        for (let i = 1; i < split.length; i++) {
            if (i === split.length - 1) {
                value = value + split[i]
                continue
            }
            value = value + split[i] + "="
        }
        queryMap[key] = value
    }
    return queryMap;
}
