<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/member-list">
            <i class="el-icon-menu"></i>
            <span slot="title">会员列表</span>
          </el-menu-item>
          <el-menu-item index="/member-class">
            <i class="el-icon-document"></i>
            <span slot="title">会员等级</span>
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