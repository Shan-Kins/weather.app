# React + Vite

---

# Sky Watchers Weather App

Welcome to the Sky Watchers Weather App! This project is a simple weather application that allows users to search for and view the current weather conditions of any city. The app is built using React and Vite, and it fetches weather data from the OpenWeatherMap API.

## Table of Contents

- Getting Started
- Project Structure
- How It Works
- Dependencies
- Environment Variables
- Running the App
- Contributing
- License

## Getting Started

To get started with the Sky Watchers Weather App, follow these steps:

1. **Clone the repository** to your local machine.
2. **Install the dependencies** using npm or yarn.
3. **Set up your environment variables**.
4. **Run the app** in development mode.

## Project Structure

Here's an overview of the project's structure:

```
weather.app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── clear.png
│   │   ├── cloud.png
│   │   ├── drizzle.png
│   │   ├── humidity.png
│   │   ├── rain.png
│   │   ├── search.png
│   │   ├── snow.png
│   │   ├── storm.png
│   │   └── wind.png
│   ├── components/
│   │   └── Weather.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── Weather.css
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## How It Works

### Weather Component

The main component of the app is `Weather.jsx`. This component handles the following:

- **Fetching weather data** from the OpenWeatherMap API.
- **Displaying the weather data** including temperature, location, humidity, and wind speed.
- **Handling user input** for searching different cities.

### CSS Styling

The app's styling is defined in `Weather.css` and `index.css`. These files contain the styles for the weather component and the overall app layout.

### API Integration

The app uses the OpenWeatherMap API to fetch weather data. The API key is stored in the `.env` file for security.

## Dependencies

The project uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## Environment Variables

The app requires an API key from OpenWeatherMap. Create a `.env` file in the root directory and add your API key:

```
VITE_APP_ID="your_openweathermap_api_key"
```

## Running the App

To run the app locally, follow these steps:

1. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000` to see the app in action.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix.
3. **Commit your changes** and push them to your fork.
4. **Submit a pull request** to the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---
