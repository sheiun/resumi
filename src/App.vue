<template>
  <Navbar title="110 年 研替找工作" />
  <Sidebar>
    <Map />
  </Sidebar>
  <Fab />
</template>

<script>
import Map from "./components/Map.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Fab from "./components/Fab.vue";

import M from "materialize-css";

export default {
  name: "App",
  components: {
    Map,
    Navbar,
    Sidebar,
    Fab,
  },
  mounted() {
    [
      "<b class='blue-text'>藍色標記</b> → 爬蟲取得的地址",
      "<b class='grey-text'>灰色標記</b> → 未抓到準確位置",
    ].forEach((msg) =>
      M.toast({
        html: msg,
        classes: "rounded",
      })
    );
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}
</style>
