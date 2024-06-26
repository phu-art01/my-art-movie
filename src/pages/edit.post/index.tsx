import PageHead from "../../components/header/page-head";
import { useTranslation } from "react-i18next";
import { Card, Col, Row, Image, Button } from "antd";
import Container from "../../components/container/container";
import CDrawer from "./drawer";
import { useEffect, useState } from "react";
import axios from "../../components/config/axios";
import Swal from "sweetalert2";
import CDrawerEdit from "./drawer.edit";
import { DeleteOutlined } from "@ant-design/icons";

interface Movie {
  id: number;
  name: string;
  imdb: number;
  sound: string;
  actor: string;
  streak: string;
  image: string;
}

const Product = () => {
  const { t } = useTranslation();

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const Movies = async () => {
      const response = await axios.get("/movies");
      setMovies(response.data);
    };
    Movies();
  }, []);

  const confirmDelete = async (movieId: number) => {
    const result = await Swal.fire({
      title: "คุณต้องการลบบทความหรือไม่",
      icon: "warning",
      showCancelButton: true,
    });

    if (result.isConfirmed) {
      await Delete(movieId);
    }
  };

  const Delete = async (movieId: number) => {
    try {
      await axios.delete(`/movies/${movieId}`);
      setMovies(movies.filter((movie) => movie.id !== movieId));
      Swal.fire("ลบสำเร็จ", "", "success");
    } catch (error) {
      console.error("Error deleting movie:", error);
      Swal.fire("Delete failed", "An error occurred while deleting", "error");
    }
  };
  return (
    <Container className="">
      <Row>
        <PageHead title={t("Movies Online")} />
        <Col className=" flex justify-end rounded-full absolute  right-4 c-bagray ">
          <CDrawer setMovies={setMovies} />
        </Col>
      </Row>
      <Row gutter={[10, 10]}>
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => (
            <Col span={8} key={index}>
              <Card
                className="h-full "
                cover={
                  <Image
                    preview={false}
                    src={movie.image}
                    style={{ width: "100%", height: 200 }}
                  />
                }
              >
                <p className="text-lg font-bold text-gray-700">{movie.name}</p>
                <p>
                  {t("IMDB")}: {movie.imdb}
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
                <div className="flex justify-end space-x-2  ">
                  <CDrawerEdit movieId={movie.id} />
                  <Button
                    onClick={() => confirmDelete(movie.id)}
                    className="flex justify-center w-[4vw] bg-red-800 "
                  >
                    <DeleteOutlined className="flex justify-center  text-[20px] " />
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default Product;
