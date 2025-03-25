<template>
  <div class="min-h-screen h-screen bg-gradient-to-b from-blue-100 to-white flex justify-center items-start py-12 px-4">
    <div class="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
      <h1 class="text-2xl font-bold text-center mb-6">
        Todo List
      </h1>
      <TodoInput />
      <div class="flex justify-center gap-3 mt-4">
        <button
          :class="buttonClass('all')"
          @click="todoStore.filter = 'all'"
        >
          全部
        </button>
        <button
          :class="buttonClass('active')"
          @click="todoStore.filter = 'active'"
        >
          未完成
        </button>
        <button
          :class="buttonClass('completed')"
          @click="todoStore.filter = 'completed'"
        >
          已完成
        </button>
      </div>
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import { useTodoStore } from '@/store/useTodoStore'


const todoStore = useTodoStore()

function buttonClass(type: 'all' | 'active' | 'completed') {
  const isActive = todoStore.filter === type

  return [
    'px-4 py-2 rounded-xl text-lg font-semibold transition-all duration-200 border shadow-sm',
    isActive
      ? 'bg-blue-500 text-white border-blue-500 shadow-md'
      : 'bg-white text-gray-700 border-gray-300 hover:shadow hover:bg-gray-50',
  ].join(' ')
}

</script>
