<template>
  <div class="min-h-full">
    <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
    <Popover as="template" v-slot="{ open }">
      <header
        :class="[open ? 'fixed overflow-y-auto inset-0 z-40 ' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible']"
      >
        <AppHorizontalNav :user="user" :navigation="navigation" :user-navigation="userNavigation" />
        <AppNavHamburger :user="user" :navigation="navigation" :user-navigation="userNavigation" />
      </header>
    </Popover>
    <div class="py-10">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppNavHamburger from "./views/NavHamburger.vue";
import AppCommunity from "./views/Community/Community.vue";
import AppVerticalNavigation from "./views/NavVertical.vue";
import AppHorizontalNav from "./views/NavHorizontal.vue";
import { Popover } from "@headlessui/vue";
import { CollectionIcon, FireIcon, TrendingUpIcon, UserGroupIcon } from "@heroicons/vue/outline";
export default defineComponent({
  name: "App",
  components: {
    AppNavHamburger,
    AppCommunity,
    AppVerticalNavigation,
    AppHorizontalNav,
    Popover,
  },
  setup() {
    const user = {
      name: "Chelsea Hagon",
      email: "chelseahagon@example.com",
      imageUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    };

    const navigation = [
      {
        name: "routeTimeline",
        label: "Timeline",
        icon: CollectionIcon,
        current: true,
      },
      {
        name: "routeScore",
        label: "Score",
        icon: TrendingUpIcon,
        current: false,
      },
      {
        name: "routeSquad",
        label: "Squad",
        icon: UserGroupIcon,
        current: false,
      },
      {
        name: "routeCommunity",
        label: "Community",
        icon: FireIcon,
        current: false,
      },
    ];

    const userNavigation = [
      { name: "routeProfile", label: "Your Profile" },
      { name: "routeSettings", label: "Settings" },
      { name: "routeLogin", label: "Sign out" },
    ];

    return { user, navigation, userNavigation };
  },
});
</script>
