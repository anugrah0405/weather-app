import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CurrentWeather({ data }) {
  return (
    <Card className="mb-8 bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-foreground">{data.name}, {data.sys.country}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-6xl font-bold text-foreground">{Math.round(data.main.temp)}°C</div>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            className="w-24 h-24"
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Feels like</p>
            <p className="text-lg font-semibold text-foreground">{Math.round(data.main.feels_like)}°C</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Humidity</p>
            <p className="text-lg font-semibold text-foreground">{data.main.humidity}%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Wind speed</p>
            <p className="text-lg font-semibold text-foreground">{data.wind.speed} m/s</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Pressure</p>
            <p className="text-lg font-semibold text-foreground">{data.main.pressure} hPa</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

