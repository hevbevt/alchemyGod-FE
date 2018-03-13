<template>
  <el-row>
    <el-col :span="4" class="nav">
        <img class="logo" src="../assets/logo.png" alt="">
        <el-menu :router="true">
          <el-menu-item index="counter">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
	name: 'Home'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav {
	text-align: left;
	.logo {
		width: 50px;
		height: 50px;
		position: relative;
		left: 0;
	}
}
</style>



