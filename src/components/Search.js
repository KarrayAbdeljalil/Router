import React from 'react'
import StarRating from './StarRating'

const Search = ({searchValue, searchRating, handleRating, handleSearch}) => {
    return (
        <div className= "header-container">
            <h1>Welcome to Our Movie App</h1>
            <input 
            value={searchValue} 
            onChange={handleSearch}
            className="input" 
            type="text" 
            placeholder="Please, Enter your movie to search : " 
            />
            <StarRating handleRating={handleRating} rating={searchRating} />
        </div>
    )
}

export default Search
