<template>
  <body>
    <div class="bg-sky-50">
      <div class="items-center justify-center px-4 shadow-sm xl:px-20 md:px-10 sm:px-6 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex">
        <div class="mb-6 md:hidden sm:mb-8">
          <img src="../assets/belsiki-logo.svg" alt="Beliski App Logo" width="160" />
        </div>
        <div class="w-full px-2 py-6 rounded xl:w-1/3 lg:w-5/12 md:w-1/2 lg:px-10 sm:px-6 sm:py-10">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
            <p class="mt-2 text-sm text-center text-gray-600">
              Or
              {{ " " }}
              <a href="#" class="font-medium text-sky-600 hover:text-sky-500">start your 14-day free trial</a>
            </p>
          </div>

          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                  <div class="mt-1">
                    <input id="email" name="email" type="email" autocomplete="email" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <div class="mt-1">
                    <input id="password" name="password" type="password" autocomplete="current-password" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-sky-600 focus:ring-sky-500" />
                    <label for="remember-me" class="block ml-2 text-sm text-gray-900">Remember me</label>
                  </div>

                  <div class="text-sm">
                    <a href="#" class="font-medium text-sky-600 hover:text-sky-500">Forgot your password?</a>
                  </div>
                </div>

                <div>
                  <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Sign in</button>
                </div>
                <div>
                  <p tabindex="0" class="justify-end mt-4 text-sm font-medium leading-none text-gray-500 focus:outline-none">
                    Don't have account?
                    <a href="javascript:void(0)" class="ml-2 text-sm font-bold text-gray-800 cursor-pointer mlleading-none hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline">Sign up here</a>
                  </p>
                </div>
              </form>

              <div class="mt-6">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 text-gray-500 bg-white">Or continue with</span>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-3 mt-6">
                  <div>
                    <a href="#" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                      <span class="sr-only">Sign in with Facebook</span>
                      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a href="#" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                      <span class="sr-only">Sign in with Twitter</span>
                      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a href="#" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                      <span class="sr-only">Sign in with GitHub</span>
                      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 ml-8 xl:w-1/3 md:w-1/2 lg:ml-16 md:mt-0">
          <div class="hidden pl-8 md:block">
            <img src="../assets/belsiki-logo.svg" alt="Beliski App Logo" width="320" />
          </div>
          <div class="flex items-start mt-8">
            <div>
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0666 6.65142C15.7914 6.17428 16.6517 5.94576 17.5177 6.00035C18.3837 6.05493 19.2085 6.38965 19.8677 6.95402C20.5268 7.51839 20.9845 8.28179 21.1718 9.12907C21.3591 9.97636 21.2658 10.8616 20.906 11.6512C20.5461 12.4408 19.9393 13.092 19.177 13.5065C18.4146 13.921 17.5382 14.0764 16.6798 13.9492C15.8215 13.822 15.0277 13.4192 14.4184 12.8014C13.809 12.1836 13.4171 11.3844 13.3016 10.5244C12.9366 8.73142 12.7946 6.57642 13.5086 4.62542C14.2746 2.53542 15.9726 0.821417 19.0136 0.0254175C19.2671 -0.0328119 19.5332 0.00995174 19.7556 0.144642C19.978 0.279332 20.1392 0.495356 20.205 0.746904C20.2708 0.998453 20.2361 1.26575 20.1081 1.4921C19.9802 1.71846 19.7691 1.88608 19.5196 1.95942C17.0596 2.60342 15.9096 3.88942 15.3866 5.31342C15.2316 5.73842 15.1266 6.18742 15.0666 6.65142Z" fill="#4B5563" />
                <path d="M2.06664 6.65142C2.79142 6.17428 3.65171 5.94576 4.51773 6.00035C5.38375 6.05493 6.20853 6.38965 6.86766 6.95402C7.5268 7.51839 7.98454 8.28179 8.17183 9.12907C8.35912 9.97636 8.26581 10.8616 7.90597 11.6512C7.54612 12.4408 6.93927 13.092 6.17695 13.5065C5.41463 13.921 4.53818 14.0764 3.67982 13.9492C2.82145 13.822 2.02772 13.4192 1.41836 12.8014C0.808998 12.1836 0.417052 11.3844 0.301644 10.5244C-0.0633559 8.73142 -0.205356 6.57642 0.508644 4.62542C1.27464 2.53542 2.97264 0.821417 6.01364 0.0254175C6.26706 -0.0328119 6.53318 0.00995174 6.7556 0.144642C6.97801 0.279332 7.13921 0.495356 7.20502 0.746904C7.27084 0.998453 7.23609 1.26575 7.10814 1.4921C6.98019 1.71846 6.7691 1.88608 6.51964 1.95942C4.05964 2.60342 2.90964 3.88942 2.38664 5.31342C2.23164 5.73842 2.12664 6.18742 2.06664 6.65142Z" fill="#4B5563" />
              </svg>
            </div>
            <p class="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5">Well-being cannot exist just in your own head. Well-being is a combination of feeling good as well as actually having meaning, good relationships and accomplishment.</p>
          </div>
          <div class="flex items-center pl-8 mt-10">
            <div class="w-8 h-8">
              <img src="https://ppc.sas.upenn.edu/sites/default/files/styles/medium/public/meps2004.gif?itok=qRyIcRKq" alt="profile picture" class="w-full h-full" />
            </div>
            <div class="ml-2">
              <p class="text-sm font-medium leading-none text-gray-800">Martin Seligman</p>
              <a class="mt-1 text-sm font-medium leading-none text-gray-600 cursor-pointer hover:underline" href="https://en.wikipedia.org/wiki/Martin_Seligman">See profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppLogin",
  setup() {
    const show = ref<Boolean>(true);
    return {
      show,
    };
  },
});
</script>

<style scoped></style>
