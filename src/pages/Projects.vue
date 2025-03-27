<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">
      📁 我的作品集
    </h1>
    <ul class="space-y-4">
      <li class="border p-4 rounded shadow bg-white">
        <h2 class="text-xl font-semibold">
          ✅ Todo List 專案
        </h2>
        <p class="text-sm text-stone-600">
          使用 Vue + Pinia + ASP.NET Core 製作
        </p>
        <RouterLink
          to="/projects/todo"
          class="text-amber-600 hover:underline"
        >
          查看作品
        </RouterLink>
      </li>
      <li class="border p-4 rounded shadow bg-white">
        <h2 class="text-xl font-semibold">
          🌤 Weather App
        </h2>
        <p class="text-sm text-stone-600">
          串接 OpenWeather API
        </p>
        <RouterLink
          to="/projects/weather"
          class="text-amber-600 hover:underline"
        >
          查看作品
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>