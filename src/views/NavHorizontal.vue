<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between py-2 xl:grid xl:grid-cols-12 lg:gap-8">
      <div class="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-1">
        <div class="flex items-center flex-shrink-0">
          <a href="#">
            <img class="block w-auto h-10" src="../assets/logo.svg" alt="Beliski Logo" />
          </a>
        </div>
      </div>

      <div class="hidden lg:block lg:ml-5 xl:col-span-5">
        <div class="flex space-x-4">
          <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.name }" :class="[$route.name === item.name ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']" :aria-current="$route.name === item.name ? 'page' : undefined">
            <component :is="item.icon" :class="[$route.name === item.name ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
            <span class="truncate">{{ item.label }}</span>
          </router-link>
        </div>
      </div>

      <div class="flex-1 min-w-0 md:px-4 lg:px-0 justify-center xl:col-span-3 lg:justify-end">
        <div class="max-w-lg w-full pl-16 pr-8 lg:max-w-xs">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </div>
            <input id="search" name="search" class="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-gray-100 border rounded-md focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm" placeholder="Search" type="search" />
          </div>
        </div>
      </div>
      <div class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
        <!-- Mobile menu button -->
        <PopoverButton class="inline-flex items-center justify-center p-2 -mx-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
          <span class="sr-only">Open menu</span>
          <MenuIcon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
          <XIcon v-else class="block w-6 h-6" aria-hidden="true" />
        </PopoverButton>
      </div>

      <div class="hidden lg:flex lg:items-center lg:ml-4 xl:justify-center xl:col-span-3">
        <router-link :to="{ name: 'routeNotification' }" class="flex-shrink-0 p-1 ml-5 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
          <span class="sr-only">View notifications</span>
          <BellIcon class="w-6 h-6" aria-hidden="true" />
        </router-link>

        <!-- Profile dropdown -->
        <Menu as="div" class="relative flex-shrink-0 ml-5">
          <div>
            <MenuButton class="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              <span class="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full" :src="user.imageUrl" alt="user.id" />
            </MenuButton>
          </div>
          <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
            <MenuItems class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                <router-link :to="{ name: item.name }" :class="[active ? 'bg-gray-100' : '', 'block py-2 px-4 text-sm text-gray-700']">{{ item.label }}</router-link>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>

        <button @click="isOpenSlider = true" class="inline-flex items-center px-4 py-2 ml-6 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">New Diary</button>

        <!-- new post -->
        <TransitionRoot as="template" :show="isOpenSlider">
          <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="isOpenSlider = false" >
            <div class="absolute inset-0 overflow-hidden">
              <DialogOverlay class="absolute inset-0" />

              <div class="fixed inset-y-0 pl-16 max-w-full right-0 flex">
                <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                  <div class="w-screen max-w-md">
                    <New @click-x-button="isOpenSlider = false" @click-cancel="isOpenSlider = false" />
                  </div>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {
  defineComponent
} from 'vue'

import { Menu, MenuItems, MenuItem, PopoverButton, MenuButton, Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

import { SearchIcon, XIcon, BellIcon, MenuIcon } from "@heroicons/vue/solid";
import New from './Timeline/New.vue';
import { ref } from 'vue';

export default defineComponent({
  name: "AppHorizontalNav",
  components: {
    Menu,
    MenuItems,
    MenuItem,
    MenuButton,
    PopoverButton,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    SearchIcon,
    XIcon,
    BellIcon,
    MenuIcon,
    New
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    navigation: {
      type: Object,
      required: true
    },
    userNavigation: {
      type: Object,
      required: true
    },



  },
  setup(props: any) {

    const isOpenSlider = ref(false)

    return { isOpenSlider }

  }
})
</script>
