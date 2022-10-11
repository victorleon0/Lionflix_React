import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movie,setMovie] = useState();
    const {id} = useParams();

    const getMovie = async() => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=8f781d70654b5a6f2fa69770d1d115a3`);
        setMovie(res.data)
    }

    useEffect(() => {
      getMovie();
    }, [])
    

  return (
    <div>
    {movie && <>
        <p>{movie.title}</p>
    </>}
    </div>
  )
}

export default MovieDetails
