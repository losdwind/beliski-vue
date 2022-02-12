<template>
  <!--  Side Bar-->

  <section aria-labelledby="who-to-follow-heading">
    <div class="bg-white rounded-lg shadow">
      <div class="p-6">
        <h2 id="who-to-follow-heading" class="text-base font-medium text-gray-900">Branches to follow</h2>
        <div class="flow-root mt-6">
          <ul role="list" class="-my-4 divide-y divide-gray-200">
            <li v-for="user in branchToFollow" :key="user.handle" class="flex items-center py-4 space-x-3">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" :src="user.imageUrl" alt />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900">
                  <a :href="user.href">{{ user.name }}</a>
                </p>
                <p class="text-sm text-gray-500">
                  <a :href="user.href">{{ "@" + user.handle }}</a>
                </p>
              </div>
              <div class="flex-shrink-0">
                <button type="button" class="inline-flex items-center px-3 py-0.5 rounded-full bg-pink-50 text-sm font-medium text-pink-700 hover:bg-pink-100">
                  <PlusSmIcon class="-ml-1 mr-0.5 h-5 w-5 text-pink-400" aria-hidden="true" />
                  <span>Follow</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <a href="#" class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">View all</a>
        </div>
      </div>
    </div>
  </section>
  <section aria-labelledby="trending-heading">
    <div class="bg-white rounded-lg shadow">
      <div class="p-6">
        <h2 id="trending-heading" class="text-base font-medium text-gray-900">Trending</h2>
        <div class="flow-root mt-6">
          <ul role="list" class="-my-4 divide-y divide-gray-200">
            <li v-for="post in trendingBranches" :key="post.id" class="flex py-4 space-x-3">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" :src="post.user.imageUrl" :alt="post.user.name" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-800">{{ post.body }}</p>
                <div class="flex mt-2">
                  <span class="inline-flex items-center text-sm">
                    <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                      <ChatAltIcon class="w-5 h-5" aria-hidden="true" />
                      <span class="font-medium text-gray-900">{{ post.comments }}</span>
                    </button>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <a href="#" class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">View all</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChatAltIcon, PlusSmIcon } from "@heroicons/vue/solid";
export default defineComponent({
  name: "CommunitySidebar",
  components: {
    ChatAltIcon,
    PlusSmIcon,
  },
  setup() {
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

    return { branchToFollow, trendingBranches };
  },
});
</script>
