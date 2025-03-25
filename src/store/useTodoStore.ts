import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'
import type { Todo } from '@/types/Todo'

const LOCAL_STORAGE_KEY = 'todo-list'

export const useTodoStore = defineStore('todo', () => {

  const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
  const todos = ref<Todo[]>(saved ? JSON.parse(saved) : [])
  const filter = ref<'all'| 'active' | 'completed' >('all')

  watch (
    todos,
    (newTodos) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
    },
    { deep: true},
  )

  function addTodo(text: string) {
    todos.value.push({ id: Date.now(), text, completed: false })
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) todo.completed = !todo.completed
  }

  function removeTodo(id: number) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function clearCompleted(){
    todos.value = todos.value.filter(todo => !todo.completed)
  }

  // 新增篩選後的 todos（computed）
const filteredTodos = computed(() => {
  if (filter.value === 'active') {
    return todos.value.filter(todo => !todo.completed)
  } else if (filter.value === 'completed') {
    return todos.value.filter(todo => todo.completed)
  }
  return todos.value
})

  return { todos, addTodo, toggleTodo, removeTodo, clearCompleted, filter, filteredTodos }
})

