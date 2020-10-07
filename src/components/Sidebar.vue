<template>
  <ul id="slide-out" class="sidenav collapsible">
    <li>
      <div class="collapsible-header">
        <i class="material-icons">arrow_right</i>
        產業別
      </div>
      <div class="collapsible-body" v-for="indu in indus" :key="indu">
        <a style="padding: 20px;">
          <label>
            <input type="checkbox" />
            <span>{{ indu }}</span>
          </label>
        </a>
      </div>
    </li>
  </ul>
  <slot></slot>
</template>

<script>
import M from "materialize-css";
import indus from "../data/industries.json";

export default {
  name: "Sidebar",
  data: () => ({ indus }),
  mounted() {
    this.$store.state.sidebar = M.Sidenav.init(
      document.querySelector(".sidenav")
    );
    M.Collapsible.init(document.querySelectorAll(".collapsible"));
  },
};
</script>

<style>
.sidenav {
  z-index: 10000;
  width: 200px;
}
.sidenav-overlay {
  z-index: 9999;
}
</style>
