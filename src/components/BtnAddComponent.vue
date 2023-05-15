<template>
  <img src="img/svg/cart.svg" alt="log" width="24" height="24" />
  <span class="btn-plain-text">Add to Cart</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BtnAddComponent",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>
