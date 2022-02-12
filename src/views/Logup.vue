<template>
  <body>
    <div class="w-full p-10 bg-white">
      <div class="items-center pb-6 border-b border-gray-200 md:flex">
        <div class="flex items-center mt-4 md:mt-0">
          <div class="flex items-center justify-center w-8 h-8 bg-indigo-700 rounded">
            <p class="text-base font-medium leading-none text-white">01</p>
          </div>
          <p class="ml-3 text-base font-medium leading-4 text-gray-800">Sign Up</p>
        </div>
        <div class="flex items-center mt-4 md:mt-0 md:ml-12">
          <div class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded">
            <p class="text-base font-medium leading-none text-gray-800">02</p>
          </div>
          <p class="ml-3 text-base font-medium leading-4 text-gray-800">Security Check</p>
        </div>
        <div class="flex items-center mt-4 md:mt-0 md:ml-12">
          <div class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded">
            <p class="text-base font-medium leading-none text-gray-800">03</p>
          </div>
          <p class="ml-3 text-base font-medium leading-4 text-gray-800">Confirm Info</p>
        </div>
        <div class="flex items-center mt-4 md:mt-0 md:ml-12">
          <div class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded">
            <p class="text-base font-medium leading-none text-gray-800">04</p>
          </div>
          <p class="ml-3 text-base font-medium leading-4 text-gray-800">Onboarding</p>
        </div>
      </div>
      <h1 tabindex="0" role="heading" aria-label="profile information" class="mt-12 text-3xl font-bold text-gray-800 focus:outline-none">Profile info</h1>
      <p role="contentinfo" class="mt-4 font-light leading-tight text-gray-600 focus:outline-nonetext-sm">
        Fill in the data for profile. It will take a couple of minutes.
        <br />You only need a passport
      </p>
      <h2 role="heading" aria-label="enter Personal data" class="mt-10 text-xl font-semibold leading-7 text-gray-800">Personal data</h2>
      <p class="text-sm font-light leading-none text-gray-600 mt-0.5">Your details and place of birth</p>
      <div class="items-center mt-8 md:flex">
        <div class="flex flex-col">
          <label class="mb-3 text-sm leading-none text-gray-800">First name</label>
          <input type="name" tabindex="0" aria-label="Enter first name" class="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded" value="William" />
        </div>
        <div class="flex flex-col mt-8 md:ml-12 md:mt-0">
          <label class="mb-3 text-sm leading-none text-gray-800">Last name</label>
          <input type="name" tabindex="0" aria-label="Enter last name" class="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded" value="Smith" />
        </div>
      </div>
      <div class="items-center mt-12 md:flex">
        <div class="flex flex-col">
          <label class="mb-3 text-sm leading-none text-gray-800">Email Address</label>
          <input type="email" tabindex="0" aria-label="Enter email Address" class="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded" value="smith.william@gmail.com" />
        </div>
        <div class="flex flex-col mt-8 md:ml-12 md:mt-0">
          <label class="mb-3 text-sm leading-none text-gray-800">Phone number</label>
          <input type="number" tabindex="0" aria-label="Enter phone number" class="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded" value="+81 839274" />
        </div>
      </div>
      <div class="items-center mt-12 md:flex">
        <div class="flex flex-col">
          <label class="mb-3 text-sm leading-none text-gray-800">Date of birth</label>
          <input type tabindex="0" aria-label="Enter date of birth" class="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded" value="28.03.1997" />
        </div>
        <div class="flex flex-col mt-8 md:ml-12 md:mt-0">
          <label class="mb-3 text-sm leading-none text-gray-800">Place of birth</label>
          <input type="name" tabindex="0" aria-label="Enter place of birth" class="w-64 p-3 text-sm font-medium leading-none text-gray-800 bg-gray-100 border border-gray-200 rounded" value="San Diego, CA, USA" />
        </div>
      </div>
      <div class="mt-12">
        <div class="flex items-center py-4">
          <div class="relative flex items-center justify-center flex-shrink-0 w-4 h-4 bg-white border border-gray-400 rounded-sm dark:bg-gray-800 dark:border-gray-700">
            <input type="checkbox" tabindex="0" aria-label="I agree with the terms of service" checked class="absolute w-full h-full opacity-0 cursor-pointer checkbox" />
            <div class="hidden text-white bg-blue-500 rounded-sm check-icon">
              <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
          <p class="ml-2 text-sm leading-none">
            I agree with the
            <span class="text-indigo-700">terms of service</span>
          </p>
        </div>
      </div>
      <button role="button" aria-label="Next step" class="flex items-center justify-center py-4 bg-white border border-gray-400 rounded px-7 focus:outline-none mt-7 md:mt-14 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
        <span class="text-sm font-medium text-center text-gray-800 capitalize">Next Step</span>
        <svg class="mt-1 ml-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
        </svg>
      </button>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppLogup",
});
</script>

<style scoped>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
