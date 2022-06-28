<template>
  <div>
    <h1>
      登出中...

    </h1>
  </div>
</template>

<script>
import {logout} from "@/api/AuthUtil"
import {removeToken} from "@/tool/utils/TokenUtil"

export default {
  name: "Logout",
  created() {

  },
  mounted() {
    logout().then(result => {
      const {code, data, message} = result;
      if (code !== 200 || message !== 'success') {
        return
      }
      removeToken()
      const {redirect} = this.$route.query
      console.info(redirect)
      this.$router.push({
        path: '/login',
        query: {redirect: redirect}
      })
    }).catch(error => {

    })
  }
}
</script>

<style scoped>

</style>
