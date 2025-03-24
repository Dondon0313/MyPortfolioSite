<template>
  <form
    class="flex items-center space-x-2 mb-4"
    @submit.prevent="handleAddTodo"
  >
    <input
      v-model="newTodo"
      type="text"
      placeholder="輸入待辦事項..."
      class="flex-grow p-2 border rounded"
    >
    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      新增
    </button>
  </form>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useTodoStore } from '@/store/useTodoStore'
  
  const newTodo = ref('')
  const todoStore = useTodoStore()
  
  function handleAddTodo() {
    const text = newTodo.value.trim()
    if (text) {
      todoStore.addTodo(text)
      newTodo.value = ''
    }
  }
  </script>