<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/order-admin">
            <i class="el-icon-menu"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/order-invoice">
            <i class="el-icon-document"></i>
            <span slot="title">发票管理</span>
          </el-menu-item>
          <el-menu-item index="/order-after">
            <i class="el-icon-setting"></i>
            <span slot="title">售后服务</span>
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