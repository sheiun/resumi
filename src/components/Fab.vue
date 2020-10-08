<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large blue-grey darken-1">
      <i class="large material-icons">search</i>
    </a>
    <ul>
      <li>
        <a class="btn-floating blue-grey darken-1">
          <i class="material-icons">insert_chart</i>
        </a>
      </li>
      <li>
        <a class="btn-floating yellow darken-1">
          <i class="material-icons">format_quote</i>
        </a>
      </li>
      <li>
        <a class="btn-floating green"><i class="material-icons">publish</i></a>
      </li>
      <li>
        <a class="btn-floating blue">
          <i class="material-icons">attach_file</i>
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
