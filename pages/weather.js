'use client';

import { useState } from 'react';

export default function WeatherApp() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const API_KEY = 'b99d12acce3f4d78b3d164554241207'; // Replace with your OpenWeatherMap API key

    const searchWeather = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
            );
            const data = await res.json();
            setWeather(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
        setLoading(false);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-100 via-white to-blue-100">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full text-center">
                <h1 className="text-2xl font-semibold mb-4 text-gray-800">Weather Search</h1>
                <form onSubmit={searchWeather} className="flex flex-col items-center space-y-4">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter city name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                        Search
                    </button>
                </form>
                {loading && <p className="mt-4">Loading...</p>}
                {weather && weather.main && (
                    <div className="mt-8 text-left">
                        <h2 className="text-xl font-semibold text-gray-800">{weather.name}</h2>
                        <p className="mt-2"><strong>Temperature:</strong> {weather.main.temp} °C</p>
                        <p className="mt-2"><strong>Weather:</strong> {weather.weather[0].description}</p>
                        <p className="mt-2"><strong>Humidity:</strong> {weather.main.humidity}%</p>
                        <p className="mt-2"><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
                        {weather.weather[0].icon && (
                            <img
                                className="mt-4 mx-auto"
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                alt={weather.weather[0].description}
                            />
                        )}
                    </div>
                )}
                {!weather && !loading && <p className="mt-4">No data found</p>}
            </div>
        </main>
    );
}
