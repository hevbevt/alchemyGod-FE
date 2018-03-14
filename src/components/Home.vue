<template>
  <el-row class="container">
    <el-col :span="2" class="nav">
      <a class="logo-url" href="/">
        <img class="logo" src="../assets/logo.png" alt="">
      </a>
      <el-menu class="nav-menu" :router="true">
        <el-menu-item index="alchemy">
          <i class="el-icon-menu"></i>
          <span slot="title">炼金</span>
        </el-menu-item>
        <el-menu-item index="inventory">
          <i class="el-icon-document"></i>
          <span slot="title">库存</span>
        </el-menu-item>
        <el-menu-item index="gallery">
          <i class="el-icon-setting"></i>
          <span slot="title">图鉴</span>
        </el-menu-item>
        <el-menu-item index="skin">
          <i class="el-icon-setting"></i>
          <span slot="title">皮肤</span>
        </el-menu-item>
        <el-menu-item index="market">
          <i class="el-icon-setting"></i>
          <span slot="title">市场</span>
        </el-menu-item>
        <el-menu-item index="data">
          <i class="el-icon-setting"></i>
          <span slot="title">数据</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="22" class="wrapper">
      <router-view></router-view>
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
.container {
	height: 100%;
}

.nav {
	text-align: left;
	height: 100%;
	.logo {
		width: 50px;
		height: 50px;
		position: relative;
		left: 0;
	}
	.logo-url {
		display: inline-block;
		width: 100%;
		text-align: center;
		padding: 1.5rem 0;
		margin: 0;
		background: #fff;
		position: relative;
		margin-left: 0;
		left: -1px;
		border-right: solid 1px #e6e6e6;
		border-bottom: 1px solid #e6e6e6;
	}
	.nav-menu {
		height: 100%;
	}
}
</style>



