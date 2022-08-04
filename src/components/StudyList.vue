<template>
    <div class="w-10/12 block m-auto z-10">
        
        <div class="flex justify-between items-center mt-14 mb-10">
            <p class="dark:text-white">Total : {{items.length}}</p>
            <input type="text" placeholder="TITLE을 입력하세요" v-model="search" class="bg-transparent border dark:border-gray-400 dark:hover:border-primary py-2 px-6 rounded-full dark:text-white">
            <button class="px-6 py-2 border dark:border-white dark:hover:border-transparent dark:hover:bg-primary dark:text-white dark:hover:text-black rounded-lg">Create</button>
        </div>
        <table class="w-full text-white table-auto border-collapse">
            <colgroup>
                <col width="*" />
                <col width="15%" />
                <col width="10%" />
                <col width="10%" />
            </colgroup>
            <thead>
                <tr>
                    <th class="text-medium py-5 border-t-2 border-b-2 border-slate-500 font-bold">Title</th>
                    <th class="text-medium py-5 border-t-2 border-b-2 border-slate-500 font-bold">Register</th>
                    <th class="text-medium py-5 border-t-2 border-b-2 border-slate-500 font-bold">Date</th>
                    <th class="text-medium py-5 border-t-2 border-b-2 border-slate-500 font-bold">Detail</th>
                </tr>
            </thead>            
            <tbody>
                <tr class="dark:hover:bg-slate-600"
                    v-for="(item, i) in filteritem"
                    :key="i">
                    <td class="py-5 border-b border-slate-600 text-left pl-10 font-base">{{ item.title }}</td>
                    <td class="py-5 border-b border-slate-600 font-base">{{ item.register }}</td>
                    <td class="py-5 border-b border-slate-600 font-base">{{ item.date }}</td>
                    <td class="py-5 border-b border-slate-600 font-base">
                        <router-link :to="item.link">
                            More
                        </router-link> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref,onBeforeMount,onMounted, computed, onBeforeUnmount, watchEffect  } from 'vue'

export default {
    setup(){
        const search = ref('')
        const items = ref([
            { title: 'Stackoverflow', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'asdfasdf', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'zxcvzxcvz', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'zxcvzxcv', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'asdf', date: 'asdfasdf', link: 'asdfasdf'  },
            
        ]);

        //computed 안의 함수
        const filteritem = computed(() => {           
            return items.value.filter(item => {
                return item.title.toLowerCase().indexOf(search.value.toLowerCase()) > -1
            })
        })

        return {
            items,
            filteritem,
            search
        }
    }
}
</script>

<style>

</style>