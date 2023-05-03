<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <main>
      <router-view></router-view>
    </main>
    <!-- <footerComponent></footerComponent> -->
  </div>
</template>

<script lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
  },
});
</script>
