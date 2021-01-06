<template>
  <ul id="slide-out" class="sidenav collapsible">
    <li>
      <a class="subheader">篩選</a>
    </li>
    <li>
      <div class="collapsible-header">
        <i class="material-icons">arrow_right</i>
        單位別
      </div>
      <div class="collapsible-body" v-for="(org, i) in orgs" :key="org">
        <a style="padding: 20px;">
          <label>
            <input type="checkbox" v-model="orgChoices[i]" />
            <span>{{ org }}</span>
          </label>
        </a>
      </div>
    </li>
    <li>
      <div class="collapsible-header">
        <i class="material-icons">arrow_right</i>
        產業別
      </div>
      <div class="collapsible-body" v-for="(indu, i) in indus" :key="indu">
        <a style="padding: 20px;">
          <label>
            <input type="checkbox" v-model="induChoices[i]" />
            <span>{{ indu }}</span>
          </label>
        </a>
      </div>
    </li>
    <li>
      <div class="divider"></div>
    </li>
    <li>
      <a class="subheader">其它</a>
    </li>
    <li>
      <a href="https://github.com/sheiun/resumi/" target="_blank">
        <i class="material-icons">code</i>
        原始碼
      </a>
    </li>
  </ul>
  <slot></slot>
</template>

<script>
import M from "materialize-css";
import indus from "../data/industries.json";
import orgs from "../data/orgs.json";

export default {
  name: "Sidebar",
  data: () => ({
    indus,
    induChoices: indus.map(() => false),
    orgs,
    orgChoices: orgs.map(() => false),
  }),
  computed: {
    filteredOrgas() {
      return this.orgs.filter((orga, i) => this.orgChoices[i]);
    },
    filteredIndus() {
      return this.indus.filter((indu, i) => this.induChoices[i]);
    },
  },
  watch: {
    filteredOrgas: function() {
      this.$store.dispatch("filter", {
        orgs: this.filteredOrgas,
        indus: this.filteredIndus,
      });
    },
    filteredIndus: function() {
      this.$store.dispatch("filter", {
        orgs: this.filteredOrgas,
        indus: this.filteredIndus,
      });
    },
  },
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
