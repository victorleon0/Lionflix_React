import React from 'react';

import MovieCard from './MovieCard';
import "./MoviesList.scss";

const Movies = [
  {
    title: "The Boys",
    date: "2JUL2020",
    imageURL: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },
  {
    title: "The Boys",
    date: "2JUL2020",
    imageURL: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },
  {
    title: "The Boys",
    date: "2JUL2020",
    imageURL: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },
  {
    title: "The Boys",
    date: "2JUL2020",
    imageURL: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },
  {
    title: "The Boys",
    date: "2JUL2020",
    imageURL: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },
  {
    title: "The Boys",
    date: "2JUL2020",
    imageURL: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },
  {
    title: "The Boys",
    date: "2JUL2020",
    imageURL: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },

]


const MoviesList = () => {
  return (
    <div className='moviesList'>
    {Movies.map ((movie, index)=> {
      return <MovieCard key={index} {...movie}/>
    })}
    </div>
  )
}

export default MoviesList