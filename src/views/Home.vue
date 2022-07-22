<template>
  <div class="home-main">
    <h1>你好! {{this.userInfo?.identifier}}</h1>
    <a @click="logoutClick">登出</a>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  methods: {
    logoutClick() {
      this.$router.push({
        path: '/logout',
        query: {
          redirect: this.$route.fullPath
        }
      })
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style scoped>
  h1, a {
    color: #3275ef;
  }

  .home-main {
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    position: relative;
  }
</style>
