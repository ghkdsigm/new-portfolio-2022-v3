<template>
    <div>
        <BackStudy class="relative"></BackStudy>
        <div class="m-auto z-10 mb-32">        
            <div class="flex justify-between items-center mt-14 mb-4">
                <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third">STUDY CREATE</h2>   
            </div>

            <!--게시글 등록-->
            <table class="w-full text-white table-auto border-collapse table border-t border-slate-400 dark:border-slate-700">
                <colgroup>
                    <col width="15%" />
                    <col width="85%" />
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
                        <th class="text-third dark:text-white py-5 border-b border-slate-300 dark:border-slate-700 font-medium lg:text-center text-left">
                            <h4 class="lg:text-base text-sm font-bold">
                                CATEGORY
                            </h4>
                        </th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-300 dark:border-slate-700 font-base">
                            <div class="w-full px-4 text-left">
                                <select name="" id="" v-model="selectedcategory"  @change="changeLang()" class="dark:bg-basicBg bg-transparent border border-gray-400 dark:border-gray-500 dark:text-white text-black rounded-lg py-2 pr-6 pl-3">
                                    <option v-for="item in langList" :key="item.text" :value="item.lang">
                                        {{ item.text }}
                                    </option>
                                </select>                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-third dark:text-white py-5 border-b border-slate-300 dark:border-slate-700 font-medium lg:text-center text-left">
                            <h4 class="lg:text-base text-sm font-bold">
                                TITLE
                            </h4>
                        </th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-300 dark:border-slate-700 font-base">
                            <div class="w-full px-4">
                                <textarea v-model="boardBody" rows="1" placeholder="제목을 입력해주세요." class=" w-full bg-transparent border border-gray-400 dark:border-gray-500 py-3 pl-3 rounded-lg"></textarea>
                            </div>
                        </td>
                    </tr>
                    <!-- <tr>
                        <th class="text-third dark:text-white  py-5 border-b border-slate-400 dark:border-slate-700 lg:pl-10 pl-4 font-medium lg:text-center text-left">
                            <h4 class="lg:text-xl text-sm font-bold">
                                CONTENT
                            </h4>
                        </th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-400 dark:border-slate-700 font-base">
                            <div class="w-full px-4">
                                <textarea name="" id="" cols="30" rows="10"  class="w-full bg-transparent p-4 border border-gray-400 dark:border-gray-500 rounded-lg"></textarea>
                            </div>
                        </td>
                    </tr> -->
                    <tr>
                        <th class="text-third dark:text-white  py-5 border-b border-slate-400 dark:border-slate-700 font-medium lg:text-center text-left">
                            <h4 class="lg:text-base text-sm font-bold">
                                CONTENT
                            </h4>
                        </th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-400 dark:border-slate-700 font-base">
                            <div class="w-full px-4">
                                <TuiEditor v-model="edittext"></TuiEditor>
                                {{edittext}}
                                <!-- <TuiViewer :content="edittext"></TuiViewer> -->
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-third dark:text-white  py-5 border-b border-slate-400 dark:border-slate-700 font-medium lg:text-center text-left">
                            <h4 class="lg:text-base text-sm font-bold">
                                HASHTAG
                            </h4>
                        </th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-300 dark:border-slate-700 font-base">
                            <div class="w-full px-4">
                                <div class="flex-col">
                                    <div class="flex mb-4 border border-gray-600 rounded-sm">
                                        <input type="text" v-model="hashplus" class="bg-transparent py-2 px-4" @keyup.enter="hashplusaction"/>
                                        <button type="button" @click="hashplusaction">+</button>
                                    </div>
                                    <ul class="flex">
                                        <li class="flex pr-2" v-for="(item, index) in addedhashtag" :key="index">
                                            <span class="px-4 py-2 border border-gray-600 rounded-full">
                                                {{'#' + item}}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex lg:justify-end justify-center lg:mb-0 mb-6 mt-4">
                <!-- <router-link to="/study" type="button" class="mr-4 text-medium py-3 px-6 border dark:border-gray-400 border-gray-500 dark:hover:border-transparent  dark:hover:bg-primary hover:bg-third dark:hover:text-black dark:text-gray-300 text-gray-700 hover:text-gray-100 font-medium  rounded-md">
                    List
                </router-link> -->
                <button @click="save" type="button" class="text-medium py-3 px-6 border dark:border-gray-400 border-gray-500 dark:hover:border-transparent  dark:hover:bg-primary hover:bg-third dark:hover:text-black dark:text-gray-300 text-gray-700 hover:text-gray-100 font-medium  rounded-md">
                    Register
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import BackStudy from './common/BackStudy.vue'
import TuiEditor from './editor/TuiEditor.vue'
import TuiViewer from './editor/TuiViewer.vue'
import addTweet from '../utils/addTweet'
import store from '../store'

import { ref, onMounted, computed } from "vue";
import { useRouter } from 'vue-router'

export default {
    components:{
        BackStudy,
        TuiEditor,
        TuiViewer
    },
    setup(){
        const hashplus = ref('')
        const addedhashtag = ref([])
        const boardBody = ref('')
        const edittext = ref('asdfasdf')
        const currentUser = computed(() => store.state.user)
        const langList = ref([{text:'선택', lang: 'selected'}, {text:'js', lang: 'javascript'}, {text:'ts', lang: 'typescript'}, {text:'vue2', lang:'vue2'}, {text:'vue3', lang:'vue3'}, {text:'react', lang:'react'}, {text:'nodejs', lang:'nodejs'}, {text:'cs', lang:'computerscience'}, {text:'algorithm', lang:'algorithm'}, {text:'etc', lang:'etc'}])
        const selectedcategory = ref('selected')
        const router = useRouter()

        const changeLang = () => {
            console.log(selectedcategory.value)
        }
        const save = async () => {
            try {
                await addTweet(selectedcategory.value, boardBody.value, edittext.value, currentUser.value)
                alert('게시글이 등록되었습니다!')            
                selectedcategory.value = 'selected'
                boardBody.value = ''
                edittext.value = ''
                router.replace("/study")
            } catch (e) {
                console.log('on add tweet error on homepage:', e)
            }
        }

        const hashplusaction = (e) => {
            e.preventDefault()            
            if(hashplus.value !== ''){
                addedhashtag.value.push(hashplus.value)
                console.log(addedhashtag.value)
                hashplus.value = ''
            }
        }

        onMounted( () => {            
        })
        return {            
            langList,
            changeLang,
            edittext,
            boardBody,
            currentUser,
            selectedcategory,
            save,
            hashplus,
            hashplusaction,
            addedhashtag
        }
    }
}

</script>

<style scoped>
.dark .table tbody tr:hover {background:transparent !important;}
.table tbody tr:hover {background:transparent  !important;}
.dark .table tbody tr:nth-of-type(even){background: transparent;}
.table tbody tr:nth-of-type(even){background: transparent;}

</style>