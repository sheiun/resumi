<template>
  <div class="modal">
    <div class="modal-content">
      <h4>{{ title }}</h4>
      <p v-html="content"></p>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  mounted() {
    const popup = M.Modal.init(document.querySelector(".modal"));
    this.$store.state.popup = popup;
  },
  computed: {
    title() {
      if (this.$store.state.popupData) {
        return this.$store.state.popupData.title;
      }
      return "";
    },
    content() {
      if (this.$store.state.popupData) {
        return this.$store.state.popupData.content;
      }
      return "";
    },
  },
};
</script>

<style></style>
