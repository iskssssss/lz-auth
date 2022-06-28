import one from "@/config/AxiosConfig";

export function POST(url, body) {
    return new Promise((resolve, reject) => {
        if (body == null || body === {}) {
            one.post(url).then((response) => {
                resolve(response)
            }).catch((reason) => {
                reject(reason)
            })
            return
        }
        one.post(url, body).then((response) => {
            resolve(response)
        }).catch((reason) => {
            reject(reason)
        })
    })
}

export function GET(url, params) {
    return new Promise((resolve, reject) => {
        one.get(url, params).then((response) => {
            resolve(response)
        }).catch((reason) => {
            reject(reason)
        })
    })
}
