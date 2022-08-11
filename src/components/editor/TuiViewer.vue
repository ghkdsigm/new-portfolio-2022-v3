<template>
  <div ref="refEditor" class="EditorWrapper">2222</div>
</template>

<script setup lang="ts">
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import Viewer from "@toast-ui/editor";
import '@toast-ui/editor/dist/toastui-editor-viewer.css'; // Viewr's Style

import { ref, onMounted, defineProps, defineEmits } from "vue";



const refEditor = ref(); // template의 ref의 값과 동일한 변수 선언       
const viewer = ref<Viewer | null>()
const props = defineProps<{content:string}>()
const emits = defineEmits<{(e:'update:modelValue', value: string): void}>()

onMounted(() => { 
    //console.log("====" + refEditor.value)
    viewer.value = new Viewer({
        el: refEditor.value as HTMLDivElement,
        initialValue: props.content,
        //plugins: [[codeSyntaxHighlight, { highlighter: Prism }]],
        //plugins: [colorSyntax]
    }) 
    //editor.getMarkdown();
})

</script>

<style scoped>
.EditorWrapper {background:#fff;}
</style>