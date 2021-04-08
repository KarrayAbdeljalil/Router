import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import Info from './components/Info';
import { moviesData } from './data';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchValue, setSearchValue] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const handleAdd = (newMovie) => setMovies([...movies,newMovie]);
  const handleRating = (rate) => setSearchRating(rate);
  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div>
      <Search searchValue={searchValue} searchRating={searchRating} handleRating={handleRating} handleSearch={handleSearch}/>
      <BrowserRouter>
      <Switch> 
        <Route
        exact
        path="/"
        render={() => (
          <MovieList list={movies.filter((movie)=>
                movie.name.toLowerCase().includes(searchValue.toLowerCase().trim()) 
                && searchRating <= movie.rating
                )} />
        )}
        />
        <Route
        path="/Info/:name"
        render={(props) => <Info movies ={movies} {...props} />}
        />
        </Switch> 
        </BrowserRouter>
      
      <AddMovie handleAdd={handleAdd}/>

    </div>
  );
}

export default App;
