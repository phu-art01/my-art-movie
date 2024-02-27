import PageHead from "../../components/header/page-head";
import { useTranslation } from "react-i18next";
import { Card, Col, Row, Image, Select } from "antd";
import Container from "../../components/container/container";
import { useEffect, useState } from "react";
import axios from "../../components/config/axios";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  name: string;
  imdb: number;
  sound: string;
  actor: string;
  streak: string;
  image: string;
}

const Movie = () => {
  const { t } = useTranslation();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [posts, setPosts] = useState<Movie[]>([]);
  const [, setSelectedTechno] = useState<string>("all");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get("/movies");
      setMovies(response.data);
      setPosts(response.data); // set posts initially with all movies
    };
    fetchMovies();
  }, []);

  const handleFilterByTechno = (selectedTechno: string) => {
    setSelectedTechno(selectedTechno);
    if (selectedTechno === "all") {
      setMovies(posts); // Reset movies to all posts when 'all' is selected
    } else {
      const filteredMovies = posts.filter((movie) =>
        movie.streak.includes(selectedTechno)
      );
      setMovies(filteredMovies); // Set movies to filtered movies
    }
  };

  return (
    <Container className="">
      <Row>
        <PageHead title={t("Movies Online")} />
        <Col className=" flex justify-end rounded-full  absolute w-[200px]  right-6  ">
          <div className="filter-buttons pl-4 pr-4 ">
            <Select
              defaultValue="all"
              style={{ width: 150 }}
              onChange={handleFilterByTechno}
            >
              <Select.Option value="all" style={{position:"static"}}>ทั้งหมด</Select.Option>
              {posts.map((movie, index) => (
                <Select.Option key={index} value={movie.streak} >
                  {movie.streak}
                </Select.Option>
              ))}
            </Select>
          </div>
        </Col>
      </Row>

      <Row gutter={[10, 10]}>
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => (
            <Col span={6} key={index}>
              <Link to={`/movie/${movie.id}`}>
                <Card
                  className="h-full w-[100%] "
                  cover={
                    <Image
                      preview={false}
                      src={movie.image}
                      style={{ width: "100%", height: 200 }}
                    />
                  }
                >
                  <p className="text-lg font-bold text-gray-700">
                    {movie.name}
                  </p>
                  <p>
                    {t("คะแนนจากIMDB")}: {movie.imdb}
                  </p>
                  <p>
                    {t("เสียง")}: {movie.sound}
                  </p>
                  <p>
                    {t("นักแสดง")}: {movie.actor}
                  </p>
                  <p>
                    {t("ประเภทหนัง")}: {movie.streak}
                  </p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Movie;
