import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Single.css";


function Single() {
    const img_url = "https://image.tmdb.org/t/p/w500";
  //  let filmId = location.search.replace(/[^0-9]/g,'')
    const id = useParams();
    const [single, setSingle] = useState({});
    const [actior,setActior]= useState({})
    const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id.id}?${api_key}`)
        .then((res) => res.json())
        .then((res) => setSingle(res));
        
   
    },[]);


   useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id.id}/credits?${api_key}`)
      .then((res)=> res.json())
      .then((res)=> setActior(res))
   },[])

   
   console.log(actior);
   
    
  return (
    <div className="Single" >
     <div className="conteiner">
        <div className="const">
        <img src={img_url+single.poster_path} />
        </div>
     <div  className="Info">
      <h1> {single.original_title} </h1>
      <samp>{single.release_date} </samp>
      <p>{single.overview} </p>
      
      </div>
     </div>
     <div className="actior">
        
     </div>
    
    </div>
    
  );
}

export default Single;

//https://api.themoviedb.org/3/movie/ֆիլմիԱյդԻն/credits?api_key=ՁերՔեյը