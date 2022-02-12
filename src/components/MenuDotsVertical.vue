<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600">
        <span class="sr-only">Open options</span>
        <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1" v-for="(menuItem, index) in menuItems" :key="index">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
              <component :is="menuItem.icon" class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
              <span>{{ menuItem.label }}}</span>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { DotsVerticalIcon } from "@heroicons/vue/solid";
export default defineComponent({
  name: "MenuDotsVertical",
  props: {
    menuItems: {
      type: Object,
      required: true,
    },
  },
  components: {
    DotsVerticalIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
});
</script>
