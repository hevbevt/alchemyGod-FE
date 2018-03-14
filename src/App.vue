<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
html {
  height:100%;
  background-color: #ddd;
}
body{
  margin: 0;
  height: inherit;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background-color: #ddd;
}
</style>
