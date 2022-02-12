<template>
  <div>
    <div class="flex space-x-3">
      <div class="flex-shrink-0">
        <img class="w-10 h-10 rounded-full" :src="card.author.imageUrl" :alt="card.author.name" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900">
          <a :href="card.author.href" class="hover:underline">{{ card.author.name }}</a>
        </p>
        <p class="text-sm text-gray-500">
          <a :href="card.href" class="hover:underline">
            <time :datetime="card.datetime">{{ card.date }}</time>
          </a>
        </p>
      </div>
      <div v-if="menuItems" class="flex self-center flex-shrink-0">
        <MenuDotsVertical :menuItems="menuItems" />
      </div>
    </div>
    <h2 :id="'card-title-' + card.id" class="mt-4 text-base font-medium text-gray-900">
      {{ card.title }}
    </h2>
  </div>
  <!--  <div class="mt-2 space-y-4 text-sm text-gray-700" v-html="card.body"/>-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MenuDotsVertical from "./MenuDotsVertical.vue";

export default defineComponent({
  name: "CardBranchCompact",
  components: {
    MenuDotsVertical,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
    menuItems: {
      type: Object,
    },
  },
});
</script>
