'use client'; // Add this at the top
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import styles from "../styles/globals.css";

async function fetchCountryData(countryName) {
  const apiKey = 'XJtsr4LEW72VusGxFosi4A==gOGVgs11HVYf3vF1';
  const response = await fetch(
    `https://api.api-ninjas.com/v1/country?name=${countryName}`,
    {
      headers: {
        'X-Api-Key': apiKey,
      },
    }
  );
  const data = await response.json();
  return data[0];
}

export default function Home() {
  const [countryData, setCountryData] = useState(null);
  const [countryName, setCountryName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await fetchCountryData(countryName);
    console.log(data);
    setCountryData(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <Head>
        <title>My Country Website</title>
        <meta name='description' content='Welcome to our country website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to Country Explorer</h1>

        <p className="text-lg mb-4">
          Simply enter the name of a country to access key details and enrich
          your geographical knowledge. Whether you're researching for travel,
          education, or curiosity, Country Explorer is your go-to resource.
        </p>

        <input
          type='text'
          value={countryName}
          onChange={e => setCountryName(e.target.value)}
          placeholder='Enter country name'
          className="p-2 mb-4 border border-gray-300 rounded"
        />

        {loading ? (
          <p className="text-lg font-semibold">Loading...</p>
        ) : (
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Search
          </button>
        )}
        {countryData ? (
          <div className="mt-6 p-4 border border-gray-300 rounded bg-white shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{countryData.name}</h2>
            <p><strong>Capital:</strong> {countryData.capital}</p>
            <p><strong>Population:</strong> {countryData.population}</p>
            <p><strong>Region:</strong> {countryData.region}</p>
            <p><strong>Population Density:</strong> {countryData.pop_density} people/km²</p>
            <p><strong>Area:</strong> {countryData.surface_area} km²</p>
            <p><strong>GDP:</strong> ${countryData.gdp} million</p>
            <p><strong>GDP per Capita:</strong> ${countryData.gdp_per_capita}</p>
            <p><strong>GDP Growth:</strong> {countryData.gdp_growth}%</p>
            <p><strong>CO2 Emissions:</strong> {countryData.co2_emissions} million tons</p>
            <p><strong>Currency:</strong> {countryData.currency.name} ({countryData.currency.code})</p>
            <p><strong>Life Expectancy (Male):</strong> {countryData.life_expectancy_male} years</p>
            <p><strong>Life Expectancy (Female):</strong> {countryData.life_expectancy_female} years</p>
            <p><strong>Infant Mortality:</strong> {countryData.infant_mortality} per 1,000 live births</p>
          </div>
        ) : (
          <div className="mt-6 p-4 border border-gray-300 rounded bg-white shadow-md">
            <p>No data found</p>
          </div>
        )}
      </main>

      {/* <footer className="mt-auto py-4 bg-gray-200 text-center text-sm">
        <p>&copy; 2024 Dipak Patel</p>
      </footer> */}
    </div>
  );
}
