// src/api/todoApi.ts
import axios from 'axios'
import type { Todo } from '@/types/Todo'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/todo', // 後端 API
})

export const getTodos = () => api.get<Todo[]>('/')
export const createTodo = (text: string) =>
  api.post<Todo>('/', { text })
export const updateTodo = (todo: Todo) =>
  api.put<void>(`/${todo.id}`, todo)
export const deleteTodo = (id: number) =>
  api.delete<void>(`/${id}`)
export const clearCompleted = () =>
  api.delete<void>('/clearCompleted')
