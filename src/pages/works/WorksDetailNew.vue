<template>
  <div class="dark:text-primary text-third">
    <div class="flex justify-between lg:mt-0 mt-10 lg:sticky lg:top-0 lg:z-50">
      <BackWorks class="relative"></BackWorks>
      <a
        :href="data.url"
        target="_blank"
        class="lg:mt-12 mt-0 dark:hover:bg-amber-400 relative lg:text-lg text-xs border py-2 px-4 rounded-full dark:border-gray-100 dark:hover:border-transparent border-third text-third dark:hover:text-black dark:text-gray-100 font-bold hover:bg-third hover:text-white"
        >Visit the website</a
      >
    </div>
    <div class="relative mt-4">
      <div
        class="lg:text-4xl text-xl lg:font-extrabold font-bold font-base mt-6 mb-2 dark:text-white text-black"
      >
        {{ data.title }}
      </div>
      <p class="lg:mb-10 mb-6">{{ data.sub }}</p>
      <div v-if="typeof data.innerImage === 'string'" class="my-4 lg:p-12 p-6 dark:bg-innerBg bg-innerBgWhite" >
        <img
          :src="data.innerImage !== '' ? data.innerImage : 'https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022-v3/main/src/assets/images/no-Img.png'"
          class="mx-auto block"
          :alt="data.title + '이미지'"
        />
      </div>
      <div v-else>
        <ul class="flex flex-wrap">
          <li v-for="(item, index) in data.innerImage" :key="index" class="my-4 lg:p-12 p-6 dark:bg-innerBg bg-innerBgWhite lg:w-1/2">
            <img
            :src="item"
            class="mx-auto block"
            :alt="item.title + '이미지'"
          />
          </li>
        </ul>
      </div>
      <!-- <rounter-link :to="data.url">ss</rounter-link> -->
      <div class="lg:mt-20 mt-6 mb-40 dark:text-white text-black text-left">
        <div class="py-2 fd-list">
          <span class="dark:text-primary text-third pr-1 lg:text-lg text-base"
            >프로젝트 참여도 :
          </span>
          <span class="lg:text-lg text-base">{{ data.party }}</span>
        </div>
        <div class="lg:flex block py-2 fd-list">
          <span class="dark:text-primary text-third pr-1 lg:text-lg text-base"
            >상세 참여도 :
          </span>
          <ul>
            <li v-for="(item, index) in data.part" :key="index">
              <span class="lg:text-lg text-base">
                {{ item.ds }}
              </span>
              <span class="lg:text-lg text-base">
                {{ item.op }}
              </span>
              <span class="lg:text-lg text-base">
                {{ item.pb }}
              </span>
              <span class="lg:text-lg text-base">
                {{ item.pt }}
              </span>
            </li>
          </ul>
        </div>
        <div class="py-2 fd-list">
          <span class="dark:text-primary text-third pr-1 lg:text-lg text-base"
            >투입 기간 :</span
          >
          <span class="lg:text-lg text-base">{{ data.time }}</span>
        </div>
        <div class="py-2 fd-list">
          <span class="dark:text-primary text-third pr-1 lg:text-lg text-base"
            >주 이용자 :</span
          >
          <span class="lg:text-lg text-base">{{ data.target }}</span>
        </div>
        <div class="py-2 fd-list">
          <span class="dark:text-primary text-third pr-1 lg:text-lg text-base"
            >사용 언어 :</span
          >
          <span class="lg:text-lg text-base">{{ data.language }}</span>
        </div>
        <div class="py-2 fd-list">
          <span class="dark:text-primary text-third pr-1 lg:text-lg text-base"
            >과업 내용 :</span
          >
          <span class="lg:text-lg text-base">{{ data.content }}</span>
        </div>
        <div class="py-2 fd-list">
          <span class="dark:text-primary text-third pr-1 lg:text-lg text-base"
            >관련기사 및 정보 :</span
          >
          <a
            :href="data.articles"
            target="_blank"
            class="lg:text-lg text-base text-blue-400"
            >바로가기</a
          >
        </div>
        <div class="py-2 fd-list">
          <span class="dark:text-primary text-third pr-1 lg:text-lg text-base"
            >해시 태그 :</span
          >
          <span class="lg:text-lg text-base">{{ data.tag }}</span>
        </div>
      </div>
      <!-- <div class="mb-10">
        <iframe :src="data.url" frameborder="0" class="w-full scroll-auto mb-32 worksIframe"></iframe>
      </div> -->
    </div>
  </div>
</template>

<script>
import BackWorks from '../../components/common/BackWorks.vue';
//import data from '@/data'
export default {
  components: {
    BackWorks,
  },
  name: 'worksDetail',
  data() {
    const index = this.$route.params.contentId;
    return {
      index: index,
      //data:data.Content[index],
      data: this.$store.state.infodatas[index],
    };
  },
  created() {
    // this.$store.dispatch("FETCH_INFO");
    return;
  },
};
</script>

<style scoped>
.worksIframe {
  min-height: 1080px;
}
@media (max-width: 1024px) {
  .worksIframe {
    min-height: 400px;
  }
  .fd-list span {
    display: block;
  }
}
</style>
