import React, { useState, useEffect } from "react";
import MovieCard from "../Movies/MovieCard";
import Navbar from "../Navbar/Navbar";
import tmdbApi from "../../api/tmdb.api";








const SearchPage2=()=>{
    const [movies,setMovies]=useState([]);
    const [search,setSearch]=useState();
    
    const [url,setUrl]=useState();
    

    useEffect(() => {
      const fetchMovies = async (input) => {
        const { data } = await tmdbApi.get(`search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${search}`);
        setMovies(data.results);
      };
      fetchMovies();
    }, []);

    
    const searchMovie=(evt)=>{

        if(evt.key == "Enter")
        {
            url=`https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${search}`;
            setUrl(url);
            setSearch(" ");
        }
    }
    return(
        <>
            <div className="searchpage">
            <div className="navbar">
        <Navbar/>
      </div>
                
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name" 
                        className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                        value={search} onKeyPress={searchMovie}>
                        </input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="container">
                {
                    (movies.length === 0)?<p className="notfound">Not Found</p>: movies.map((res,pos)=>{
                        return(
                            <MovieCard info={res} key={pos}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default SearchPage2;