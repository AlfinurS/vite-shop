<template>
  <div class="header__menu-item header__burger-btn">
    <img src="/img/svg/menu.svg" alt="menu" width="27" height="28" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "iconBurger",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>
