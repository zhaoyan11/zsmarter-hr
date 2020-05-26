<template>
  <div class="login">
    <el-form :model="user" ref="form" :rules="rules" class="form" size="small">
      <el-form-item prop="account" class="form-item">
        <el-input v-model="user.account" placeholder="account" prefix-icon="el-icon-user"></el-input>
      </el-form-item>

      <el-form-item prop="password" class="form-item">
        <el-input v-model="user.password" placeholder="password" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>

      <el-form-item class="form-item">
        <el-button type="primary" style="width: 100%" @click="submit()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  // import { apiBasic } from '@/net/index'
  export default {
    name: "Login",
    data: function () {
      return {
        user: {
          account: '',
          password: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      submit() {
        // apiBasic(this.user).then()
        this.$router.push({name: 'staff'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    position: relative;
    height: 100vh;
    background: url('~@/assets/bg.jpg') no-repeat;
    background-size: cover;

    .form {
      position: absolute;
      top: 50vh;
      right: 250px;
      @media (max-width: 1200px) {
        right: 200px;
      }
      @media (max-width: 992px) {
        right: 150px;
      }
      @media (max-width: 768px) {
        right: 50%;
      }
      box-sizing: border-box;
      border-radius: 3px;
      padding: 25px 20px;
      width: 320px;
      max-width: 90%;
      box-shadow: 1px 1px 10px salmon;
      transform: translate(0, -50%);
      @media (max-width: 768px) {
        transform: translate(50%, -50%);
      }

      .el-form-item {
        margin: 40px 0;
      }
    }
  }

</style>
