import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import Example from '../Carousel';
import MovieBox from './MovieBox';

const Netflix = () => {
  const [movies, setMovies] = useState([]);
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bc24c976cea5d2a205d5252ab187ef7b";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=bc24c976cea5d2a205d5252ab187ef7b&query"
  


  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <div>
      <h1>Netflix</h1>
      <Navbar/>
      <div>
        <Example></Example>
              <div className='container'>
        <div className='grid'>
        {movies.map((movieReq)=> <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
      </div>
      </div>
    </div>
    
  )
}

export default Netflix