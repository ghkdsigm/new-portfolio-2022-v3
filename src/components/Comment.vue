<template>
  <div class="lg:mt-4 block dark:text-secondary text-secondary-dark text-left">
      <h4 class="lg:text-xl text-base mb-10 font-light">
        <b class="lg:text-4xl text-2xl block font-extrabold mb-2">COMMENTS</b> 
        간단한 코멘트를 남겨주세요 :)<br />    
      </h4>
      <div class="career mb-6">
        <div class="flex mb-10">
          <div class="flex w-3/5">
            <div class="w-2/6 pr-4">
              <input placeholder="Name" class="w-full bg-transparent border border-gray-500 dark:border-gray-200 py-3 pl-3 rounded-md" v-model="cTitle" />
            </div>
            <div class="w-4/6 pr-4">
                <input placeholder="Comment" class="w-full bg-transparent border border-gray-500 dark:border-gray-200 py-3 pl-3 rounded-md" v-model="cBody" @keyup.enter="saveComment"/>
            </div>
          </div>
          <button type="button" class="dark:bg-primary dark:text-black bg-third text-white dark:border-gray-500 py-3 px-3 rounded-md font-medium text-sm" @click.prevent="saveComment">REGISTER</button>
        </div>
        <!--comments-->
        <ul class="mytools mb-40 grid grid-cols-3 gap-10">         
          <li v-for="(item,index) in comments" :key="index" class="lg:py-4 py-2">
            <div class="">
              <p class="border-b dark:border-white border-gray-500 mb-2 pb-2 font-medium text-lg">{{item.body}}</p>
              <div class="flex justify-between">
                <span class="font-light text-base">{{item.title}}</span><span class="font-light text-base">{{ moment(item.created_at).format('YY. MM. DD.') }}</span>
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
.ballon {
    display: none;
    position: absolute;
    width: 205px;
    height: 40px;
    left: 448px;
    bottom: 62px;
    background: #484848;
    color: white;
    border-radius: 5px;
    padding: 12px 12.8px;
}


.ballon:after {
    border-top: 10px solid #484848;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 40px;
    left: 160px;
}
</style>