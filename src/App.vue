<template>
  <Navbar title="110 年 研替找工作" />
  <Sidebar>
    <Map />
  </Sidebar>
</template>

<script>
import Map from "./components/Map.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Map,
    Navbar,
    Sidebar,
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
