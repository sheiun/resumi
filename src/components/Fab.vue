<template>
  <div class="fixed-action-btn">
    <a
      class="btn-floating btn-large blue-grey darken-1"
      @click="$store.dispatch('openSidebar')"
    >
      <i class="large material-icons">filter_alt</i>
    </a>
    <ul>
      <li>
        <a class="btn-floating green"><i class="material-icons">get_app</i></a>
      </li>
      <li class="hide-on-med-and-up">
        <!-- TODO: search feature for mobile -->
        <a class="btn-floating blue">
          <i class="material-icons">search</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  name: "Fab",
  mounted() {
    M.FloatingActionButton.init(document.querySelectorAll(".fixed-action-btn"));
  },
};
</script>

<style>
td:first-child {
  min-width: 20%;
}
</style>
