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
                                <textarea v-model="boardBody" rows="1" placeholder="제목을 입력해주세요." class=" w-full bg-transparent border border-gray-400 dark:border-gray-500 py-3 pl-3 rounded-lg" ref="bTitle"></textarea>
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
                        <th class="text-third dark:text-white  py-5 border-b border-slate-300 dark:border-slate-700 font-medium lg:text-center text-left">
                            <h4 class="lg:text-base text-sm font-bold">
                                CONTENT
                            </h4>
                        </th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-300 dark:border-slate-700 font-base">
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
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-400 dark:border-slate-700 font-base">
                            <div class="w-full px-4">
                                <div class="flex-col">
                                    <div class="flex w-fit mb-4 border dark:border-gray-600 border-gray-400 rounded-lg overflow-hidden relative">
                                        <input type="text" placeholder="해시태그를 입력해주세요." v-model="hashplus" class="bg-transparent py-2 pl-4 pr-14" @keyup.enter="hashplusaction"/>
                                        <button type="button" class="absolute right-0 bg-indigo-600 text-white leading-6 font-bold text-lg py-2 px-3" @click="hashplusaction">+</button>
                                    </div>
                                    <ul class="flex">
                                        <li ref="delhash" class="flex pr-2" v-for="(item, index) in addedhashtag" :key="index">
                                            <span class="px-4 py-2 border dark:border-gray-600 border-gray-400  rounded-full flex-row items-center">
                                                <span>{{'#' + item}}</span>
                                                <span @click="delhashaction" class="ml-2 px-2 dark:hover:text-black hover:text-white dark:hover:bg-primary hover:bg-third text-center rounded-full flex-row items-center font-thin">X</span>
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
        const delhash = ref()
        const addedhashtag = ref([])
        const boardBody = ref('')
        const bTitle = ref(null);
        const edittext = ref('asdfasdf')
        const currentUser = computed(() => store.state.user)
        const langList = ref([{text:'선택', lang: 'selected'}, {text:'js', lang: 'javascript'}, {text:'ts', lang: 'typescript'}, {text:'vue2', lang:'vue2'}, {text:'vue3', lang:'vue3'}, {text:'react', lang:'react'}, {text:'nodejs', lang:'nodejs'}, {text:'cs', lang:'computerscience'}, {text:'algorithm', lang:'algorithm'}, {text:'etc', lang:'etc'}])
        const selectedcategory = ref('selected')
        const router = useRouter()

        const changeLang = () => {
            console.log(selectedcategory.value)
        }
        const save = async () => {
            if(boardBody.value !== '' && selectedcategory.value !== 'selected'){
                try {
                    await addTweet(selectedcategory.value, boardBody.value, edittext.value, currentUser.value, addedhashtag.value)
                    //alert('게시글이 등록되었습니다!')        
                    swal("등록완료", "게시글이 등록되었습니다!", "success");    
                    selectedcategory.value = 'selected'
                    boardBody.value = ''
                    edittext.value = ''
                    router.replace("/study")
                } catch (e) {
                    console.log('on add tweet error on homepage:', e)
                }
            } else {
                swal({
                    title: '글쓰기 실패',
                    text: '카테고리 및 타이틀을 입력해주세요!',
                    type: 'error',
                    closeOnConfirm: false,                    
                }).then(function(){
                    bTitle.value.focus();    
                })                                     
            }
        }

        const hashplusaction = (e) => {
            e.preventDefault()            
            if(hashplus.value !== ''){
                addedhashtag.value.push(hashplus.value)
                hashplus.value = ''
            } else {
                //alert('해시태그를 입력해주세요.')
                swal("에러발생", "해시태그를 입력해주세요.", "warning");
            }
        }

        const delhashaction = (el) => {
            const eltext = el.target.previousSibling.textContent.substr(1)
            //addedhashtag.value.map((e, v)=> e.includes(eltext) ? e : [...e, v], [])

            // addedhashtag.value.map((e, i)=> {
            //     if(e[i] == eltext){
            //         e.splice(i, 1); 
            //         i--;
            //     }
            // })       
            
            for(var i = 0; i < addedhashtag.value.length; i++){ 
                if (addedhashtag.value[i] === eltext) { 
                    addedhashtag.value.splice(i, 1); 
                    i--; 
            }
            }
            el.target.parentNode.parentNode.remove();
            return
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
            addedhashtag,
            delhash,
            delhashaction,
            bTitle,
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