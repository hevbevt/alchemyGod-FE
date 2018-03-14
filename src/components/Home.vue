<template>
  <el-row>
    <el-col :span="4" class="nav">
        <img class="logo" src="../assets/logo.png" alt="">
        <el-menu :router="true">
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



