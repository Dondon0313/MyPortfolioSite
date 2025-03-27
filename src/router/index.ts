import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Projects from '@/pages/Projects.vue'
import Blog from '@/pages/Blog.vue'
// import TodoEmbed from '@/pages/Projects/TodoEmbed.vue'
// import WeatherEmbed from '@/pages/Projects/WeatherEmbed.vue'
import BlogPost from '@/blog/BlogPost.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  // { path: '/projects/todo', component: TodoEmbed },
  // { path: '/projects/weather', component: WeatherEmbed },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: BlogPost },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router