<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent
  }
})
</script>

