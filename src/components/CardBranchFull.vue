<template>
  <article :aria-labelledby="card.title + card.id">
    <CardBranchContent :card="card" />
    <CardBranchBottom :card="card" />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CardBranchContent from "./CardBranchContent.vue";
import CardBranchBottom from "./CardBranchBottom.vue";

export default defineComponent({
  name: "CardBranchFull",
  components: { CardBranchBottom, CardBranchContent },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
});
</script>
