<template>
  <Navbar title="110 年 研替找工作" />
  <Sidebar>
    <Map />
  </Sidebar>
  <Fab />
  <Popup />
</template>

<script>
import Map from "./components/Map.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Fab from "./components/Fab.vue";
import Popup from "./components/Popup.vue";

import M from "materialize-css";

export default {
  name: "App",
  components: {
    Map,
    Navbar,
    Sidebar,
    Fab,
    Popup,
  },
  mounted() {
    [
      "<b class='blue-text'>藍色標記</b> → 一種職缺",
      "<b class='green-text'>綠色標記</b> → 兩種職缺",
      "<b class='red-text'>紅色標記</b> → 三種職缺",
      "<b class='purple-text'>紫色標記</b> → 多於三種職缺",
    ].forEach((msg) =>
      M.toast({
        html: msg,
        classes: "rounded",
        displayLength: 10000,
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
