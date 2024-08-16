'use client'; // Add this at the top

import { useState } from 'react';
import Head from 'next/head';

async function fetchWeatherData(city) {
  const apiKey = 'b99d12acce3f4d78b3d164554241207';
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
  );
  const data = await response.json();
  return data;
}

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await fetchWeatherData(city);

    console.log(data);

    setWeather(data);
    setLoading(false);
  };

  return (
    <div className='container'>
      <Head>
        <title>Weather App</title>
        <meta
          name='description'
          content='Get real-time weather updates for any city'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <h1>Weather App</h1>

        <p className='description'>
          Get Weather Details.
        </p>

        <input
          type='text'
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder='Enter city name'
          className='input'
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <button onClick={handleSearch} className='button'>
            Get Weather
          </button>
        )}

        {weather ? (
          <div className='weather'>
            <h2>{weather.location.name}</h2>
            <p>
              <strong>Temperature:</strong> {weather.current.temp_c} °C
            </p>
            <p>
              <strong>Condition:</strong> {weather.current.condition.text}
            </p>
            <p>
              <strong>Humidity:</strong> {weather.current.humidity}%
            </p>
            <p>
              <strong>Wind Speed:</strong> {weather.current.wind_kph} kph
            </p>
          </div>
        ) : (
          <div className='weather'>
            <p>No data found</p>
          </div>
        )}
      </main>

      <footer className='footer'>
        <p>&copy; 2024 Arjan Aswal</p>
      </footer>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 0 2rem;
          background-color: #f0f0f0;
        }

        .main {
          padding: 2rem;
          text-align: center;
        }

        .description {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          color: #fff;
          background-color: #0070f3;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .button:hover {
          background-color: #005bb5;
        }

        .weather {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .footer {
          padding: 1rem;
          text-align: center;
          background-color: #eee;
          border-top: 1px solid #ddd;
          width: 100%;
          position: absolute;
          bottom: 0;
        }
      `}</style>
    </div>
  );
}
