import React, { useState, useEffect } from 'react'
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';



//2433bb37

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2433bb37';

// const movie1 = {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

const App = () => {

    const [movies,setMovies]= useState([]);
    const [search, setSearch] = useState('')

    const SearchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();

        setMovies(data.Search);

    }

    useEffect(()=>{
        SearchMovies({search});

    },[])
  return (
    <div className='app'>
        <h1>Shah's IMDb</h1>
        <div className='search'>
            <input placeholder='search for movies' value={search} onChange={(e)=>setSearch(e.target.value)} />
            <img src={SearchIcon} onClick={()=>SearchMovies(search)} />
        </div>
        {
            movies?.length > 0
            ? (
                <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))}
                    
    
                </div>
            ): 
            (
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>    
            )
        }

       

    </div>
  )
}

export default App