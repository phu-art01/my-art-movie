import React, { useState } from "react";
import { Button, Col, Drawer, Form, Input, Row, Select } from "antd";
import axios from "../../components/config/axios";
import Cimage from "../../components/image/image";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

interface Movie {
  id: number;
  name: string;
  imdb: number;
  sound: string;
  actor: string;
  streak: string;
  image: string;
  Watchoffline: string;
  swe: string;
}
interface CDrawerProps {
  setMovies:(movies: Movie[]) => void;
}

const CDrawer: React.FC<CDrawerProps> = ({ setMovies }) => {
  const [open, setOpen] = useState(false);
  const [movieData, setMovieData] = useState<Movie>({
    id: 0,
    name: "",
    imdb: 0,
    sound: "",
    actor: "",
    streak: "",
    image: "",
    Watchoffline: "",
    swe: "",
  });
  const [form] = Form.useForm();

  const handleFinish = async () => {
    try {
      const newId = uuidv4();
      const response = await axios.post("/movies", { ...movieData, id: newId });
      setMovies (response.data);
      setMovieData({
        id: 0,
        name: "",
        imdb: 0,
        sound: "",
        actor: "",
        streak: "",
        image: "",
        Watchoffline: "",
        swe: "",
      });
  
      Swal.fire("แจ้งเตือน", "บันทึกข้อมูลเรียบร้อย", "success");
      setOpen(false);
      window.location.reload();
    } catch (error) {
      Swal.fire("แจ้งเตือน", "error");
    }
  };
  
  const handleImageChange = (imageUrl: string) => {
    setMovieData((prevFormData) => ({ ...prevFormData, image: imageUrl }));
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        className="w-[6vw]  text-[#f8fafc] flex justify-center rounded-full item-center "
      >
        เพิ่ม
      </Button>
      <Drawer title="เพิ่มรายการหนัง" onClose={onClose} open={open} width={500}>
        <Form onFinish={handleFinish} form={form}>
          <Col span={24}>
            <Form.Item name="profileImage" className="w-full m-0 text-center">
              <Cimage
                onImageChange={handleImageChange}
                onImageUploadError={() => {}}
              />
            </Form.Item>
          </Col>
          <Row gutter={[8, 20]}>
            <Col span={24}>
              <Form.Item
                label={"ชื่อเรื่อง"}
                name="name"
                className="w-full m-0 "
              >
                <Input
                  placeholder="ชื่อเรื่อง"
                  className="!border-gray-100 shadow-sm"
                  value={movieData.name}
                  onChange={(e) =>
                    setMovieData({ ...movieData, name: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={"IMDB"} name="imdb" className="w-full m-0">
                <Input
                  placeholder="เลขห้อง"
                  className="!border-gray-100 shadow-sm"
                  value={movieData.imdb}
                  onChange={(e) =>
                    setMovieData({ ...movieData, imdb: Number(e.target.value) })
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={"เสียง"} name="sound" className="w-full m-0">
                <Input
                  placeholder="เสียง"
                  className="!border-gray-100 shadow-sm"
                  value={movieData.sound}
                  onChange={(e) =>
                    setMovieData({ ...movieData, sound: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={"นักแสดง"} name="actor" className="w-full m-0">
                <Input
                  placeholder="นักแสดง"
                  className="!border-gray-100 shadow-sm"
                  value={movieData.actor}
                  onChange={(e) =>
                    setMovieData({ ...movieData, actor: e.target.value })
                  }
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={"ประเภท"}
                name="streak"
                className="w-full m-0"
                rules={[{ required: false }]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  placeholder="แนวภาพยนตร์"
                  value={movieData.streak}
                  onChange={(selectedOptions) =>
                    setMovieData({ ...movieData, streak: selectedOptions })
                  }
                >
                  <Select.Option value="ภาพยนตร์อาชญากรรม">
                    ภาพยนตร์อาชญากรรม
                  </Select.Option>
                  <Select.Option value="ภาพยนตร์ตลก">ภาพยนตร์ตลก</Select.Option>
                  <Select.Option value="ภาพยนตร์แอ็คชั่นผจญภัย">
                    ภาพยนตร์แอ็คชั่นผจญภัย
                  </Select.Option>
                  <Select.Option value="ภาพยนตร์ครอบครัว">
                    ภาพยนตร์ครอบครัว
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={"ผู้กับกำ"}
                name="Watchoffline"
                className="w-full m-0"
              >
                <Input
                  placeholder="ผู้กับกำ"
                  className="!border-gray-100 shadow-sm"
                  value={movieData.Watchoffline}
                  onChange={(e) =>
                    setMovieData({ ...movieData, Watchoffline: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={"ผู้เขียนบท"} name="swe" className="w-full m-0">
                <Input
                  placeholder="ผู้เขียนบท"
                  className="!border-gray-100 shadow-sm"
                  value={movieData.swe}
                  onChange={(e) =>
                    setMovieData({ ...movieData, swe: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Button
            onClick={() => form.resetFields()}
            type="primary"
            htmlType="submit"
            className="login-form-button bg-sky-600 w-full mt-4"
          >
            บันทึก
          </Button>
        </Form>
      </Drawer>
    </>
  );
};

export default CDrawer;
