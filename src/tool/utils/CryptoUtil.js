import CryptoJS from "crypto-js";

const SECRET_KEY = CryptoJS.enc.Utf8.parse(SECRET_KEY_STR);
const SECRET_IV = CryptoJS.enc.Utf8.parse(SECRET_IV_STR);

/**
 * 加密方法
 * @param {object} data
 * @returns {string}
 */
export function encryptBase64(data) {
    let plaintText = data
    if (typeof data === "object") {
        try {
            plaintText = JSON.stringify(data);
        } catch (error) {
            console.log("encrypt error:", error);
            return null
        }
    }
    const encryptedData = CryptoJS.AES.encrypt(plaintText, SECRET_KEY, {
        iv: SECRET_IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encryptedData.toString();
}

/**
 * 解密方法
 * @returns {string}
 * @param {string} encryptedBase64Str
 */
export function decryptBase64(encryptedBase64Str) {
    const decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, SECRET_KEY, {
        iv: SECRET_IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);
    return decryptedStr
}
