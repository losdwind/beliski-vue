<template>
  <div class="flex justify-between mt-6 space-x-8">
    <div class="flex space-x-6">
      <span class="inline-flex items-center text-sm">
        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
          <ThumbUpIcon class="w-5 h-5" aria-hidden="true" />
          <span class="font-medium text-gray-900">{{ card.likes }}</span>
          <span class="sr-only">likes</span>
        </button>
      </span>
      <span class="inline-flex items-center text-sm">
        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
          <ChatAltIcon class="w-5 h-5" aria-hidden="true" />
          <span class="font-medium text-gray-900">{{ card.replies }}</span>
          <span class="sr-only">replies</span>
        </button>
      </span>
      <span class="inline-flex items-center text-sm">
        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
          <EyeIcon class="w-5 h-5" aria-hidden="true" />
          <span class="font-medium text-gray-900">{{ card.views }}</span>
          <span class="sr-only">views</span>
        </button>
      </span>
    </div>
    <div class="flex text-sm">
      <span class="inline-flex items-center text-sm">
        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
          <ShareIcon class="w-5 h-5" aria-hidden="true" />
          <span class="font-medium text-gray-900">Share</span>
        </button>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChatAltIcon, EyeIcon, ShareIcon, ThumbDownIcon, ThumbUpIcon } from "@heroicons/vue/solid";
export default defineComponent({
  name: "CardBranchBottom",
  components: {
    ChatAltIcon,
    EyeIcon,
    ShareIcon,
    ThumbDownIcon,
    ThumbUpIcon,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
});
</script>
