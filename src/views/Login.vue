<template>
  <div style="height: 100%;
    padding: 0;
    width: 100%;
    align-items: center;
    display: flex;">
    <div style="
        max-width: 600px;
        min-width: 300px;
        min-height: 200px;
    padding: 24px;
    margin: auto;
    border-radius: 8px;
    border: 2px solid #ffffff47;
    background: #ffffff47;
    color: #000;
    position: relative;
">
      <p style="    margin: 0;
    font-size: 24px;
    text-align: center;">单点登录</p>
      <div class="form-item">
        <p style="width: 56px">用户名:</p>
        <label for="username"></label>
        <input id="username" v-model="loginForm.username" type="text" placeholder="请输入用户名">
      </div>
      <div class="form-item">
        <p style="width: 56px">密&emsp;码:</p>
        <label for="password"></label>
        <input id="password" v-model="loginForm.password" type="password" placeholder="请输入密码">
      </div>
      <div style="margin: 8px 0; width: 100%;">
        <input style="width: 100%; cursor:pointer;" id="login" type="button" @click="login" value="登录">
      </div>
      <p style="color: red; margin: 0;" v-if="loginErrorMessage != null">{{loginErrorMessage}}</p>
    </div>
  </div>
</template>

<script>
import {login} from "@/api/AuthUtil"
import {setToken} from "@/tool/utils/TokenUtil"
import {getQueryMap} from "@/tool/utils/UrlUtil";

export default {
  name: "Login",
  data() {
    return {
      loginErrorMessage: null,
      loginForm: {
        username: 'admin',
        password: '123456',
      }
    }
  },
  methods: {
    login() {
      this.loginErrorMessage = null
      login(this.loginForm).then(result => {
        const {code, data, message} = result;
        if (code !== 200 || message !== 'success') {
          this.loginErrorMessage = message
          console.error(result)
          return
        }
        setToken(data)
        let {redirect} = this.$route.query;
        redirect = redirect == null ? '/' : redirect;
        const queryMap = getQueryMap(redirect)
        console.info(queryMap)
        this.$router.push({
          path: redirect,
          query: queryMap
        })
      }).catch(error => {
        console.info(error);
      })
    }
  }
}
</script>

<style scoped>

input {
  background: #ffffff91;
  border: 1px solid #fff;
  padding: 4px;
  border-radius: 4px;
}

.form-item {
  margin: 32px 0;
  display: flex;
  position: relative;
  align-items: center;
}

.form-item p {
  padding: 0;
  margin: 0;
}

.form-item input {
  position: absolute;
  right: 0;
  width: calc(100% - 66px);
}
</style>
