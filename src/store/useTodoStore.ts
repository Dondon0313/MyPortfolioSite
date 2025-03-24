import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Todo } from '@/types/Todo'

const LOCAL_STORAGE_KEY = 'todo-list'

export const useTodoStore = defineStore('todo', () => {

  const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
  const todos = ref<Todo[]>(saved ? JSON.parse(saved) : [])

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

  return { todos, addTodo, toggleTodo, removeTodo }
})

