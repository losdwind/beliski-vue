<template>
  <nav aria-label="Sidebar" class="sticky divide-y divide-gray-300 top-4">
    <div class="pb-8 space-y-1">
      <a v-for="item in navigation" :key="item.name" :href="item.href"
         :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
         :aria-current="item.current ? 'page' : undefined">
        <component :is="item.icon"
                   :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                   aria-hidden="true"/>
        <span class="truncate">{{ item.name }}</span>
      </a>
    </div>
    <div class="pt-10">
      <p class=" px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase" id="communities-headline">My
        communities</p>
      <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
        <a v-for="community in communities" :key="community.name" :href="community.href"
           class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50">
          <span class="truncate">{{ community.name }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>


<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "AppVerticalNavigation",
  props:{
    navigation:{
      type:Object,
      required:true
    }
  },
  setup() {


    const communities = [
      {name: 'Movies', href: '#'},
      {name: 'Food', href: '#'},
      {name: 'Sports', href: '#'},
      {name: 'Animals', href: '#'},
      {name: 'Science', href: '#'},
      {name: 'Dinosaurs', href: '#'},
      {name: 'Talents', href: '#'},
      {name: 'Gaming', href: '#'},
    ]

    return {communities}
  }
})


</script>
