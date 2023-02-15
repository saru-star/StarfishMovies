
import './Row.css'
import Card from '../card/Card'
import {useState,useEffect} from 'react'
import axios from 'axios'

function Row(props){
    const[movies,setMovies]=useState([]);
    const fetchMovies=async()=>{
        const response=await axios.get(props.url);
        setMovies(response.data.results);
    }
    useEffect(()=>{
            fetchMovies();
        },[])
    return (
        <div className="row_wrapper">
            <h1 className="row_title">{props.title}</h1>
            <div className="row_card">
            {
            movies.map((el)=>{
                return <Card title={el.title} poster={el.backdrop_path} id={el.id}/>
            })}
            </div>
            </div>
    )
}

export default Row;