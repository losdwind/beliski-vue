<template>
  <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
    <nav aria-label="Sidebar" class="sticky divide-y divide-gray-300 top-4 xl:col-span-2">
      <p class="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase" id="timeline-headline">My Timeline</p>
      <div class="mt-3 space-y-2" aria-labelledby="Timeline-headline">
        <router-link v-for="item in sideNavigations" :key="item.name" :to="{ name: item.name }" class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50">
          <span class="truncate">{{ item.label }}</span>
        </router-link>
      </div>
    </nav>

    <main class="lg:col-span-9 xl:col-span-6">
      <div class="px-4 sm:px-0">
        <TabSelector :tabs="tabs" />
      </div>
      <div class="mt-4">
        <h1 class="sr-only">Recent Cards</h1>
        <ul role="list" class="space-y-4">
          <li v-for="card in cards" :key="card.id" class="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
            <CardBranch :card="card" :menu-items="verticalDotsMenuItems" />
          </li>
        </ul>
      </div>
    </main>

    <!--  Side Bar-->
    <aside class="hidden xl:block xl:col-span-4">
      <div class="sticky space-y-4 top-4">
        <section aria-labelledby="trending-heading">
          <div class="bg-white rounded-lg shadow">
            <div class="p-6">
              <h2 id="trending-heading" class="text-base font-medium text-gray-900">Your Branches</h2>
              <div class="flow-root mt-6">
                <ul role="list" class="space-y-4">
                  <li v-for="card in cards" :key="card.id" class="px-4 py-6 bg-gray-100 shadow sm:p-6 sm:rounded-lg">
                    <CardBranchCompact :card="card" :menu-items="verticalDotsMenuItems" />
                  </li>
                </ul>
              </div>
              <div class="mt-6">
                <a href="#" class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">View all</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DotsVerticalIcon, PencilAltIcon, TrashIcon, LinkIcon, ThumbUpIcon, ChatIcon, EyeIcon, ShareIcon, PlusSmIcon, ChatAltIcon } from "@heroicons/vue/solid";

import { Menu, MenuItems, MenuItem, MenuButton } from "@headlessui/vue";
import CardBranch from "../../components/CardBranchContent.vue";
import TabSelector from "../../components/TabSelector.vue";
import CardBranchCompact from "../../components/CardBranchCompact.vue";
import { CollectionIcon, FireIcon, TrendingUpIcon, UserGroupIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "AppCommunity",
  components: {
    CardBranchCompact,
    TabSelector,
    CardBranch,
    PencilAltIcon,
    TrashIcon,
    LinkIcon,
    DotsVerticalIcon,
    ThumbUpIcon,
    ChatIcon,
    EyeIcon,
    ShareIcon,
    PlusSmIcon,
    ChatAltIcon,
    Menu,
    MenuItems,
    MenuItem,
    MenuButton,
  },
  setup() {
    const tabs = [
      { name: "Today", label: "Today", count: "5", current: false },
      { name: "Moment", label: "Moment", count: "6", current: false },
      { name: "Todo", label: "Todo", count: "4", current: true },
      { name: "Person", label: "Person", count: "12", current: false },
    ];

    const sideNavigations = [
      { name: "routeTimelineWordCloud", label: "Word Cloud", icon: CollectionIcon, current: true },
      { name: "routeTimelineAllTags", label: "All Tags", icon: TrendingUpIcon, current: false },
      { name: "routeTimelineMediaFiles", label: "Media", icon: UserGroupIcon, current: false },
      { name: "routeTimelineMainThread", label: "Main Thread", icon: FireIcon, current: false },
      { name: "routeTimelineHiddenClue", label: "Hidden Clue", icon: FireIcon, current: false },
    ];

    const verticalDotsMenuItems = [
      {
        icon: PencilAltIcon,
        label: "Edit",
      },
      {
        icon: LinkIcon,
        label: "Link",
      },
      {
        icon: TrashIcon,
        label: "Trash",
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
    const branchToFollow = [
      {
        name: "Unitd Web&Mobile Design",
        handle: "Unidesign",
        href: "#",
        imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      // More people...
    ];
    const trendingBranches = [
      {
        id: 1,
        user: {
          name: "Floyd Miles",
          imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        body: "What books do you have on your bookshelf just to look smarter than you actually are?",
        comments: 291,
      },
      // More posts...
    ];

    return { tabs, cards, branchToFollow, trendingBranches, verticalDotsMenuItems, sideNavigations };
  },
});
</script>
