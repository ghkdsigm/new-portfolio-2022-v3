<template>
    <div v-if="tweet">
        <BackStudy class="relative"></BackStudy>
        <div class="m-auto z-10">        
            <div class="flex justify-between items-center mt-14 mb-10">
                <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third">BOARD CONTENT</h2>   
            </div>

            <!--게시글 등록-->
            <table class="w-full text-white table-auto border-collapse table ">
                <colgroup>
                    <col width="15%" />
                    <col width="35%" />
                    <col width="15%" />
                    <col width="35%" />
                </colgroup>
                <!-- <thead>
                    <tr>
                        <th class="text-medium py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">Title</th>
                        <th class="text-medium py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">Register</th>
                        <th class="text-medium py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">Date</th>
                        <th class="text-medium py-5 border-t-2 border-b-2 dark:border-slate-500 border-slate-400 font-bold dark:text-white text-gray-800">Detail</th>
                    </tr>
                </thead>             -->
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
                    <!-- <tr>
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover dark:bg-gray-800 py-5 border-b border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">11</th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">{{ tweet }}</td>
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover dark:bg-gray-800 py-5 border-b border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">13</th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">
                            <router-link to="">
                                More
                            </router-link> 
                        </td>
                    </tr> -->
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