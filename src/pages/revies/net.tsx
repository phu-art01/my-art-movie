import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./details";

import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import axios from "../../components/config/axios";


interface Movie {
  id: number;
  name: string;
  content: string;
  actor: string;
  weo: string;
  image: string;
  imagetitle:string;
  videourl:string;
  
}


const  Billboard=()=> {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    axios
      .get(`/movies/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);
  
  return (
    <>
      <div className="relative h-[40.50vw]">
        {movie ? (
          <>
            <video poster={movie.image} className="w-full h-full  object-cover brightness-[40%] transition duration-500" autoPlay muted loop src={movie.videourl}></video>
            <div className="absolute top-[20%] md:top-[0%] ml-4 md:ml-16">
            <img className=" h-full w-[50%] lg:text-2xl  drop-shadow-xl mt-4" src={movie.imagetitle} />
                </div>
                <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
              <div className="text-white text-1xl md:text-4xl h-full w-[70%] lg:text-4xl font-bold drop-shadow-xl">
                {movie.name}
              </div>
              <div className="text-[#a3a3a3] text-[8px] md:text-lg mt-3 md:mt-5 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                {movie.content}
              </div>
              <div className="text-white text-[8px] md:text-lg mt-3 md:mt-5 w-[90%] md:w-[80%] lg:w-[100%] drop-shadow-xl">
                {movie.weo}
              </div>
              <div className="text-white text-[8px] md:text-lg mt-3 md:mt-5 w-[90%] md:w-[60%] lg:w-[100%] drop-shadow-xl">
                นักแสดงนำ: {movie.actor}
              </div>
              <div className="flex space-x-3 mt-4">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button  className="bannerButton bg-[gray]/70">
          <IoMdInformationCircleOutline className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
      <Details/>
      </div>
    </>
  );
}

export default Billboard;
