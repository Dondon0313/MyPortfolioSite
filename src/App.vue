<template>
  <div class="min-h-screen bg-stone-50 text-stone-800">
    <Navigation />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
</script>