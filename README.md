# Weather app

Busca una ciudad, agregala a tus favoritas y mira su clima actual. Sin login,
sin API keys, sin backend: todo corre en el navegador contra APIs publicas y
gratuitas.

## Features

- Buscador de ciudades con autocompletado (debounce)
- Guardar ubicaciones favoritas (Redux)
- Clima actual por ubicacion: temperatura, sensacion termica, humedad y viento
- Totalmente responsive

## Tech

- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [Open-Meteo](https://open-meteo.com/) - Geocoding y Forecast API, sin API key
- [Tailwind CSS 4](https://tailwindcss.com/)
- [SCSS](https://sass-lang.com/)

## Installation

```sh
cd weather-app
npm i
npm run dev
```

No hace falta ningun `.env`: las APIs de Open-Meteo son publicas y no requieren
autenticacion.
