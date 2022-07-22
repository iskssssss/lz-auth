
export default {
    info(message) {
        if (!LOG_SWITCH) {
            return
        }
        console.info(message)
    },
    error(message) {
        //if (!LOG_SWITCH) {
        //    return
        //}
        console.error(message)
    },
    debug(message) {
        if (!LOG_SWITCH) {
            return
        }
        console.debug(message)
    }
}
