<template>
  <nav class="blue-grey darken-1">
    <div class="nav-wrapper">
      <ul class="left">
        <li>
          <a class="waves-effect" @click="$store.commit('openSidebar')">
            <i class="material-icons">menu</i>
          </a>
        </li>
      </ul>
      <a href="#" class="brand-logo">
        <li class="material-icons">work</li>
        {{ title }}
      </a>
      <ul class="right hide-on-med-and-down">
        <form>
          <!-- TODO: search to filter companies -->
          <div class="input-field">
            <input id="search" type="search" placeholder="搜尋..." required />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.brand-logo {
  padding: 5px;
}
</style>
