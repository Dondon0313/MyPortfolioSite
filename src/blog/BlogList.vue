<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fm from 'front-matter'

const posts = ref<{ title: string; date: string; slug: string }[]>([])

const files = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
})

onMounted(async () => {
  for (const path in files) {
    try {
      const raw = await files[path]() // 讀取內容
      const { attributes } = fm<{ title: string; date: string }>(raw)
      const slug = path.split('/').pop()?.replace('.md', '') || ''
      posts.value.push({ ...attributes, slug })
    } catch (err) {
      console.error(`❌ 載入 ${path} 時失敗`, err)
    }
  }

  posts.value.sort((a, b) => b.date.localeCompare(a.date)) // 日期新到舊
})
</script>

<template>
  <div class="p-8 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-8 text-center">
      📚 我的部落格文章
    </h1>
    <ul class="space-y-6">
      <li
        v-for="post in posts"
        :key="post.slug"
        class="bg-white dark:bg-stone-800 p-5 rounded-xl shadow hover:shadow-lg transition"
      >
        <RouterLink
          :to="`/blog/${post.slug}`"
          class="block text-xl font-semibold text-amber-700 hover:underline mb-1"
        >
          {{ post.title }}
        </RouterLink>
        <p class="text-sm text-stone-500">
          {{ post.date }}
        </p>
      </li>
    </ul>
  </div>
</template>


