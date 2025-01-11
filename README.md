# Weather App

A responsive React-based weather application that provides current weather conditions and a 5-day forecast for any city, utilizing the OpenWeatherMap API. Built with Next.js and styled with Tailwind CSS, featuring a clean user interface with dark mode support for enhanced user experience.

---

## Features

- Search for weather information by city name
- Display current weather conditions including temperature, humidity, wind speed, and pressure
- Show a 5-day weather forecast
- Responsive design for various screen sizes
- Dark mode support for comfortable viewing in low-light environments
- Built with modern React practices using Next.js and Tailwind CSS

---

## Direct App Usage

Click on this link to use the app : [Weather App](https://weather-app-pi-rouge-50.vercel.app)

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- An OpenWeatherMap API key

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install the dependencies:

```bash
npm install

#or

yarn install
```    

3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:
```
NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_api_key_here
```

---

## Usage

To run the development server:

```bash
npm run dev

# or

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Project Structure

```
weather-app/
├── app/
│   ├── components/
│   │   ├── CurrentWeather.tsx
│   │   ├── Forecast.tsx
│   │   ├── Search.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── globals.css
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── public/
│   └── favicon.ico
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

---

## Main Components

### `app/page.tsx`

This is the main component of the application. It manages the state for the city search, weather data, and theme. It also handles API calls to fetch weather data.

### `app/components/Search.tsx`

This component renders the search input field and button, allowing users to search for a city's weather.

### `app/components/CurrentWeather.tsx`

This component displays the current weather information for the searched city, including temperature, humidity, wind speed, and pressure.

### `app/components/Forecast.tsx`

This component shows a 5-day weather forecast for the searched city.

### `app/components/ThemeToggle.tsx`

This component provides a button to toggle between light and dark modes.

### `app/hooks/useTheme.ts`

This custom hook manages the theme state and provides functions to toggle between light and dark modes.

---

## Styling

The application uses Tailwind CSS for styling. The main styles are defined in `app/globals.css`, and component-specific styles are applied using Tailwind classes.

---

## API Integration

The application uses the OpenWeatherMap API to fetch weather data. API calls are made in the `app/page.tsx` component using the `fetch` function.

---

## Deployment

This project is ready to be deployed on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your app.

Make sure to add the `NEXT_PUBLIC_OPENWEATHERMAP_API_KEY` environment variable in your Vercel project settings.

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

## Contact

Anugrah Nand - anugrahnand@gmail.com

Project Link: [Weather App](https://github.com/anugrah0405/weather-app)
