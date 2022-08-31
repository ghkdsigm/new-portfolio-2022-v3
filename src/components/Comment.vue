<template>
  <div class="lg:mt-4 block dark:text-secondary text-secondary-dark text-left">
      <h4 class="lg:text-xl text-base mb-10 font-light">
        <b class="lg:text-4xl text-2xl block font-extrabold mb-2">COMMENTS</b> 
        간단한 코멘트를 남겨주세요 :)<br />    
      </h4>
      <div class="career mb-40">
        <div class="flex mb-10">
          <div class="flex lg:w-3/5 md:w-4/5 w-5/6">
            <div class="w-2/6 pr-4">
              <input placeholder="Name" class="w-full bg-transparent border border-gray-400 dark:border-gray-500 py-3 px-3 rounded-md" v-model="cTitle" />
            </div>
            <div class="w-4/6 pr-4">
                <input placeholder="Comment" class="w-full bg-transparent border border-gray-400 dark:border-gray-500 py-3 px-3 rounded-md" v-model="cBody" @keyup.enter="saveComment"/>
            </div>
          </div>
          <button type="button" class="dark:bg-primary dark:text-black bg-third text-white dark:border-gray-500 py-3 px-3 rounded-md font-medium text-sm" @click.prevent="saveComment">ADD <span class="lg:inline-block md:inline-block hidden">COMMENT</span></button>
        </div>
        <!--comments-->
        <ul class="mytools lg:pb-40 pb-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">         
          <li v-for="(item,index) in comments" :key="index" class="lg:py-4 py-4 dark:bg-fourth-dark bg-fourth hover:bg-gray-300 rounded-lg lg:px-4 px-4 pinched relative dark:hover:bg-gray-800 items-center">
            <div class="flex items-center justify-center h-full flex-col">
              <p class="w-full break-all border-b border-dotted dark:border-gray-600 border-gray-400 mb-2 pb-2 font-medium lg:text-lg text-sm">{{item.body}}</p>
              <div class="w-full flex justify-between">
                <span class="w-3/5 font-light lg:text-lg text-sm overflow-hidden whitespace-nowrap text-ellipsis">{{item.title}}</span><span class="w-2/5 font-light lg:text-lg text-sm text-right">{{ moment(item.created_at).format('YY. MM. DD.') }}</span>
              </div>
            </div>
          </li>   
        </ul>
      </div>      
    </div>
</template>

<script>
import { storage, COMMENT_COLEECTION, db } from '../firebase'
import addComment from '../utils/addComment'
import store from '../store'
import moment from 'moment'
import getComment from '../utils/getComment'

import { ref, onMounted, computed, onBeforeMount } from "vue";
import { useRouter } from 'vue-router'

export default {
    setup(){
        const cBody = ref('')
        const cTitle = ref('');
        const comments = ref([])
        const router = useRouter()
        const state = ref(false)
     
        const saveComment = async () => {
            if(state.value){
              return false;
            }
            state.value = true;
            if(cTitle.value !== '' && cBody.value !== ''){
                try {
                    await addComment(cTitle.value, cBody.value)
                    swal("등록완료", "코멘트가 등록되었습니다!", "success");    
                    cTitle.value = ''
                    cBody.value = ''
                } catch (e) {
                    console.log('on add comment error on homepage:', e)
                }
            } else {
                swal({
                    title: '코멘트쓰기 실패',
                    text: 'Name 및 Comment를 입력해주세요!',
                    type: 'error',
                    closeOnConfirm: false,                    
                }).then(function(){
                    cTitle.value.focus();    
                })                                     
            }
            state.value = false;
        }

        onBeforeMount(()=>{
          COMMENT_COLEECTION.orderBy('created_at', 'desc').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(async (change) => {
                let comment = await getComment(change.doc.data())

                if(change.type === 'added'){
                    comments.value.splice(change.newIndex, 0, comment)
                } else if (change.type === 'modified'){
                    comments.value.splice(change.oldIndex, 1, comment)
                } else if (change.type === 'removed'){
                    comments.value.splice(change.oldIndex, 1)
                }
            })
          })
        })

        onMounted( () => {            
        })

        return {            
            cTitle,
            cBody,
            saveComment,
            comments,
            moment,
            state
        }
    }
}

</script>


<style scoped>
.pinched {
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}
.dark .pinched:before {
  border-bottom:10px solid #161819;
}

.dark .pinched:hover:before {
  border-bottom:10px solid #1F2937;
}
.pinched:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -10px;
    left: 50%;
    width: 0px;height: 0px;
    border-top:10px solid none;
    border-bottom:10px solid #EBEBEB;
    border-right: 10px solid transparent;
    border-left: 10px solid  transparent;
}

.pinched:hover:before {
  border-bottom:10px solid #D1D5DB;
}

.pinched:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 20px -15px #000000d1;
}
</style>