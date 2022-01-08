<template>
  <div class="content">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "./input.css";
export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
});
</script>
