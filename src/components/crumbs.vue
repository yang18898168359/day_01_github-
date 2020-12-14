<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bgc' }"
        >后台首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  watch: {
    $route: {
      handler(newval) {
        // console.log(newval);
        this.title = newval.meta.title;
      },
    },
  },
};
</script>
