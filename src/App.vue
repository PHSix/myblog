<!-- 
/home
/about
/repo 
/article
/login -> /admin
/admin -> /login
  /admin/editor
-->

<template>
  <div id="app">
    <app-bar></app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from "./components/AppBar/index.vue";
export default {
  components: {
    "app-bar": AppBar,
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  background-color: #eee;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
