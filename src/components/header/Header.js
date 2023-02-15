import React from "react";
import { useState, useEffect } from "react";
import './Header.css';
function Header() {
  const [movies, setMovies] = useState([]);
  const [content,setContent]=useState([]);

  function getData() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e964ab48acbbf21ca05cccb5c0bcd8c1&sort_by=popularity.desc"
    )
      .then((res) => res.json())
      .then((res) => setMovies((prev) => res.results[0].backdrop_path));
  }
  function getContent() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e964ab48acbbf21ca05cccb5c0bcd8c1&sort_by=popularity.desc"
    )
      .then((res) => res.json())
      .then((res) => setContent((prev) => res.results[0].overview));
  }

  useEffect(() => {
    getData();
    getContent();
  }, []);

  console.log(movies);

  return (
    <header style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movies})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position:'absolute',
    width:'100%',
    height:'90%',
    zIndex:'-1',
    display:'block',}}>
      <div className="header_innershadow"> </div>
      <div className="header_content">
      <h4 className="headerdesc" style={{color:'white',}}>{content}</h4>
        <div className="header_buttons" style={{}}>
        
        <br/>
          <button className="header_button play_button">
            <img
              height="20px"
              alt="play"
              width="20px"
              src="https://cdn-icons-png.flaticon.com/512/27/27223.png"
            />
            Play
          </button>
          <button className="header_button more_info_button">
            <img
              height="20px"
              alt="more info"
              width="20px"
              src="https://cdn-icons-png.flaticon.com/512/6583/6583141.png"
            />
            Info
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;