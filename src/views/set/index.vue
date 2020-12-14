<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/set-basics">
            <i class="el-icon-menu"></i>
            <span slot="title">基础设置</span>
          </el-menu-item>
          <el-menu-item index="/set-logistics">
            <i class="el-icon-menu"></i>
            <span slot="title">物流设置</span>
          </el-menu-item>
          <el-menu-item index="/set-admin">
            <i class="el-icon-document"></i>
            <span slot="title">管理员设置 </span>
          </el-menu-item>
          <el-menu-item index="/set-deal">
            <i class="el-icon-document"></i>
            <span slot="title">交易设置 </span>
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