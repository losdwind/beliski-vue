<template>
  <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
    <nav aria-label="Sidebar" class="sticky divide-y divide-gray-300 top-4 lg:col-span-2 xl:col-span-2">
      <p class="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase" id="communities-headline">My communities</p>
      <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
        <router-link v-for="community in communities" :key="community.name" :to="{ name: 'routeCommunity', params: { name: community.name } }" class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50">
          <span class="truncate">{{ community.label }}</span>
        </router-link>
      </div>
    </nav>

    <!--  Main Content-->
    <main class="lg:col-span-5 xl:col-span-6">
      <div class="px-4 sm:px-0">
        <TabSelector :tabs="tabs" />
      </div>
      <div class="mt-4">
        <h1 class="sr-only">Recent Cards</h1>
        <ul role="list" class="space-y-4">
          <li v-for="card in cards" :key="card.id" class="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
            <CardBranchFull :card="card" :menu-items="verticalDotsMenuItems" />
          </li>
        </ul>
      </div>
    </main>

    <aside class="hidden lg:col-span-5 xl:block xl:col-span-4">
      <div class="sticky space-y-4 top-4">
        <CommunitySidebar />
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardBranchFull from "../../components/CardBranchContent.vue";
import TabSelector from "../../components/TabSelector.vue";
import CommunitySidebar from "./CommunitySideBar.vue";
import { ShieldExclamationIcon } from "@heroicons/vue/solid";

export default defineComponent({
  name: "AppCommunity",
  components: {
    CommunitySidebar,
    TabSelector,
    CardBranchFull,
  },
  setup() {
    const tabs = [
      { name: "Recent", href: "#", current: true },
      { name: "Most Liked", href: "#", current: false },
      { name: "Most Subscribed", href: "#", current: false },
    ];
    const verticalDotsMenuItems = [
      {
        icon: ShieldExclamationIcon,
        label: "Report",
      },
    ];

    const cards = [
      {
        id: "81614",
        likes: "29",
        replies: "11",
        views: "2.7k",
        author: {
          name: "Dries Vincent",
          imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          href: "#",
        },
        date: "December 9 at 11:43 AM",
        datetime: "2020-12-09T11:43:00",
        href: "#",
        title: "What would you have done differently if you ran Jurassic Park?",
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
      },
      // More cards...
    ];

    const communities = [
      { name: "creation", label: "Creation" },
      { name: "competetion", label: "Competition" },
      { name: "startup", label: "Startup" },
      { name: "discussion", label: "Discussion" },
      { name: "perfection", label: "Perfection" },
      { name: "idol", label: "Idol" },
      { name: "hobby", label: "Hobby" },
      { name: "game", label: "Game" },
    ];
    return { tabs, cards, communities, verticalDotsMenuItems };
  },
});
</script>
