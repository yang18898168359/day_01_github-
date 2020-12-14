<template>
  <div>
    <div class="login">
      <el-form label-position="left" label-width="80px" :model="form">
        <h2>UNI - ADMIN</h2>
        <el-form-item label="用户名">
          <el-input v-model="form.user" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.pass"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-button type="primary" class="btn" @click="gotobgc"
          >立即登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: "admin",
        pass: "admin",
      },
    };
  },
  methods: {
    gotobgc() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
          username: this.form.user,
          password: this.form.pass,
        })
        .then((res) => {
            this.$message({
          message: '登陆成功',
          type: 'success'
        });
          //当前登录时间
          var date = new Date();
          console.log(date.getTime() / 1000); //换成秒
          var time = date.getTime() / 1000;
          localStorage.setItem("token", res.data.data.token); //存token
          localStorage.setItem("time", time);
          //跳转home
          this.$router.push("/home");
        })
        .catch((err) => {
          this.$message.error("账号密码错误");
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss">
.login {
  width: 600px;
  margin: 50px auto;
  text-align: center;
  .btn {
    width: 70%;
  }
}
</style>