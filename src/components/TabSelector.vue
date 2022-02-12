<template>
  <div class="sm:hidden">
    <label for="question-tabs" class="sr-only">Select a tab</label>
    <select id="question-tabs" class="block w-full text-base font-medium text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500">
      <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
    </select>
  </div>
  <div class="hidden sm:block">
    <nav class="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
      <a v-for="(tab, tabIdx) in tabs" :key="tab.name" :href="tab.href" :aria-current="tab.current ? 'page' : undefined" :class="[tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10']">
        <span>{{ tab.name }}</span>
        <span v-if="tab.count" :class="[tab.current ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-900', 'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block']">{{ tab.count }}</span>
        <span aria-hidden="true" :class="[tab.current ? 'bg-pink-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabSelector",
  props: {
    tabs: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>