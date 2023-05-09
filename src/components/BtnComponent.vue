<template>
  <router-link :to="{ name: 'ProductPage' }"> </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BtnComponent",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>
