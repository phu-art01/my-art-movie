import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Col, Row } from "antd";



import TitleHead from "../../components/header/title-head";
import axios from "../../components/config/axios";
import { ContainerBox } from "../../components/container/container";
import ViewsItem from "./views-Item";


interface Moredetails {
    id: number;
    swe: string;
    Watchoffline: string;
    actor: string;
    weo: string;
    sound: string;
    streak:string;
    
  }

const Details =()=>{
  const { id } = useParams<{ id: string }>();
  const [moredetails, setMoredetails] = useState<Moredetails | null>(null);
  useEffect(() => {
    const Data = async () => {
      try {
        const response = await axios.get(`/movies/${id}`);
        setMoredetails(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
  
    Data();
  }, []);
  return(
    <>
    <Row gutter={[10, 10]} className="c-text">
        <Col span={24}>
          {moredetails ? (
            <ContainerBox className="min-h-[200px] c-bg">
              <TitleHead title="รายละเอียดเพิ่มเติม" />
              <Row gutter={[10, 10]}>
                <ViewsItem label="ผู้กำกับ"value={moredetails?.Watchoffline}/>
                <ViewsItem label="ผู้เขียนบท" value={moredetails?.swe} />
                <ViewsItem label="แนว" value={moredetails?.streak} />
                <ViewsItem label="เสียง" value={moredetails?.sound} />
                <ViewsItem label="นักแสดง" value={moredetails?.actor} />
              </Row>
            </ContainerBox>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </>
  )
}
export default Details;