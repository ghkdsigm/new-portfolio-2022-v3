<template>
    <div v-if="tweet">
        <div class="flex justify-between lg:mt-0 mt-10">
            <BackStudy class="relative"></BackStudy>
        </div>
        <!-- <div class="m-auto z-10">        
            <div class="flex justify-between items-center mt-14 mb-10">
                <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third">BOARD CONTENT</h2>   
            </div>

            <table class="w-full text-white table-auto border-collapse table ">
                <colgroup>
                    <col width="15%" />
                    <col width="35%" />
                    <col width="15%" />
                    <col width="35%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover dark:bg-gray-800 py-5 border-b border-t border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">CATEGORY</th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-t border-slate-500 dark:border-slate-600 font-base">{{ tweet.category }}</td>
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover dark:bg-gray-800 py-5 border-b border-t border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">DATE</th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-t border-slate-500 dark:border-slate-600 font-base">{{ moment(tweet.created_at).format('YY. MM. DD.  HH:mm.') }}</td>
                    </tr>
                    <tr>
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover dark:bg-gray-800 py-5 border-b border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">TITLE</th>
                        <td colspan="3" class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">{{ tweet.board_body }}</td>
                    </tr>
                    <tr>
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover dark:bg-gray-800 border-b border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">CONTENT</th>
                        <td colspan="3" class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">{{ tweet.body }}</td>                        
                    </tr>
                    <tr>
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover dark:bg-gray-800 py-5 border-b border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">HASHTAG</th>
                        <td colspan="3" class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">
                            <ul class="flex justify-center">
                                <li v-for="(item, i) in tweet.hashtag" :key="i" class="px-2">
                                    <span>{{ '#' + item }}</span>
                                </li>
                            </ul>
                        </td>                        
                    </tr>
                </tbody>
            </table>
        </div> -->

        <div class="m-auto lg:px-32 md:px-10 z-10">        
            <div class="flex justify-between items-center mt-14 mb-4">
                <h2 class="lg:text-7xl text-4xl block lg:font-extrabold font-bold dark:text-white text-black text-third text-left">{{ tweet.board_body }}</h2>   
            </div>

            <div class="lg:my-14 my-10">                
                <div class="lg:flex block justify-between">
                    <div class="flex items-center">
                        <p class="dark:text-white text-black lg:text-xl text-lg font-medium">
                            {{ tweet.username }}
                        </p>
                        <p class="mx-2 dark:text-white text-black">·</p>
                        <p class="dark:text-gray-300 text-black lg:text-xl text-sm">{{ moment(tweet.created_at).format('YYYY년 MM월 DD일  HH시mm분') }}</p>
                    </div>
                    <div class="flex">
                        <p class="dark:text-white text-black lg:text-xl text-lg font-medium">
                            <span class="lg:hidden visible dark:text-white text-black">카테고리 : </span>
                            {{ tweet.category }}
                        </p>
                    </div>
                </div>
                <div class="lg:flex block mt-6">
                    <ul class="flex flex-wrap">
                        <li v-for="(item, index) in tweet.hashtag" :key="index">
                            <span class="lg:flex inline-block lg:text-xl text-sm py-2 px-4 dark:bg-bgDark bg-gray-300 lg:mr-4 mr-2 lg:mb-0 mb-2 rounded-full dark:text-white text-black">
                                {{'#' + item}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="text-left dark:text-white text-black">
                {{ tweet.body }}
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import { onBeforeMount, ref, computed } from 'vue'
import router from '../router'
import { useRoute } from 'vue-router'
import getTweetInfo from '../utils/getTweetInfo'
import BackStudy from '../components/common/BackStudy.vue'
import { BOARD_COLEECTION } from '../firebase'
import firebase from 'firebase'
import store from '../store'

export default {
  components:{
    BackStudy,
  },
  setup() {
    const tweet = ref(null)
    const currentUser = computed(() => store.state.user)
    
    const route = useRoute()
    onBeforeMount(async () => {
      await BOARD_COLEECTION.doc(route.params.id).onSnapshot(async (doc) => {
        const t = await getTweetInfo(doc.data(), currentUser.value)
        tweet.value = t
      })
    //    COMMENT_COLLECTION.where('from_tweet_id', '==', route.params.id)
    //     .orderBy('created_at', 'desc')
    //     .onSnapshot((snapshot) => {
    //       snapshot.docChanges().forEach(async (change) => {
    //         let comment = await getTweetInfo(change.doc.data(), currentUser.value)
    //         if (change.type === 'added') {
    //           comments.value.splice(change.newIndex, 0, comment)
    //         } else if (change.type === 'modified') {
    //           comments.value.splice(change.oldIndex, 1, comment)
    //         } else if (change.type === 'removed') {
    //           comments.value.splice(change.oldIndex, 1)
    //         }
    //       })
    //     })
    })
    return { router, tweet, currentUser, moment }
   }
}
</script>

<style>

</style>