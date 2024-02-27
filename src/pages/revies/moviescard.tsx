import { useEffect, useState } from "react";
import { Image, Col, Row } from "antd";
import axios from "../../components/config/axios";



const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/card')
      .then(response => setMovies(response.data))
  }, []);

  return (
  <>
    <div className=" bg-zinc-900 col-span relative h-[20vw] w-full">
    <div className="  space-y-2">
        <p className="text-white  lg:text-2xl font-semibold ml-[20px]">เนื้อหาคล้ายกัน</p>
    
    <Row >
      {movies.map((movie, index) => (
        <Col key={index} className="space-x-[9px]">
          {["thumbnailUrl", "cire", "web", "veri"].map((urlKey) => (
            <Image
              key={urlKey}
              preview={false}
              src={movie[urlKey]}
              alt=""
              style={{ width: "100%", height: 200 }}
              className=" ml-[3px] cursor-pointer
              object-cover
              transition
              duration
              shadow-xl
              rounded-md
              group-hover:opacity-90
              sm:group-hover:opacity-0
              delay-300"
            />
          ))}
        </Col>
      ))}
    </Row>
    </div>
    </div>
    </>
  )
}

export default MovieCard;
