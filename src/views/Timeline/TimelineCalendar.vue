<template>
  <body class="min-h-screen bg-gray-200 dark:bg-gray-900">
  <div class="flex items-center justify-center px-4 py-8">
    <div class="w-full max-w-sm shadow-lg">
      <div class="p-5 bg-white rounded-t md:p-8 dark:bg-gray-800">
        <div class="flex items-center justify-between px-4">
          <span class="text-base font-bold text-gray-800 focus:outline-none dark:text-gray-100" tabindex="0">October 2020</span>
          <div class="flex items-center">
            <button aria-label="calendar backward"
                    class="text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100">
              <svg class="icon icon-tabler icon-tabler-chevron-left" fill="none" height="24" stroke="currentColor"
                   stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                <polyline points="15 6 9 12 15 18"/>
              </svg>
            </button>
            <button aria-label="calendar forward"
                    class="ml-3 text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100">
              <svg class="icon icon-tabler icon-tabler-chevron-right" fill="none" height="24" stroke="currentColor"
                   stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                <polyline points="9 6 15 12 9 18"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between pt-12 overflow-x-auto">
          <table class="w-full">
            <thead>
            <tr>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                </div>
              </th>
              <th>
                <div class="flex justify-center w-full">
                  <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                </div>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="pt-6">
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer"></div>
              </td>
              <td class="pt-6">
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer"></div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer"></div>
              </td>
              <td class="pt-6">
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">1</p>
                </div>
              </td>
              <td class="pt-6">
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">2</p>
                </div>
              </td>
              <td class="pt-6">
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base text-gray-500 dark:text-gray-100">3</p>
                </div>
              </td>
              <td class="pt-6">
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base text-gray-500 dark:text-gray-100">4</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">5</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">6</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">7</p>
                </div>
              </td>
              <td>
                <div class="w-full h-full">
                  <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                    <a class="flex items-center justify-center w-8 h-8 text-base font-medium text-white bg-indigo-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500"
                       role="link" tabindex="0">8</a>
                  </div>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">9</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base text-gray-500 dark:text-gray-100">10</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base text-gray-500 dark:text-gray-100">11</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">12</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">13</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">14</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">15</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">16</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base text-gray-500 dark:text-gray-100">17</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base text-gray-500 dark:text-gray-100">18</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">19</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">20</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">21</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">22</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">23</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base text-gray-500 dark:text-gray-100">24</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base text-gray-500 dark:text-gray-100">25</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">26</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">27</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">28</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">29</p>
                </div>
              </td>
              <td>
                <div class="flex justify-center w-full px-2 py-2 cursor-pointer">
                  <p class="text-base font-medium text-gray-500 dark:text-gray-100">30</p>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="px-5 py-5 rounded-b md:py-8 md:px-16 dark:bg-gray-700 bg-gray-50">
        <div class="px-4">
          <div class="pb-4 border-b border-gray-400 border-dashed">
            <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
            <a class="mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100"
               tabindex="0">Zoom call with design team</a>
            <p class="pt-2 text-sm leading-none leading-4 text-gray-600 dark:text-gray-300">Discussion on UX sprint and
              Wireframe review</p>
          </div>
          <div class="pt-5 pb-4 border-b border-gray-400 border-dashed">
            <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">10:00 AM</p>
            <a class="mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100"
               tabindex="0">Orientation session with new hires</a>
          </div>
          <div class="pt-5 pb-4 border-b border-gray-400 border-dashed">
            <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
            <a class="mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100"
               tabindex="0">Zoom call with design team</a>
            <p class="pt-2 text-sm leading-none leading-4 text-gray-600 dark:text-gray-300">Discussion on UX sprint and
              Wireframe review</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "",
});
</script>
