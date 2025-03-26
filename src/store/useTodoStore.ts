import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'
import type { Todo } from '@/types/Todo'
import * as api from '@/api/todoApi'

// const LOCAL_STORAGE_KEY = 'todo-list'

export const useTodoStore = defineStore('todo', () => {

  // const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
  // const todos = ref<Todo[]>(saved ? JSON.parse(saved) : [])
  // const filter = ref<'all'| 'active' | 'completed' >('all')
  const todos = ref<Todo[]>([])
  const filter = ref<'all' | 'active' | 'completed'>('all')

  // watch (
  //   todos,
  //   (newTodos) => {
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
  //   },
  //   { deep: true},
  // )

  // function addTodo(text: string) {
  //   todos.value.push({ id: Date.now(), text, completed: false })
  // }

  // function toggleTodo(id: number) {
  //   const todo = todos.value.find(todo => todo.id === id)
  //   if (todo) todo.completed = !todo.completed
  // }

  // function removeTodo(id: number) {
  //   todos.value = todos.value.filter(todo => todo.id !== id)
  // }

  // function clearCompleted(){
  //   todos.value = todos.value.filter(todo => !todo.completed)
  // }

  // 新增篩選後的 todos（computed）
// const filteredTodos = computed(() => {
//   if (filter.value === 'active') {
//     return todos.value.filter(todo => !todo.completed)
//   } else if (filter.value === 'completed') {
//     return todos.value.filter(todo => todo.completed)
//   }
//   return todos.value
// })

//   return { todos, addTodo, toggleTodo, removeTodo, clearCompleted, filter, filteredTodos }

 // 從後端取得所有 todos
 async function fetchTodos() {
  const res = await api.getTodos()
  todos.value = res.data
}

// 新增 todo（POST）
async function addTodo(text: string) {
  const res = await api.createTodo(text)
  todos.value.push(res.data)
  console.log(res.data)
}

// 切換完成狀態（PUT）
async function toggleTodo(id: number) {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
    await api.updateTodo(todo)
  }
}

// 刪除 todo（DELETE）
async function removeTodo(id: number) {
  await api.deleteTodo(id)
  todos.value = todos.value.filter(t => t.id !== id)
}

// 清除已完成 todo（DELETE /clearCompleted）
async function clearCompleted() {
  await api.clearCompleted()
  todos.value = todos.value.filter(t => !t.completed)
}

// 計算篩選後的 todos
const filteredTodos = computed(() => {
  if (filter.value === 'active') {
    return todos.value.filter(todo => !todo.completed)
  } else if (filter.value === 'completed') {
    return todos.value.filter(todo => todo.completed)
  }
  return todos.value
})

return {
  todos,
  filter,
  filteredTodos,
  fetchTodos,
  addTodo,
  toggleTodo,
  removeTodo,
  clearCompleted,
}

})



