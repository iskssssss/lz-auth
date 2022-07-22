import JSEncrypt from 'jsencrypt'
const PUBLIC_KEY =
` -----BEGIN PUBLIC KEY-----
 MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCL0AkOOCSlPfMlQVCZ8FByvgPa
 bzZX9B9PCrvDmBJqXo8pNEYAUYDTBP8+2m/zQPJ4I8oiXDLdiqt0GRkI2ZXavN+A
 6DCzt4/gOsw8/1FzDVL09MO86WygGjbIyU3DoOw4QGWvtHQE+qSdlJuhG0e8JReE
 WbuDR1V2j2VqK3euXwIDAQAB
 -----END PUBLIC KEY-----`
const PRIVATE_KEY =
`-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCL0AkOOCSlPfMlQVCZ8FByvgPabzZX9B9PCrvDmBJqXo8pNEYA
UYDTBP8+2m/zQPJ4I8oiXDLdiqt0GRkI2ZXavN+A6DCzt4/gOsw8/1FzDVL09MO8
6WygGjbIyU3DoOw4QGWvtHQE+qSdlJuhG0e8JReEWbuDR1V2j2VqK3euXwIDAQAB
AoGAD+zlayo3+l6BGKhE7xPxhfBg7fum/APBoTY+xvvGdTlKI05h/t1JyD+Ud2tY
PyQRul+RQbKw1I1cFEBbmqd2KySKXNSFeS81fq/zoGhdiCHvT9Xjz7yaT4uD2ch2
3dSjfa3WItNujO7Enz+/hdOWepUicBT8AlnoQ4bobfIYnJECQQD4pLDo71l7LEAa
uM8dfyTKbm/9fJ569DiF35iYdBBukP+/Sicr6iE0WYc+mZkbIPRpQgIXCTX8dN/W
giGWNya3AkEAj/MGFOsUmNIfTdjGdlBZ3umIuzU7BJrmDzM9Ewb1BcxX+XMG/OIU
bQr+CydBD5t5hhh58nJm4NI0d0B2sIfNmQJAecM9F3VPHrC2298xHkLLY47drQdA
HPpIS9cJxW7hNSQw+h54PFs104scXh2eCtkCmCFJILrUA0PA8i1cAVIU1QJAQ61i
gpszh9XiWds9E4sbda4eVsXkBXo+B49ze2qd8CfuhJ0MAADa0ZmFbwD5mbjjHaSM
UOxwaerqN9ba9owioQJBAKCexFINDxzfy0vFDJq+Sm/nWZbT8UI2I3Lp6ohV4OqW
tqwZ/cj9oLfZ0+Qb4U8w83T5SXZh5EItWtxdjlIBZa4=
-----END RSA PRIVATE KEY-----`

/**
 * 私钥加密
 * @param data
 * @returns {string | false}
 */
export function encrypt_pri(data) {
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(PRIVATE_KEY);
    return decrypt.encrypt(data);
}

/**
 * 公钥加密
 * @param data
 * @returns {string | false}
 */
export function encrypt_pub(data) {
    let encryptor = new JSEncrypt()
    encryptor.setPublicKey(PUBLIC_KEY)
    return encryptor.encrypt(data)
}

/**
 * 私钥解密
 * @param data
 * @returns {string | false}
 */
export function decrypt_pri(data) {
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(PRIVATE_KEY);
    return decrypt.decrypt(data);
}
