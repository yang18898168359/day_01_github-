<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/bgc">
            <i class="el-icon-menu"></i>
            <span slot="title">后台管理</span>
          </el-menu-item>
          <el-menu-item index="/photo">
            <i class="el-icon-document"></i>
            <span slot="title">相册管理</span>
          </el-menu-item>
          <el-menu-item index="/shoplist">
            <i class="el-icon-setting"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <Crumbs></Crumbs>
          <router-view></router-view>
        </el-main>
    </el-container>
  </div>
</template>
<script>
import Crumbs from '../../components/crumbs'
export default {
  components:{
    Crumbs,
  }
}
</script>