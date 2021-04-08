import { Link } from "react-router-dom";
import React from "react";

function Info ({ movies, match }) {
    let movie = movies.find((el) => el.name === match.params.name);
    return (
        <div>
            <h1 style={{color:"teal"}}>{movie.name}</h1>
            <h1 style={{ color: "white" }}> {movie.desc} </h1>
            <button className="btn btn-primary">
                <Link to="/"> Return Home </Link>
            </button>
        </div>
    );
}
export default Info