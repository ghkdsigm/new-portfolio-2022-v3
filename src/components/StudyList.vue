<template>
    <div class="m-auto z-10">
        
        <div class="lg:flex block justify-between items-center mt-14 mb-10">
            <p class="lg:flex hidden dark:text-white lg:text-medium text-sm">TOTAL : <span class="dark:text-fifth dark:hover:text-fifthHover font-bold lg:text-medium text-sm">{{items.length}}</span></p>
            <input type="text" placeholder="CATEGORY를 입력하세요" v-model="search" class="bg-transparent border dark:border-gray-400 border-gray-500 hover:border-third dark:hover:border-primary py-2 px-6 rounded-full dark:text-white">
            <button v-if="stateusers" class="lg:flex block lg:mt-0 mt-6 px-6 py-2 border dark:text-gray-500 dark:border-gray-500 text-gray-400 border-gray-400 rounded-lg" @click="needLogin">Create</button>
            <router-link to="/studycreate" v-else class="lg:flex block lg:mt-0 mt-6 px-6 py-2 border dark:border-white border-gray-500 hover:border-transparent hover:bg-third hover:text-white dark:hover:border-transparent dark:hover:bg-primary dark:text-white dark:hover:text-black rounded-lg">Create</router-link>
        </div>
        <table class="w-full text-white table-auto border-collapse table">
            <colgroup>
                <col width="10%" />
                <col width="*" />
                <col width="15%" />
                <col width="10%" />
                <col width="10%" />
            </colgroup>
            <thead>
                <tr>
                    <th class="lg:text-base text-sm py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">CATEGORY</th>
                    <th class="lg:text-base text-sm py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">TITLE</th>
                    <th class="lg:text-base text-sm py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">REGISTOR</th>
                    <th class="lg:text-base text-sm py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">DATE</th>
                    <th class="lg:text-base text-sm py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">DETAIL</th>
                </tr>
            </thead>            
            <tbody>
                <tr 
                    v-for="(item, i) in filteritem"
                    :key="i">
                    <td class="text-third dark:text-fifth dark:hover:text-fifthHover py-5 border-b border-slate-500 dark:border-slate-600 text-center font-medium lg:text-base text-sm">{{ item.category }}</td>
                    <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-normal lg:text-base text-sm">{{ item.title }}</td>
                    <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-normal lg:text-base text-sm">{{ item.register }}</td>
                    <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-normal lg:text-base text-sm">{{ item.date }}</td>
                    <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-normal lg:text-base text-sm">
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
import { mapGetters } from 'vuex'
import swal from 'sweetalert'
import store from '../store'
import router from '../router'

export default {
    setup(){
        let stateusers = ref(false)
        const search = ref('')
        const items = ref([
            { category: 'Javascript', title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { category: 'Typescript', title: 'asdfasdf', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { category: 'Vue2', title: 'zxcvzxcvz', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { category: 'Typescript', title: 'zxcvzxcv', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { category: 'Nodejs', title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { category: 'Javascript', title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { category: 'Vue3', title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { category: 'Javascript', title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            { category: 'Javascript', title: 'Stackoverflow', register: 'Admin', date: 'asdfasdf', link: 'asdfasdf'  },
            
        ]);

        watchEffect( async() => {
            // pretend you have a getData getter in store
            //const store = useStore()
            const datass = await store.getters.stateuser;
            console.log(datass)
            if(datass) {
                stateusers.value = true
            } else {
                stateusers.value = false
            }
        })

        const needLogin = async () =>{
            swal('Error!','로그인이 필요합니다.','warning')
            await router.replace('/login')
        }

        //computed 안의 함수
        const filteritem = computed(() => {           
            return items.value.filter(item => {
                return item.category.toLowerCase().indexOf(search.value.toLowerCase()) > -1
            })
        })

        return {
            items,
            filteritem,
            search,
            needLogin,
            stateusers
        }
    },
    computed: {
    ...mapGetters(['stateuser'])
  },
}
</script>

<style scoped>
.dark .table tbody tr:hover {background:#00000080 !important;}
.table tbody tr:hover {background:#d8d8d894  !important;}
.dark .table tbody tr:nth-of-type(even){background: #1111112e;}
.table tbody tr:nth-of-type(even){background: #dadada4d;}
</style>