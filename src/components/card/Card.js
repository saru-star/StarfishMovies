import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;

  const [video, setVideo] = useState("");
  const [isHover,setHover]=useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/`;

  const handleMouseEnter=()=>{
    setHover(true);
  }
  const handleMouseLeave=()=>{
    setHover(false);
  }
  const fetchUrl = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}`,
      {
        params:{
            append_to_response:'videos',
        }
      }
      );
        /**/
      if (response.data.videos.results.length>0) {
        setVideo(response.data.videos.results[0].key);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {!isHover ?(<img src={imageUrl} className="card_poster" alt="poster"></img>)
        :
        (<iframe 
            title="youtube video player" 
            className="card_poster"
            width="231px"
            height="110px"
            allowFullScreen
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;'
            src={`${youtubeUrl}${video}`}> </iframe>)
    }
    
    </div>
  );
}
