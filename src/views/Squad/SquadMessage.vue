<template>
    <div class="justify-center rounded-lg shadow bg-white">
        <div class="p-4 overflow-y-auto">
            <ul v-for="message in messages" :key="message.id">
                <li class="flex px-4 py-2">
                    <div class="flex-shrink-0 mr-4" :class="message.id == 1 ? 'justify-end' : 'justify-start'">
                        <img class="inline-block w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" :alt="message.name" />
                    </div>
                    <div class="justify-end">
                        <h4 class="text-lg font-bold">{{ message.name }}</h4>
                        <p class="mt-1 rounded-lg px-4 py-2" :class="message.id == 1 ? 'bg-blue-400' : 'bg-gray-200'">{{ message.content }}</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="relative flex p-4 bg-white adjust-between items-center">
            <input type="text" v-model="newMessage" placeholder="type a new message" class="w-full px-6 py-2 mr-4 bg-gray-200 rounded-lg" />
            <PaperAirplaneIcon class="w-10 h-10 bg-pink-600 text-white p-1 rounded-lg" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { PaperAirplaneIcon } from "@heroicons/vue/solid";

export default defineComponent({
    name: 'SquadMessage',
    components: {
        PaperAirplaneIcon
    },
    setup() {
        const newMessage = ref('')
        const messages = [{
            id: 1,
            name: 'guru',
            content: 'Dolore duis adipisicing est nulla mollit voluptate qui mollit amet et exercitation ullamco nulla. Laborum id aute cupidatat reprehenderit excepteur non. Id anim irure sit sit aliquip do ut ex duis et. Do est commodo elit proident qui id. Dolore esse cupidatat mollit non ipsum minim incididunt aute magna veniam eu ex ullamco Lorem. Magna mollit fugiat esse amet irure nulla duis aliqua Lorem dolor proident. Qui reprehenderit exercitation fugiat nisi pariatur pariatur nisi commodo sint magna consectetur elit cillum commodo.'

        }, {
            id: 0,
            name: 'bingo',
            content: 'Consectetur culpa tempor elit labore proident commodo sunt fugiat qui esse dolore velit aliquip. Reprehenderit officia eiusmod ea qui adipisicing fugiat nostrud quis ex. Commodo cupidatat et velit laboris id velit aliquip ex est reprehenderit elit eiusmod. Esse ad dolor laborum proident in nisi ipsum labore et cupidatat. Dolore minim consequat Lorem ex velit proident nostrud velit proident magna et reprehenderit proident reprehenderit.'

        },
        {
            id: 1,
            name: 'bingo',
            content: 'Consectetur culpa tempor elit labore proident commodo sunt fugiat qui esse dolore velit aliquip. Reprehenderit officia eiusmod ea qui adipisicing fugiat nostrud quis ex. Commodo cupidatat et velit laboris id velit aliquip ex est reprehenderit elit eiusmod. Esse ad dolor laborum proident in nisi ipsum labore et cupidatat. Dolore minim consequat Lorem ex velit proident nostrud velit proident magna et reprehenderit proident reprehenderit.'

        }
        ]




        return { messages, newMessage }
    }
})
</script>