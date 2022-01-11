
<template>
  <div class="min-h-full">
    <app-horizontal-nav />
    <div class="py-10">
      <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="hidden lg:block lg:col-span-3 xl:col-span-2">
          <nav aria-label="Sidebar" class="sticky divide-y divide-gray-300 top-4">
            <div class="pb-8 space-y-1">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
                <span class="truncate">{{ item.name }}</span>
              </a>
            </div>
            <div class="pt-10">
              <p class="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase" id="communities-headline">My communities</p>
              <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
                <a v-for="community in communities" :key="community.name" :href="community.href" class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50">
                  <span class="truncate">{{ community.name }}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <main class="lg:col-span-9 xl:col-span-6">
          <div class="px-4 sm:px-0">
            <div class="sm:hidden">
              <label for="question-tabs" class="sr-only">Select a tab</label>
              <select id="question-tabs" class="block w-full text-base font-medium text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <nav class="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                <a v-for="(tab, tabIdx) in tabs" :key="tab.name" :href="tab.href" :aria-current="tab.current ? 'page' : undefined" :class="[tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10']">
                  <span>{{ tab.name }}</span>
                  <span aria-hidden="true" :class="[tab.current ? 'bg-pink-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
                </a>
              </nav>
            </div>
          </div>
          <div class="mt-4">
            <h1 class="sr-only">Recent questions</h1>
            <ul role="list" class="space-y-4">
              <li v-for="question in questions" :key="question.id" class="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
                <article :aria-labelledby="'question-title-' + question.id">
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
                      <div class="flex self-center flex-shrink-0">
                        <Menu as="div" class="relative inline-block text-left">
                          <div>
                            <MenuButton class="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600">
                              <span class="sr-only">Open options</span>
                              <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
                            </MenuButton>
                          </div>

                          <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                            <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <StarIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                                    <span>Add to favorites</span>
                                  </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <CodeIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                                    <span>Embed</span>
                                  </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <FlagIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                                    <span>Report content</span>
                                  </a>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </transition>
                        </Menu>
                      </div>
                    </div>
                    <h2 :id="'question-title-' + question.id" class="mt-4 text-base font-medium text-gray-900">{{ question.title }}</h2>
                  </div>
                  <div class="mt-2 space-y-4 text-sm text-gray-700" v-html="question.body" />
                  <div class="flex justify-between mt-6 space-x-8">
                    <div class="flex space-x-6">
                      <span class="inline-flex items-center text-sm">
                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <ThumbUpIcon class="w-5 h-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{ question.likes }}</span>
                          <span class="sr-only">likes</span>
                        </button>
                      </span>
                      <span class="inline-flex items-center text-sm">
                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <ChatAltIcon class="w-5 h-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{ question.replies }}</span>
                          <span class="sr-only">replies</span>
                        </button>
                      </span>
                      <span class="inline-flex items-center text-sm">
                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <EyeIcon class="w-5 h-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{ question.views }}</span>
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
                </article>
              </li>
            </ul>
          </div>
        </main>
        <aside class="hidden xl:block xl:col-span-4">
          <div class="sticky space-y-4 top-4">
            <section aria-labelledby="who-to-follow-heading">
              <div class="bg-white rounded-lg shadow">
                <div class="p-6">
                  <h2 id="who-to-follow-heading" class="text-base font-medium text-gray-900">Who to follow</h2>
                  <div class="flow-root mt-6">
                    <ul role="list" class="-my-4 divide-y divide-gray-200">
                      <li v-for="user in whoToFollow" :key="user.handle" class="flex items-center py-4 space-x-3">
                        <div class="flex-shrink-0">
                          <img class="w-8 h-8 rounded-full" :src="user.imageUrl" alt />
                        </div>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900">
                            <a :href="user.href">{{ user.name }}</a>
                          </p>
                          <p class="text-sm text-gray-500">
                            <a :href="user.href">{{ '@' + user.handle }}</a>
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
                      <li v-for="post in trendingPosts" :key="post.id" class="flex py-4 space-x-3">
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
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppHorizontalNav from "./HNav.vue"
import { defineComponent } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '@heroicons/vue/solid'
import { BellIcon, FireIcon, HomeIcon, MenuIcon, TrendingUpIcon, UserGroupIcon, XIcon } from '@heroicons/vue/outline'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
]
const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false },
]
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
]

export default defineComponent({
  name: "AppHome",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverPanel,
    BellIcon,
    ChatAltIcon,
    CodeIcon,
    DotsVerticalIcon,
    EyeIcon,
    FlagIcon,
    MenuIcon,
    PlusSmIcon,
    SearchIcon,
    ShareIcon,
    StarIcon,
    ThumbUpIcon,
    XIcon,
    AppHorizontalNav,
  },
  setup() {
    return {
      user,
      navigation,
      userNavigation,
      communities,
      tabs,
      questions,
      whoToFollow,
      trendingPosts,
    }
  },
})
</script>