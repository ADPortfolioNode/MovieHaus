import React, { useState } from "react";
import MovieCard from './MovieCard.js';
export default function SearchMovies() {

    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]); 

    const searchMovies = async(e) => {
        e.preventDefault(); 

        const url = `https://api.themoviedb.org/3/search/movie?api_key=ceff4d607cb426d4cda0e08877c26d3d&language=en-US&query=${query}&page=1&include_adult=false&video=true`;

        try {
            const res = await fetch(url);
            const data = await res.json(); 
            
            console.error(data.results);
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list ">
                {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}