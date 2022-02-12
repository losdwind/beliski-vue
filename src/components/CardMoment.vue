<template>
  <article :aria-labelledby="question.title + question.id">
    <div>
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <img class="w-10 h-10 rounded-full" :src="question.author.imageUrl" alt />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900">
            <a :href="question.author.href" class="hover:underline">{{ question.author.name }}</a>
          </p>
          <p class="text-sm text-gray-500">
            <a :href="question.href" class="hover:underline">
              <time :datetime="question.datetime">{{ question.date }}</time>
            </a>
          </p>
        </div>
        <div class="flex self-center flex-shrink-0"></div>
      </div>
      <h2 :id="'question-title-' + question.id" class="mt-4 text-base font-medium text-gray-900">
        {{ question.title }}
      </h2>
    </div>
    <div class="mt-2 space-y-4 text-sm text-gray-700" v-html="question.body" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DotsVerticalIcon, StarIcon, CodeIcon, FlagIcon, ThumbUpIcon, ThumbDownIcon, ChatAltIcon, EyeIcon, ShareIcon } from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default defineComponent({
  name: "CardMoment",
  components: {
    DotsVerticalIcon,
    StarIcon,
    CodeIcon,
    FlagIcon,
    ThumbUpIcon,
    ThumbDownIcon,
    ChatAltIcon,
    EyeIcon,
    ShareIcon,
    Menu,
    MenuItems,
    MenuItem,
    MenuButton,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>