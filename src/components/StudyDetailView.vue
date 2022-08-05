<template>
    <div>
        <BackStudy class="relative"></BackStudy>
        <div class="m-auto z-10">        
            <div class="flex justify-between items-center mt-14 mb-10">
                <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third">STUDY CREATE</h2>   
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
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover bg-gray-500 py-5 border-b border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">11</th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">12</td>
                        <th class="text-third dark:text-fifth dark:hover:text-fifthHover bg-gray-500 py-5 border-b border-slate-500 dark:border-slate-600 text-left pl-10 font-medium">13</th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-500 dark:border-slate-600 font-base">
                            <router-link to="">
                                More
                            </router-link> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import BackStudy from '../components/common/BackStudy.vue'
export default {
  components:{
    BackStudy,
  }
}
</script>

<style>

</style>