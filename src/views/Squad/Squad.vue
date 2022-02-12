<template>
  <div class="max-h-screen bg-gray-100">
    <div class="py-6">
      <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:block lg:col-span-3 xl:col-span-3">
          <nav aria-label="Sidebar" class="bg-white shadow top-6 sm:p-6 sm:rounded-lg">
            <!-- Your content -->
            <h1 class="pb-6 text-xl">Your Squds</h1>
            <ul role="list" class="space-y-4 overflow-y-auto">
              <li v-for="branch in branches" :key="branch.id" class="justify-center px-4 py-6 bg-gray-100 rounded">
                <div class="flex justify-start">
                  <AvatarStackedVue :avatarURLs="branch.memberURLs" />
                </div>
                <div class="block pt-2 text-sm text-gray-400">Here today we gonna make a major update</div>
              </li>
            </ul>
          </nav>
        </div>
        <main class="lg:col-span-9 xl:col-span-6">
          <SquadMessage />
        </main>
        <!-- <aside class="hidden xl:block xl:col-span-3">
          <div class="sticky space-y-4 top-6">
            <section aria-labelledby="branch content">
              <div class="bg-white rounded-lg shadow">
                <div class="p-6">
                  <h2 id="trending-heading" class="text-base font-medium text-gray-900">Your Branches</h2>
                  <div class="flow-root mt-6">
                    <CardBranchCompact :card="selectedBranch" />
                  </div>
                  
                </div>
              </div>
            </section>
          </div>
        </aside>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AvatarStackedVue from "../../components/AvatarStacked.vue";
import CardBranchCompactVue from "../../components/CardBranchCompact.vue";
import CardBranchCompact from "../../components/CardBranchCompact.vue";
import SquadMessage from "./SquadMessage.vue";
export default defineComponent({
  components: {
    AvatarStackedVue,
    CardBranchCompactVue,
    CardBranchCompact,
    SquadMessage
  },
  setup() {

    const branches = [
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
        memberURLs: ["https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"],

        title: "What would you have done differently if you ran Jurassic Park?",
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,

      },
      {
        id: "81615",
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
        memberURLs: ["https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"],

        title: "What would you have done differently if you ran Jurassic Park?",
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,

      },
      // More cards...
    ];


    const selectedBranch = ref(branches[0])

    return { branches, selectedBranch };

  },
});
</script>
