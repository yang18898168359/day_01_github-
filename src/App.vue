<template>
  <div id="app">
    <el-container>
      <el-header class="nav" v-show="showEdit">
        <h1>UNI - ADMIN</h1>
        <div class="right">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/shop">商品</el-menu-item>
            <el-menu-item index="/order">订单</el-menu-item>
            <el-menu-item index="/member">会员</el-menu-item>
            <el-menu-item index="/set">设置</el-menu-item>
          </el-menu>
          <el-avatar></el-avatar>
          <span type="primary" @click="gotologin">退出登录</span>
        </div>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      showEdit: false,
    };
  },
  methods: {
    gotologin() {
      this.$message("退出登录");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  watch: {
    $route: {
      handler(newval) {
        if(newval.path=='/'){
          this.showEdit=false
        }else{
             this.showEdit=true
        }
      },
    },
  },
};
</script>

<style lang="scss">
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #545c64;
  color: white;
  .right {
    display: flex;
    align-items: center;
  }
}
</style>
