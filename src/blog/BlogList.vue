<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">
      📚 所有文章
    </h1>
    <ul class="space-y-4">
      <li
        v-for="post in posts"
        :key="post"
      >
        <RouterLink
          :to="`/blog/${post}`"
          class="text-lg text-amber-700 hover:underline"
        >
          {{ post }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
  const posts = ['hello'] // 你可以手動新增更多檔名（不含 .md）
  </script>