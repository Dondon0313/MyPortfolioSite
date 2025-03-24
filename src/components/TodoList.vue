<template>
  <div>
    <ul
      v-if="todoStore.todos.length"
      class="space-y-3"
    >
      <li
        v-for="todo in todoStore.todos"
        :key="todo.id"
        class="flex items-center justify-between border-b py-2"
      >
        <label class="flex items-center space-x-2">
          <input
            v-model="todo.completed"
            type="checkbox"
            @change="todoStore.toggleTodo(todo.id)"
          >
          <span :class="{ 'line-through text-gray-400': todo.completed }">{{ todo.text }}</span>
        </label>
        <button
          class="text-gray-400 hover:text-red-500"
          @click="todoStore.removeTodo(todo.id)"
        >
          ✖
        </button>
      </li>
    </ul>
    <p
      v-else
      class="text-gray-400 text-center italic"
    >
      目前沒有待辦事項
    </p>
  </div>
</template>
  
  <script setup lang="ts">
  import { useTodoStore } from '@/store/useTodoStore'
  const todoStore = useTodoStore()
  </script>