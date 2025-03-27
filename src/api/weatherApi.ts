import axios from 'axios'

const API_KEY = '1766d6d0178a48c9911f2e01223eadba'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export async function fetchWeather(city: string) {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'zh_tw',
    },
  })
  return response.data
}