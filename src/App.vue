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
      "標記顏色 → 依序為<b class='red-text'>紅</b><b class='orange-text'>橙</b>...<b class='purple-text'>紫</b>",
      "標記數字 → 缺額的總人數",
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
@media screen and (max-width: 600px) {
  .toast {
    width: 70%;
    margin: 5px auto;
  }
}
</style>
