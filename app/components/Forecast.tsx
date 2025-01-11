import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Forecast({ data }) {
  const dailyData = data.list.filter((item, index) => index % 8 === 0).slice(0, 5)

  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-foreground">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4">
          {dailyData.map((day) => (
            <div key={day.dt} className="text-center">
              <p className="font-semibold text-foreground">
                {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                className="mx-auto"
              />
              <p className="text-sm text-foreground">{Math.round(day.main.temp)}°C</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

