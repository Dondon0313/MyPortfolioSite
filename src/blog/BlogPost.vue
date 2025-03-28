<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import fm from 'front-matter'

const route = useRoute()
const slug = route.params.slug as string

const post = ref<{
  title: string
  date: string
  content: string
}>({
  title: '',
  date: '',
  content: '',
})

const formattedDate = computed(() =>
  new Date(post.value.date).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
)

onMounted(async () => {
  try {
    const raw = await import(`./posts/${slug}.md?raw`)
    const { attributes, body } = fm<{ title: string; date: string }>(raw.default)

    post.value = {
      title: attributes.title,
      date: attributes.date,
      content: body,
    }
  } catch (err) {
    console.error('❌ 載入文章失敗：', err)
  }
})
</script>

<template>
  <div class="prose dark:prose-invert mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">
      {{ post.title }}
    </h1>
    <p class="text-sm text-stone-500 mb-6">
      {{ formattedDate }}
    </p>
    <div v-html="post.content" />
  </div>
</template>
