<template>
  <div class="text-left">
    <div class="flex justify-between items-center mt-14 mb-2">
      <h2 class="lg:text-4xl text-2xl block font-extrabold dark:text-primary text-third">CONTACT</h2>
    </div>
    <p class="dark:text-white text-black">
      문의글이나 관심글은 아래 입력란에 작성 후 전송하여 주시거나, 빠른 답변을
      위해 유선상 연락주시면 감사하겠습니다. :)
    </p>
    
    <form id="myform" class="my-10 dark:text-white text-gray-800" ref="form" @submit.prevent="sendEmail">
      <div class="formGroup py-4 flex lg:flex-row flex-col">
        <label class="basis-1/6 text-third dark:text-white lg:text-base text-base font-bold lg:text-center lg:justify-center justify-start items-center flex">Name</label>
        <input type="text" name="user_name" ref="name" placeholder="성함을 입력해주세요" class="basis-5/6 bg-transparent w-full border border-gray-400 dark:border-gray-500 py-3 pl-3 rounded-lg"/>
      </div>
      <div class="formGroup py-4 flex lg:flex-row flex-col">
        <label class="basis-1/6 text-third dark:text-white lg:text-base text-base font-bold lg:text-center lg:justify-center justify-start items-center flex">Email</label>
        <input type="email" name="user_email" ref="email" placeholder="회신받으실 이메일을 작성해주세요" class="basis-5/6 bg-transparent w-full border border-gray-400 dark:border-gray-500 py-3 pl-3 rounded-lg"/>
      </div>
      <div class="formGroup py-4 flex lg:flex-row flex-col">
        <label class="basis-1/6 text-third dark:text-white lg:text-base text-base font-bold lg:text-center lg:justify-center justify-start items-center flex">Message</label>
        <textarea name="message" ref="message" rows="8" placeholder="문의하실 내용을 작성해주세요" class="basis-5/6 bg-transparent w-full border border-gray-400 dark:border-gray-500 py-3 pl-3 rounded-lg"></textarea>
      </div>
      <div class="flex lg:justify-end justify-center lg:mb-0 mb-6 mt-4">
        <input type="submit" value="Send" class="button text-medium py-3 px-6 border dark:border-gray-400 border-gray-500 dark:hover:border-transparent dark:hover:bg-primary hover:bg-third dark:hover:text-black dark:text-gray-300 text-gray-700 hover:text-gray-100 font-medium rounded-md" />
      </div>      
    </form>
    <div class="flex justify-center pt-10 pb-10">
      <span
        class="px-4"><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          class="m-auto"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
            ></path>
          </g></svg
        >+82 10.9406-3935</span
      >
      <span
        class="px-4"><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          class="m-auto"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
            ></path>
          </g></svg
        >ghkdsigm3@gmail.com</span
      >
    </div>
    <!-- <h1 class="Mh1">문의 하기</h1>
    <h2 class="Mh2">Contact.</h2> -->
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      service_id: import.meta.env.VITE_APP_SERVICE_ID,
      template_id: import.meta.env.VITE_APP_TEMPLATE_ID,
      user_id: import.meta.env.VITE_APP_USER_ID,
      template_params: {
        username: "James",
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };
  },
  methods: {
    sendEmail() {
      const formName = this.$refs.name.value;
      const formEmail = this.$refs.email.value;
      const formMessage = this.$refs.message.value;
      if (formName !== "" && formEmail !== "" && formMessage !== "") {
        emailjs
          .sendForm(
            this.service_id,
            this.template_id,
            this.$refs.form,
            this.user_id,
          )
          .then(
            result => {
              alert(
                "메일이 성공적으로 보내졌습니다. 확인 후 답변드리겠습니다 :)",
                result.text,
              );
              this.$refs.form.reset();
            },
            error => {
              alert(
                "전송에 실패하였습니다 확인 후 다시 시도해주세요",
                error.text,
              );
            },
          );
      } else {
        alert("내용을 입력후 메일을 보내주세요");
      }
    },
  },
};
</script>

<style scoped>

</style>
