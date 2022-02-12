<template>
  <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
    <div class="max-w-3xl px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-4">
      <a v-for="item in navigation" :key="item.name" :to="{ name: item.name }" :aria-current="item.current ? 'page' : undefined" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50', 'block rounded-md py-2 px-3 text-base font-medium']">{{ item.label }}</a>
    </div>
    <div class="pt-4 border-t border-gray-200">
      <div class="flex items-center max-w-3xl px-4 mx-auto sm:px-6">
        <div class="flex-shrink-0">
          <img class="w-10 h-10 rounded-full" :src="user.imageUrl" alt="" />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
          <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
        </div>
        <button type="button" class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
          <span class="sr-only">View notifications</span>
          <BellIcon class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div class="max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4">
        <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
      </div>
    </div>

    <div class="max-w-3xl px-4 mx-auto mt-6 sm:px-6">
      <a href="#" class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700"> New Commit </a>

      <div class="flex justify-center mt-6">
        <a href="#" class="text-base font-medium text-gray-900 hover:underline"> Go Premium </a>
      </div>
    </div>
  </PopoverPanel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PopoverPanel } from "@headlessui/vue";
import { BellIcon } from "@heroicons/vue/solid";

export default defineComponent({
  name: "AppNavHamburger",
  components: {
    PopoverPanel,
    BellIcon,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    navigation: {
      type: Object,
      required: true,
    },
    userNavigation: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
