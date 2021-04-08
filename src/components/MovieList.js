import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list}) => {
    return (
        <div className="movie-list">
            {list.map((film)=> ( 
            <MovieCard card={film} />
            ))}
            
        </div>
    )
}

export default MovieList
