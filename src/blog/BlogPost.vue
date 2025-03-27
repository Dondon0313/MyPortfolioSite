<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">
      📝 {{ title }}
    </h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div
      class="prose max-w-none"
      v-html="htmlContent"
    />
  </div>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import MarkdownIt from 'markdown-it'
  
  const route = useRoute()
  const htmlContent = ref('')
  const title = ref('')
  
  onMounted(async () => {
    const id = route.params.id as string
    const response = await fetch(`/src/blog/posts/${id}.md`)
    const md = await response.text()
    title.value = id
    htmlContent.value = new MarkdownIt().render(md)
  })
  </script>