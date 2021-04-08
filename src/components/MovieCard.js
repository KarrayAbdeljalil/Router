import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const MovieCard = ({card}) => {
    return (
        <div className="movie-card">
            <StarRating rating={card.rating}/>
            <img src={card.image} alt={card.image} />
            <h3>{card.name}</h3>
            <h3>{card.date}</h3>
            <button className="btn btn-primary"> 
                <Link to={`/info/${card.name}`}> MORE INFOS </Link>
            </button>
            
        </div>
    )
}

export default MovieCard
