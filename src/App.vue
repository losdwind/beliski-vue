<template>
  <Navbar />

  <div class="content">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({});
</script>
