<template>
  <div class="dark:text-primary text-black">
    <div class="flex lg:h-screen justify-center lg:items-center items-start lg:mt-0 mt-10">
      <div class="flex flex-col">
        <span class="text-2xl font-bold dark:text-white text-center pb-2">
          <i class="lg:block hidden fab fa-twitter transition-all ease-in-out text-third dark:text-third-dark hover:text-dark">
            <span class="lg:text-4xl text-3xl font-light block lg:inline-block align-text-top" style="font-family: La Belle Aurore;">Motor H</span>
          </i>
          <br class="lg:contents hidden" />  <span class="lg:text-3xl text-2xl" style="font-family: 'Squada One', cursive;">LOGIN</span>
        </span>
        <input v-model="email" type="text" class="my-2 w-96 px-4 py-3 border border-gray-300 dark:border-gray-400 focus:ring-2 focus:border-primary focus:outline-none dark:bg-transparent dark:text-white rounded-full" placeholder="이메일" />
        <input v-model="password" ref="myinput" @keyup.enter="onLogin" type="password" class="my-2 w-96 px-4 py-3 border border-gray-300 dark:border-gray-400 focus:ring-2 focus:border-primary focus:outline-none dark:bg-transparent dark:text-white rounded-full" placeholder="비밀번호" />
        <!-- <button class="text-black dark:text-white hover:opacity-80 font-light py-1" @click="guestLogin">게스트 계정으로 로그인하기 <em class="font-italic">!</em></button> -->
        <button v-if="loading" class="my-4 w-96 rounded-full bg-light text-white py-3">로그인 중입니다..</button>
        <button v-else class="my-4 w-96 rounded-full dark:bg-primary dark:hover:bg-primaryHover dark:text-black text-white py-3 bg-third hover:bg-thirdHover" @click="onLogin">로그인</button>
        <router-link to="/register">
          <div class="dark:text-primary dark:hover:text-primaryHover text-third hover:text-thirdHover">계정이 없으신가요? 회원가입 하기</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from '../components/common/BackHome.vue'
import { ref, onMounted } from 'vue'
import { auth, USER_COLEECTION } from '../firebase'
import { useRouter } from 'vue-router'
import store from '../store'

export default {
  components:{
    BackHome
  },
  setup() {
       const email = ref('') 
       const myinput = ref(null); // vue3 ref 사용방법
       const password = ref('') 
       const loading = ref(false)
       const router = useRouter()

       onMounted(()=>{
          //  console.log(store.state.user)
       })

       const onLogin = async () => {

            if (!email.value){
                //return  alert('이메일을 입력해주세요')
                return swal("로그인 실패", "이메일을 입력해주세요", "warning");
            } else if (!password.value){
                //return  alert('패스워드를 입력해주세요')
                return swal("로그인 실패", "패스워드를 입력해주세요", "warning");
            }

           try{
               loading.value = true
               const credential = await auth.signInWithEmailAndPassword(email.value, password.value)
               const user = credential.user //고유값(uid) 가져오기
               
               // 유저정보 가져오기
               const doc = await USER_COLEECTION.doc(user.uid).get()
               //console.log(doc.data())
               // 유저정보 vuex보내기
               store.commit('SET_USER', doc.data())
               //store.commit('SET_USERS', doc.data())
               swal("인증 완료!", "인증이 완료되었습니다, 환영합니다!", "success");                
               router.replace("/") //router.push로 갔을경우 뒤로갔을때 다시 로그인 화면이 뜨기때문에 replace로 처음값을지정
           } catch(e) {
                switch (e.code) { //fire auth 에러코드 인터넷 검색하면 많이 나옴
                case 'auth/invalid-email':
                    //alert('잘못된 이메일 형식입니다.')
                    swal("Fail","잘못된 이메일 형식입니다.","error");
                    break
                case 'auth/wrong-password':
                    //alert('비밀번호가 틀립니다. 다시 시도해주세요.')
                    swal("Fail","비밀번호가 틀립니다. 다시 시도해주세요.","error");
                    break
                case 'auth/user-not-found':
                    //alert('등록되지 않은 이메일입니다.')
                    swal("Fail","등록되지 않은 이메일입니다.","error");
                    break
                default:
                    //alert(e.message)
                    swal(e.message);
                    break
                }
           } finally {
               loading.value = false
           }
       }
       const guestLogin = () => {
           email.value = 'Guest@guest.com'
           password.value = 'guest1!'
           myinput.value.focus();
       }
       return {email,password,onLogin,loading,guestLogin,myinput}
    },
}
</script>

<style>

</style>