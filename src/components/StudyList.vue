<template>
    <div class="m-auto z-10">
        
        <div class="lg:flex block justify-between items-center mt-14 mb-10">
            <p class="lg:flex hidden dark:text-white lg:text-medium text-sm">TOTAL : <span class="pl-1 dark:text-fifth dark:hover:text-fifthHover font-bold lg:text-medium text-sm">{{tweets.length}}</span></p>
            <input type="text" placeholder="CATEGORY를 입력하세요" v-model="search" class="bg-transparent border dark:border-gray-400 border-gray-500 hover:border-third dark:hover:border-primary py-2 px-6 rounded-full dark:text-white">
            <button v-if="stateusers" class="lg:flex block lg:mt-0 mt-6 px-6 py-2 border dark:text-gray-500 dark:border-gray-500 text-gray-400 border-gray-400 rounded-lg" @click="needLogin">글쓰기</button>
            <router-link to="/studycreate" v-else class="lg:flex block lg:mt-0 mt-6 px-6 py-2 border dark:border-white border-gray-500 hover:border-transparent hover:bg-third hover:text-white dark:hover:border-transparent dark:hover:bg-primary dark:text-white dark:hover:text-black rounded-lg">글쓰기</router-link>
        </div>
        <!-- <table class="w-full text-white table-auto border-collapse table">
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
        </table> -->
        <!--pc모드-->
        <div class="lg:block hidden overflow-x-auto mb-32">
            <table class="w-full lg:min-w-full min-w-max text-white table-auto border-collapse table">
                <colgroup>
                    <col width="15%" />
                    <col width="*" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                </colgroup>
                <thead>
                    <tr>
                        <th class="lg:text-sm text-xs py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">CATEGORY</th>
                        <th class="lg:text-sm text-xs py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">TITLE</th>
                        <th class="lg:text-sm text-xs py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">REGISTOR</th>
                        <th class="lg:text-sm text-xs py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">DATE</th>
                        <th class="lg:text-sm text-xs py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">DETAIL</th>
                    </tr>
                </thead>            
                <tbody>
                    <tr 
                        v-for="item in tweets"
                        :key="item.id">
                        <td class="text-third dark:text-fifth dark:hover:text-fifthHover py-5 border-b border-slate-500 dark:border-slate-600 text-center font-light lg:text-sm text-xs">{{ item.category }}</td>
                        <td class="text-black dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 dark:font-thin font-light lg:text-sm text-xs lg:px-2 px-1 leading-7 text-left">{{ item.board_body }}</td>
                        <td class="text-black dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 dark:font-thin font-light lg:text-sm text-xs">{{ item.username }}</td>
                        <td class="text-black dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 dark:font-thin font-light lg:text-sm text-xs">{{ moment(item.created_at).format('YY. MM. DD.') }}</td>
                        <td class="text-black dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 dark:font-thin font-light lg:text-sm text-xs">
                            <router-link :to="`/study/board/${item.id}`" :item="item" :currentUser="currentUser">
                                자세히보기
                            </router-link> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--mobile모드-->
        <div class="lg:hidden block overflow-x-auto mb-32">
            <p class="dark:text-white lg:text-medium text-sm text-left pb-4">TOTAL : <span class="pl-1 dark:text-fifth dark:hover:text-fifthHover font-bold lg:text-medium text-sm">{{tweets.length}}</span></p>
            <div>
                <div v-for="item in tweets" :key="item.id">
                    <div class="text-left dark:text-white text-black py-10 border-t dark:border-gray-600 border-gray-300">
                        <p class="lg:mb-0 mb-2 text-third dark:text-fifth dark:hover:text-fifthHover font-light lg:text-sm text-sm">{{ item.category }}</p>
                        <router-link :to="`/study/board/${item.id}`" :item="item" :currentUser="currentUser" class="block lg:pb-0 pb-4 hover:underline dark:hover:text-primary hover:text-third">
                            <h2 class="text-lg">{{ item.board_body }}</h2>
                            <p class="text-lg font-thin">{{ item.body }}</p>
                        </router-link>
                        <div>
                            <ul class="flex flex-wrap">
                                <li v-for="(hash, i) in item.hashtag" :key="i">
                                    <span class="lg:flex inline-block lg:text-lg text-sm py-1 px-3 dark:bg-bgDark bg-gray-300 lg:mr-4 mr-2 lg:mb-0 mb-2 rounded-full dark:text-white text-black">
                                        {{'#' + hash}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="flex">
                            <span class="dark:text-gray-400 text-gray-400 lg:text-lg text-sm font-extralight">
                                {{ item.username }}
                            </span>
                            <span class="dark:text-gray-400 text-gray-400 mx-1">·</span>
                            <span class="font-extralight lg:text-sm text-sm dark:text-gray-400 text-gray-400">{{ moment(item.created_at).format('YY. MM. DD.') }}</span>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import { storage, BOARD_COLEECTION, USER_COLEECTION, db } from '../firebase'
import { ref,onBeforeMount,onMounted, computed, onBeforeUnmount, watchEffect  } from 'vue'
import { mapGetters } from 'vuex'
import swal from 'sweetalert'
import store from '../store'
import moment from 'moment'
import router from '../router'
import getTweetInfo from '../utils/getTweetInfo'

export default {
    setup(){
        let stateusers = ref(false)
        const tweets = ref([])
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
            //console.log(datass)
            if(datass) {
                stateusers.value = true
            } else {
                stateusers.value = false
            }
        })

        const needLogin = async () =>{
            swal('실패!','로그인이 필요합니다.','warning')
            await router.replace('/login')
        }

        //computed 안의 함수
        const filteritem = computed(() => {           
            return items.value.filter(item => {
                return item.category.toLowerCase().indexOf(search.value.toLowerCase()) > -1
            })
        })

        //유저정보 vuex에서 가져오기
        const currentUser = computed(() => store.state.user)

        onBeforeMount(() => {
            //스냅샷 간 변경사항 예제 https://firebase.google.com/docs/firestore/query-data/listen (실시간업데이트수신대기)
            BOARD_COLEECTION.orderBy('created_at', 'desc').onSnapshot(snapshot => {
                snapshot.docChanges().forEach(async (change) => {
                    let tweet = await getTweetInfo(change.doc.data(), currentUser.value)

                    if(change.type === 'added'){
                        tweets.value.splice(change.newIndex, 0, tweet)
                    } else if (change.type === 'modified'){
                        tweets.value.splice(change.oldIndex, 1, tweet)
                    } else if (change.type === 'removed'){
                        tweets.value.splice(change.oldIndex, 1)
                    }
                })
            })
        })

        return {
            items,
            filteritem,
            search,
            currentUser,
            tweets, 
            moment,
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
.table tbody tr:hover {background:#a4baca2e  !important;}
.dark .table tbody tr:nth-of-type(even){background: #1111112e;}
.table tbody tr:nth-of-type(even){background: #dadada1f;}
</style>