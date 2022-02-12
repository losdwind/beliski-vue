<template>
  <!--  Main Content-->
  <main class="lg:col-span-9 xl:col-span-6">
    <div class="px-4 sm:px-0">
      <TabSelectorWithBadges tabs="tabs" />
    </div>
    <div class="mt-4">
      <h1 class="sr-only">Recent questions</h1>
      <ul role="list" class="space-y-4">
        <li v-for="question in questions" :key="question.id" class="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
          <!--   here is the router view     -->
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import TabSelectorWithBadges from "../../components/TabSelectorWithBadges";
export default {
  name: "TimelineMain",
  components: {TabSelectorWithBadges}
  props:{
    menuItems:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>