  <!-- This example requires Tailwind CSS v2.0+ -->
  <template>
  <!--    <div class="relative z-0 flex -space-x-2 overflow-hidden">-->
  <div class="flex overflow-hidden" v-for="(avatarURL, index) in avatarURLs" :key="index">
      <span class="relative inline-block">
        <img class="w-10 h-10 rounded-full" :src="avatarURL" :alt="`Member ${index}`" />
        <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />
      </span>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AvatarStacked",
  props: {
    avatarURLs: {
      type: Array as PropType<Array<string>>,
      required: true
    },
  },
})
</script>