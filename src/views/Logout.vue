<template>
  <div style="position: absolute; left: 0; top: 0;">
    <h1 style="color: #d2d2d2;">
      登出中...
    </h1>
  </div>
</template>

<script>
import {logout} from "@/api/AuthApi"
import {removeToken} from "@/tool/utils/TokenUtil"

export default {
  name: "Logout",
  created() {

  },
  mounted() {
    logout().then(result => {
      const {code, data, message} = result;
      if (code !== 200) {
        return
      }
      removeToken()
      localStorage.removeItem('userInfo');
      const {redirect} = this.$route.query
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
