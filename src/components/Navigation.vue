<template>
  <nav class="bg-white border-b shadow px-6 py-4 mb-6">
    <ul class="flex space-x-6 text-lg font-medium">
      <li>
        <RouterLink
          to="/"
          class="hover:text-amber-600"
        >
          首頁
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/about"
          class="hover:text-amber-600"
        >
          關於我
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/projects"
          class="hover:text-amber-600"
        >
          作品集
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/blog"
          class="hover:text-amber-600"
        >
          部落格
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>
  nav ul li a.router-link-exact-active {
    color: #b45309;
    font-weight: bold;
  }
  </style>