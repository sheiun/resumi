<template>
  <nav class="blue-grey darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo" style="margin-left: 10px;">
        <li class="material-icons">work</li>
        {{ title }}
      </a>
      <ul class="right hide-on-small-only">
        <!-- TODO: mobile compatibility -->
        <!-- NOTE: height: unset; fixes chrome showing problem -->
        <div class="input-field" style="height: unset;">
          <input
            v-model="input"
            id="search"
            type="search"
            placeholder="搜尋..."
            required
          />
          <label class="label-icon" for="search">
            <i class="material-icons">search</i>
          </label>
          <i class="material-icons" @click="clear()">close</i>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    debouncedInput: "",
  }),
  props: {
    title: String,
  },
  computed: {
    input: {
      get() {
        return this.debouncedInput;
      },
      set(val) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.debouncedInput = val;
          this.$store.dispatch("search", this.debouncedInput);
        }, 1000);
      },
    },
  },
  methods: {
    clear() {
      this.input = "";
      this.debouncedInput = "";
    },
  },
};
</script>

<style scoped>
.brand-logo {
  padding: 5px;
  white-space: nowrap;
}
</style>
