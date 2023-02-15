import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'


function Billboard(props){
    const url="/discover/movie?sort_by=popularity.desc";
    
    
    const[movies,setMovies]=useState("");
    const fetchMovies=async()=>{
        const response=await axios.get(url);
        setMovies(response.data.results[0]);
        console.log(movies);
    }

    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
                    .then((res) => {
                        console.log(res);}
                        );
    
    useEffect(()=>{
            fetchMovies();
        },[])
    return (
        <div >
            {
            movies.map((el)=>{
                return <Header imageUrl ={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}/>
            })}
            </div>
    )

}

export default Billboard;