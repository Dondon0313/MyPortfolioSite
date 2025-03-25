<template>
  <div>
    <ul
      v-if="todoStore.filteredTodos.length" 
      class="space-y-3"
    >
      <li
        v-for="todo in todoStore.filteredTodos" 
        :key="todo.id"
        class="flex items-center justify-between border-b py-2"
      >
        <label class="flex items-center space-x-2">
          <input
            v-model="todo.completed"
            type="checkbox"
          >
          <!-- <span :class="{ 'line-through text-gray-400': todo.completed }">{{ todo.text }}</span> -->
          <!-- 如果正在編輯這一筆，就顯示 input -->
          <template v-if="editingId === todo.id">
            <input
              v-model="editText"
              class="border p-1 rounded w-full"
              autofocus
              @keyup.enter="saveEdit(todo.id)"
              @blur="saveEdit(todo.id)"
            >
          </template>

          <!-- 不是編輯狀態，顯示文字 -->
          <template v-else>
            <span
              :class="{ 'line-through text-gray-400': todo.completed }"
              class="cursor-pointer"
              @click="startEdit(todo.id, todo.text)"
            >
              {{ todo.text }}
            </span>
          </template>
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
    <div
      v-if="todoStore.todos.some(todo => todo.completed)"
      class="text-center mt-4"
    >
      <button
        class="px-4 py-2 rounded-xl text-lg font-semibold border border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white shadow-sm transition-all duration-200"
        @click="todoStore.clearCompleted"
      >
        清除所有已完成項目
      </button>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { useTodoStore } from '@/store/useTodoStore'
  import { ref } from 'vue'

  const todoStore = useTodoStore()

  // 目前正在編輯的 todo ID（null = 沒有編輯）
const editingId = ref<number | null>(null)
const editText = ref('')

//   function buttonClass(type: 'all' | 'active' | 'completed') {
//   return todoStore.filter === type
//     ? 'text-blue-600 font-bold underline'
//     : 'text-gray-500 hover:text-blue-500'
// }

// 開始編輯（點擊文字時）
function startEdit(todoId: number, currentText: string) {
  console.log('開始編輯：', todoId)
  editingId.value = todoId
  editText.value = currentText
}

// 儲存編輯（按 enter 或 blur）
function saveEdit(todoId: number) {
  const text = editText.value.trim()
  if (text) {
    const todo = todoStore.todos.find(t => t.id === todoId)
    if (todo) todo.text = text
  }
  editingId.value = null
  editText.value = ''
}

  </script>