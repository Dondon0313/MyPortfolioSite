<template>
  <div class="min-h-screen h-screen bg-gradient-to-b from-blue-100 to-white flex justify-center items-start py-12 px-4">
    <div class="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
      <h1 class="text-2xl font-bold text-center mb-6">
        Todo List
      </h1>
      <TodoInput />
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
</script>
