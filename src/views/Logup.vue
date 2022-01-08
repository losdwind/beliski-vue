<template>
  <div
    class="flex flex-wrap items-center justify-between w-full sm:flex-no-wrap"
  >
    <div
      class="w-full h-64 bg-white rounded-t shadow sm:w-1/3 sm:rounded-l sm:rounded-t-none dark:bg-gray-800"
    >
      here is the logup 1
    </div>
    <div class="w-full h-64 bg-white shadow sm:w-1/3 dark:bg-gray-800">
      here is the logup 2
    </div>
    <div
      class="w-full h-64 bg-white rounded-b shadow sm:w-1/3 sm:rounded-b-none dark:bg-gray-800"
    >
      here is the log up 3
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Log-up",
  setup() {
    return {};
  },
});
</script>

<style></style>
