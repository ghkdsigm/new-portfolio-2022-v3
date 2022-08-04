<template>
    <div class="w-10/12 block m-auto z-10">
        
        <div class="flex justify-between items-center mt-14 mb-10">
            <p class="dark:text-white text-sm">TOTAL : <span class="dark:text-fifth dark:hover:text-fifthHover font-bold text-base">{{items.length}}</span></p>
            <input type="text" placeholder="TITLE을 입력하세요" v-model="search" class="bg-transparent border dark:border-gray-400 border-gray-500 hover:border-third dark:hover:border-primary py-2 px-6 rounded-full dark:text-white">
            <button class="px-6 py-2 border dark:border-white border-gray-500 hover:border-transparent hover:bg-third hover:text-white dark:hover:border-transparent dark:hover:bg-primary dark:text-white dark:hover:text-black rounded-lg">Create</button>
        </div>
        <table class="w-full text-white table-auto border-collapse table">
            <colgroup>
                <col width="*" />
                <col width="15%" />
                <col width="10%" />
                <col width="10%" />
            </colgroup>
            <thead>
                <tr>
                    <th class="text-medium py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">Title</th>
                    <th class="text-medium py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">Register</th>
                    <th class="text-medium py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">Date</th>
                    <th class="text-medium py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">Detail</th>
                </tr>
            </thead>            
            <tbody>
                <tr 
                    v-for="(item, i) in filteritem"
                    :key="i">
                    <td class="text-third dark:text-fifth dark:hover:text-fifthHover py-5 border-b border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">{{ item.title }}</td>
                    <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">{{ item.register }}</td>
                    <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">{{ item.date }}</td>
                    <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">
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
            { title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'asdfasdf', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'zxcvzxcvz', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'zxcvzxcv', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            
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
.dark .table tbody tr:hover {background:#00000080 !important;}
.table tbody tr:hover {background:#d8d8d894  !important;}
.dark .table tbody tr:nth-of-type(even){background: #1111112e;}
.table tbody tr:nth-of-type(even){background: #dadada4d;}
</style>