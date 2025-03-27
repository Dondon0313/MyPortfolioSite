<template>
  <div class="p-8 text-center">
    <button
      class="absolute top-4 right-4 px-3 py-1 rounded text-sm bg-stone-300 dark:bg-stone-700 text-black dark:text-white shadow"
      @click="toggleDark"
    >
      切換 {{ isDark ? '亮' : '暗' }}模式
    </button>

    <h1 class="text-3xl font-bold mb-4">
      👋 歡迎來到我的個人網站
    </h1>
    <p class="text-lg mb-8">
      這是我用來記錄學習與展示專案的地方。
    </p>

    <div class="max-w-md mx-auto bg-stone-100 dark:bg-stone-800 p-6 rounded-xl shadow">
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="頭像"
        class="w-24 h-24 mx-auto rounded-full mb-4"
      >
      <h2 class="text-xl font-semibold dark:text-white">
        Dondon0313
      </h2>
      <p class="text-sm text-stone-600 dark:text-stone-300">
        熱愛前端、後端與全端開發的學習者
      </p>
      <div class="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/Dondon0313"
          target="_blank"
          class="text-stone-500 dark:text-stone-300 hover:text-black dark:hover:text-white"
        >GitHub</a>
        <a
          href="mailto:you@example.com"
          class="text-stone-500 dark:text-stone-300 hover:text-black dark:hover:text-white"
        >Email</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'HomePage' })

import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>
