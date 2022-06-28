<template>
  <div>
    <p>你好</p>
    <h1>你好</h1>
    <a @click="logoutClick">登出</a>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logoutClick() {
      this.$router.push({
        path: '/logout',
        query: {
          redirect: this.$route.fullPath
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
