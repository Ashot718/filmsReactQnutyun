import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";



function Card({populary}) {
    const img_url = "https://image.tmdb.org/t/p/w500";
    return (
      <Link to={`./single/${populary.id}`} className='card'>
        <img src={img_url+populary.poster_path} />
        <h1> {populary.original_title} </h1>
         <p>{populary.release_date} </p>
      </Link>
    )
  }
  
  export default Card