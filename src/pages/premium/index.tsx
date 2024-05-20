import { Card, Row,Image, } from "antd"
import Container from "../../components/container/container"
import { useEffect, useState } from "react";
import axios from "../../components/config/axios";


interface Movie {
   id: number;
   name: string;
   imdb: number;
   sound: string;
   actor: string;
   streak: string;
   image: string;
 }

const Premium = () =>{
   const [movies, setMovies] = useState<Movie[]>([]);

   useEffect(() => {
      const Movies = async () => {
        const response = await axios.get("/movies");
        setMovies(response.data);
      };
      Movies();
    }, []);
 return(
    <Container>
      <Row gutter={[10,10]} >
         {movies.map((movie)=>(
         <Card className="w-[50vh] h-[20vh] mt-[50px] ml-[10px]" cover={
                    <Image
                      preview={false}
                      src={movie.image}
                      style={{ width: "100%", height: 200 }}
                    />
                  }>
            
         </Card>
         ))}
      </Row>
   
    </Container>
 )
}
export default Premium