<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-amber-100 rounded-xl shadow-md">
    <form
      class="flex items-center space-x-2"
      @submit.prevent="getWeather"
    >
      <input
        v-model="city"
        type="text"
        placeholder="輸入城市名稱"
        class="flex-grow p-2 border rounded border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
      <button
        type="submit"
        class="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
      >
        查詢
      </button>
    </form>
  
    <div
      v-if="weather"
      class="mt-6 text-center text-amber-800"
    >
      <h2 class="text-xl font-bold">
        {{ weather.name }}
      </h2>
      <p class="text-gray-600">
        {{ weather.weather[0].description }}
      </p>
      <img
        :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
        :alt="weather.weather[0].description"
        class="mx-auto"
      >
      <p class="text-2xl mt-2">
        {{ weather.main.temp }}℃
      </p>
    </div>
  
    <p
      v-if="error"
      class="text-red-500 mt-4 text-center"
    >
      {{ error }}
    </p>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { fetchWeather } from '@/api/weatherApi'
  
  const city = ref('')
  const weather = ref<any>(null)
  const error = ref('')
  
  async function getWeather() {
    error.value = ''
    try {
      weather.value = await fetchWeather(city.value)
    } catch (err) {
      error.value = '查詢失敗，請確認城市名稱'
      weather.value = null
    }
  }
  </script>
  
  <style scoped>
  </style>