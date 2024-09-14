import React from 'react'
import { Link } from 'react-router-dom';




function Card({populary,}) {
    const img_url = "https://image.tmdb.org/t/p/w500";
    return (
     /* From Uiverse.io by 05akalan57 */ 
<div
  class="relative drop-shadow-xl w-[400px] h-[600px] overflow-hidden rounded-xl bg-[#323132] "
>
  <div
    class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"
  >
  <Link to={`./single/${populary.id}`} className='w-[400px] h-[600px]'>
  <img src={img_url+populary.poster_path}className='w-[400px] h-[500px]  rounded-xl '  />
  <h1 className='text-3xl text-white'> {populary.original_title} </h1>
  <p  className='text-white text-2xl '>{populary.release_date} </p>
</Link>
  </div>
  <div class="absolute w-[400px] h-[600px] bg-white blur-[50px] -left-1/2 -top-1/2"></div>
</div>

      
    )
    
  }
  
  export default Card 
  
  
  
  
  /**/