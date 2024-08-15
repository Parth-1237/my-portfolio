"use client";

import Link from 'next/link';
import Navbar from "../components/Navbar";
import { useState } from 'react';

export default function MovieApp() {
    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState(null);
    let API_KEY = `664f7d53`;

    const searchMovie = async (e) => {
        e.preventDefault();
        const res = await fetch
        (`http://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
    };

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-purple-100 via-white to-purple-100">
                <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full text-center">
                    <h1 className="text-2xl font-semibold mb-4 text-gray-800">OMDB Movie Search</h1>
                    <form onSubmit={searchMovie} className="flex flex-col items-center space-y-4">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter movie title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors">
                            Search
                        </button>
                    </form>
                    {movie && (
                        <div className="mt-8 text-left">
                            <h2 className="text-xl font-semibold text-gray-800">{movie.Title}</h2>
                            <p className="mt-2"><strong>Year:</strong> {movie.Year}</p>
                            <p className="mt-2"><strong>Genre:</strong> {movie.Genre}</p>
                            <p className="mt-2"><strong>Plot:</strong> {movie.Plot}</p>
                            {movie.Poster && (
                                <img className="mt-4 rounded-md shadow-md mx-auto" src={movie.Poster} alt={movie.Title} />
                            )}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}