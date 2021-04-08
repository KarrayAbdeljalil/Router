import React from 'react'

const StarRating = ({rating, handleRating}) => {
    const stars=(rate) => { 
    let star=[];
        for (let i = 1; i <= 5; i++) {
        if (i<=rate) {
            star.push(<span onClick={() => handleRating(i)} style={{color:"gold", fontSize:"25px" , cursor: "pointer"}}>★</span> );  
        }
        else star.push(<span onClick={() => handleRating(i)} style={{color:"white", fontSize:"25px" , cursor: "pointer"}}>☆</span> );  
    }
    return star;
};
    return <div> {stars(rating)} </div>;
};
StarRating.defaultProps={
    rating:1,
    handelRating: () => {},
};
export default StarRating 
