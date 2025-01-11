'use client'

import { useState, useEffect } from 'react'
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'

export default function WeatherApp() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (city) {
      fetchWeatherData()
      fetchForecastData()
    }
  }, [city])

  const fetchWeatherData = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    const data = await response.json()
    setWeatherData(data)
  }

  const fetchForecastData = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
    const data = await response.json()
    setForecastData(data)
  }

  return (
    <div className={`min-h-screen p-8 bg-background text-foreground ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Weather App</h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Search setCity={setCity} />
        {weatherData && <CurrentWeather data={weatherData} />}
        {forecastData && <Forecast data={forecastData} />}
      </div>
    </div>
  )
}

