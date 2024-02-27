import React, { useEffect, useState } from "react";
import { Button, Col, Drawer, Form, Input, Row, Select } from "antd";
import Swal from "sweetalert2";
import axios from "../../components/config/axios";
import Cimage from "../../components/image/image";
import { EditOutlined } from "@ant-design/icons";

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

interface CDrawerEditProps {
  movieId: number;
}

const CDrawerEdit: React.FC<CDrawerEditProps> = ({ movieId }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
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

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/movies/${movieId}`);
        const movie = response.data;
        setMovieData(movie);
        form.setFieldsValue(movie);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchMovie();
  }, [movieId, form]);

  const handleImageChange = (imageUrl: string) => {
    setMovieData((prevFormData) => ({ ...prevFormData, image: imageUrl }));
  };

  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = form.getFieldsValue();
    const updatedFormData = { ...formData, image: movieData.image };

    try {
      const response = await axios.patch(`/movies/${movieId}`, updatedFormData);
      await Swal.fire("แจ้งเตือน", "อัพเดตบทความเรียบร้อย", "success");
      setOpen(false);
      window.location.reload(); // รีเฟรชหน้า
      console.log("aaaa", response.data);
    } catch (error) {
      Swal.fire("แจ้งเตือน", "error");
    }
    
    
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
        
        onClick={showDrawer}
        className="w-[4vw]  text-black flex justify-center item-center bg-green-700  "
      >
      <EditOutlined className="flex justify-center text-[20px]" />
      </Button>
      <Drawer title="เพิ่มรายการหนัง" onClose={onClose} open={open} width={500}>
      <Form form={form}>
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
            rules={[{ required: true }]}
          >
            <Input
              placeholder="ชื่อเรื่อง"
              className="!border-gray-100 shadow-sm"
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={"IMDB"} name="imdb" className="w-full m-0">
            <Input placeholder="IMDB" className="!border-gray-100 shadow-sm" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={"เสียง"} name="sound" className="w-full m-0">
            <Input placeholder="เสียง" className="!border-gray-100 shadow-sm" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={"นักแสดง"} name="actor" className="w-full m-0">
            <Input
              placeholder="นักแสดง"
              className="!border-gray-100 shadow-sm"
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
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={"ผู้เขียนบท"} name="swe" className="w-full m-0">
            <Input
              placeholder="ผู้เขียนบท"
              className="!border-gray-100 shadow-sm"
            />
          </Form.Item>
        </Col>
      </Row>
      <Button
        onClick={submitForm}
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

export default CDrawerEdit;
