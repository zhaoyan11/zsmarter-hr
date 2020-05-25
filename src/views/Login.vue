<template>
  <div class="login">
    <el-form class="form" size="small">
      <el-form-item class="form-item">
        <el-input prefix-icon="el-icon-user" placeholder="account"></el-input>
      </el-form-item>

      <el-form-item class="form-item">
        <el-input prefix-icon="el-icon-lock" placeholder="password"></el-input>
      </el-form-item>

      <el-form-item class="form-item">
        <el-button type="primary" style="width: 100%">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    name: "Login",
  }
</script>

<style lang="scss" scoped>
  .login {
    position: relative;

    .form {
      position: absolute;
      top: 50vh;
      right: 250px;
      width: 320px;
      max-width: 90%;
      border-radius: 3px;
      padding: 25px 20px;
      box-sizing: border-box;
      box-shadow: 1px 1px 5px salmon;
      transform: translateY(-50%);
      @media (max-width: 1200px) {
        right: 200px;
      }
      @media (max-width: 992px) {
        right: 150px;
      }
      @media (max-width: 768px) {
        right: 150px;
      }

      .el-form-item {
        margin: 40px 0;
      }
    }
  }

</style>
