<template>
  <div class="fixed-action-btn">
    <a
      class="btn-floating btn-large blue-grey darken-1"
      @click="$store.dispatch('openSidebar')"
    >
      <i class="large material-icons">filter_alt</i>
    </a>
  </div>
</template>

<script>
export default {
  name: "Fab",
};
</script>
