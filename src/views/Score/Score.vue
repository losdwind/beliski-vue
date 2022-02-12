<template>
  <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
    <div class="lg:col-span-12">
      <ScoreComponentIndividual />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScoreComponentIndividual from "./ScoreComponentIndividual.vue";

export default defineComponent({
  name: "Score",
  components: { ScoreComponentIndividual },
});
</script>
