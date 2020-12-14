<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/shop-list">
            <i class="el-icon-menu"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="/shop-classify">
            <i class="el-icon-document"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
          <el-menu-item index="/shop-specification">
            <i class="el-icon-setting"></i>
            <span slot="title">商品规格</span>
          </el-menu-item>
           <el-menu-item index="/shop-type">
            <i class="el-icon-setting"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
           <el-menu-item index="/shop-comment">
            <i class="el-icon-setting"></i>
            <span slot="title">商品评论</span>
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