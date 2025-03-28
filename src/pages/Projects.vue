<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">
      📁 我的作品集
    </h1>
    <ul class="grid md:grid-cols-2 gap-6">
      <li
        v-for="p in projects"
        :key="p.title"
        class="bg-white dark:bg-stone-800 p-6 rounded-xl shadow hover:shadow-lg transition"
      >
        <h2 class="text-xl font-semibold text-stone-800 dark:text-white mb-2">
          {{ p.title }}
        </h2>
        <p class="text-sm text-stone-600 dark:text-stone-300 mb-4">
          {{ p.description }}
        </p>
        <div class="space-x-4">
          <a
            :href="p.demo"
            target="_blank"
            class="text-blue-500 hover:underline"
          >🔗 Demo</a>
          <a
            :href="p.github"
            target="_blank"
            class="text-gray-500 hover:underline"
          >💻 GitHub</a>
        </div>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
  import { RouterLink } from 'vue-router'

  const projects = [
  {
    title: '📝 Todo List',
    description: '簡單待辦系統，支援 CRUD、Pinia、localStorage。',
    github: 'https://github.com/Dondon0313/Todo-List',
    demo: 'https://todo-demo.vercel.app/',
  },
  {
    title: '🌤 Weather App',
    description: '使用 OpenWeather API 查詢天氣，支援城市搜尋與圖示。',
    github: 'https://github.com/Dondon0313/Weather-App',
    demo: 'https://weather-demo.vercel.app/',
  },
]

  </script>