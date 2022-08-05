<template>
    <div>
        <BackStudy class="relative"></BackStudy>
        <div class="m-auto z-10">        
            <div class="flex justify-between items-center mt-14 mb-10">
                <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third">STUDY CREATE</h2>   
            </div>

            <!--게시글 등록-->
            <table class="w-full text-white table-auto border-collapse table border-t border-slate-400 dark:border-slate-700">
                <colgroup>
                    <col width="20%" />
                    <col width="80%" />
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
                        <th class="text-third dark:text-white py-5 border-b border-slate-400 dark:border-slate-700 lg:pl-10 pl-4 font-medium lg:text-center text-left">
                            <h4 class="lg:text-xl text-sm font-bold">
                                TITLE
                            </h4>
                        </th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-400 dark:border-slate-700 font-base">
                            <div class="w-full px-4">
                                <input type="text" class=" w-full bg-transparent border border-gray-400 dark:border-gray-500 p-4 rounded-lg">
                            </div>
                        </td>
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
                        <th class="text-third dark:text-white  py-5 border-b border-slate-400 dark:border-slate-700 lg:pl-10 pl-4 font-medium lg:text-center text-left">
                            <h4 class="lg:text-xl text-sm font-bold">
                                FILE UPLOAD
                            </h4>
                        </th>
                        <td class="text-gray-600 dark:text-gray-100 py-5 border-b border-slate-400 dark:border-slate-700 font-base">
                            <div class="w-full px-4">
                                <input type="file" class=" w-full bg-transparent border border-gray-400 dark:border-gray-500 p-4 rounded-lg">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex lg:justify-end justify-center lg:mb-0 mb-6">
                <route-link to="" class="mt-4 text-medium py-3 px-6 border dark:border-gray-400 border-gray-500 dark:hover:border-transparent  dark:hover:bg-primary hover:bg-third dark:hover:text-black dark:text-gray-300 text-gray-700 hover:text-gray-100 font-medium  rounded-md">
                    Register
                </route-link>
            </div>
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

<style scoped>
.dark .table tbody tr:hover {background:transparent !important;}
.table tbody tr:hover {background:transparent  !important;}
.dark .table tbody tr:nth-of-type(even){background: transparent;}
.table tbody tr:nth-of-type(even){background: transparent;}
</style>