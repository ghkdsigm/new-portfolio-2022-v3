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

import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style

import { ref, onMounted, defineProps, defineEmits } from "vue";



const refEditor = ref(); // template의 ref의 값과 동일한 변수 선언       
const editor = ref<Editor | null>()
const props = defineProps<{modelValue:string}>()
const emits = defineEmits<{(e:'update:modelValue', value: string): void}>()

onMounted(() => { 
    //console.log("====" + refEditor.value)
    editor.value = new Editor({
        el: refEditor.value as HTMLDivElement,
        height: "500px",
        initialEditType: "markdown",
        previewStyle: "vertical",
        initialValue: props.modelValue,
        events:{
            change:() => {
                if(!editor.value) return
                emits('update:modelValue', editor.value.getMarkdown())
            }
        }
        //plugins: [[codeSyntaxHighlight, { highlighter: Prism }]],
        //plugins: [colorSyntax]
    }) 
    //editor.getMarkdown();
})

</script>

<style scoped>
.EditorWrapper {background:#fff;}
</style>