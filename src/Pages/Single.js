import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Erorr from '../Conponents/Erorr';



function Single() {
    const img_url = "https://image.tmdb.org/t/p/w500";
  //  let filmId = location.search.replace(/[^0-9]/g,'')
    const id = useParams();
    const [single, setSingle] = useState([]);  
    const [vidio,setVidio]= useState([])
    const [popap ,setpopap]=useState("")
    const [actior,setActior]= useState([])
    const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id.id}?${api_key}`)
        .then((res) => res.json())
        .then((res) => setSingle(res));
        
   
    },[]);

 useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id.id}/credits?${api_key} `)
        .then((res) => res.json())
        .then((res) => setActior(res.cast));
    },[]);



   useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id.id}/videos?${api_key} `)
    .then((res) => res.json())
    .then((res) => setVidio(res.results));
},[]);


    
  return (
    
    <div className="w-full  " >
      <Erorr/>
       <img src={img_url+single.backdrop_path}className="w-full h-screen absolute top-0 -z-20"/>
    <div className="w-full h-[80vh] flex justify-center items-center gap-[80px] ">
    <img src={img_url+single.poster_path}  className="w-[350px] h-[500px] border-[30px] border-[rgba(0,0,0,0.6)] rounded-lg  md:hidden " /> 
        <div className="w-[600px] h-[500px] p-[20px] bg-[rgb(0,0,0,0.6)]  flex flex-col gap-5 rounded-lg  m-5 md:h-[500px]">
          <h1 className="text-3xl text-center text-white">{single.original_title}</h1>
          <span className="text-2xl text-green-600 text-center " >Average  {single.vote_average} </span>
          <span className="text-2xl text-red-600 text-center"> {single.release_date}</span>
          <h3 className="text-center text-white   	">{single.overview}</h3>
        </div>
      </div>
     <div className="bg-black">
        <h1 className=" text-4xl  text-white  text-center">Credits</h1>
         <div className="w-full flex overflow-x-scroll 	 ">
        {
          actior.map((e,i)=>{
            return <div key={i} className="w-full text-center  ">
              <div className="w-[400px] h-[500px] p-[20px]    ">
              <img src={img_url+e.profile_path}  className='w-[350px] h-[400px] border-[1px] border-white'/>
              <h1 className="text-3xl text-white">{e.name} </h1>
              </div>
             
            </div>
          })
        }
         </div>
     </div>

     <div className="w-full h-[300px] pt-5 bg-black">
        <h1 className="text-4xl  text-white  text-center">Vidio</h1>
        
        <div className="w-full flex overflow-x-scroll gap-2  ">
        <div className=" flex  gap-40 " >
      {    
        vidio.map((elem, ind) => {
          return (
            <div key={ind}>
                <div
                  className="relative  w-[200px] h-[200px] p-[40px]  "
                  onClick={() => setpopap(elem.key)}>
                  <iframe
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${elem.key}`}
                   
                    ></iframe>
                  <div className="w-[200px] h-[200px]  bg-none absolute z-20 top-0 cursor-pointer "></div>
                </div>

              </div>
            );
          })}
          </div>
        </div>
      </div>
      {popap !== "" ? <div className="w-full h-screen fixed z-20 bg-[rgba(0,0,0,0.465)] top-0 flex justify-center items-center cursor-pointer p-[5px] " onClick={() => setpopap("")}>
        <iframe allowFullScreen src={`https://www.youtube.com/embed/${popap}`} className="h-[90%] w-[90%] relative"></iframe></div> : null}
        
    </div>
  );
}

export default Single;



