
import { Grid, Image, MenuProps, Button, Row, Col, Divider, Dropdown } from "antd";
import HeaderWarpper from "./header.warpper";
import { sidebarWidth } from "../sider/sidebar.variable";
import clsx from "clsx";
import image from "../../../../public/images/logo copy.png"

import { DownOutlined } from "@ant-design/icons";
import { CAvatarName } from "../../avatar/avatar-name";

const profileItems: MenuProps['items'] = [
  {
    label: (<Button block size="large" className="bg-emerald-800" >ดูโปรไฟล์</Button>),
    key: '0',
  },
  {
    label: (
      <Button
        block
        size="large"
        className="btn-secondary bg-emerald-800"
        onClick={() => {
        }}>
        ออกจากระบบ
      </Button>
    ),
    key: '1',
  }
];


const Header = () =>{
  const screens = Grid.useBreakpoint();
  const getLogo = () => {
    const lg = Object.entries(screens)
      .filter((screen) => (!!screen[1] && ["lg"].includes(screen[0])))
    return !lg.length ? <Image src={image} width={"200%"} height={"auto"} preview={false} className="mr-[4px]"/> : <Image src={image} width={"100%"} height={"auto"} preview={false} />
  }
    return(
    
     <HeaderWarpper>
     <div className={clsx(`flex items-center justify-center h-full c-hea`, sidebarWidth)}>
        <div className="px-8 max-w-[200px] mt-3 ml-2  logo ">
          {getLogo()}
        </div>
      </div>
      <div className="w-full c-color" >
        <Row justify="space-between" >
          <Col >
            <Divider type="vertical" className="bg-white h-full m-0 opacity-[0.2]" />
          </Col>
          <Col className="pr-10 flex items-center justify-between">
            <Dropdown menu={{ items: profileItems }} className="w-56" trigger={['click']}>
              <div className="flex items-center justify-between">
                <div className="">
                <CAvatarName src={"https://source.unsplash.com/256x256"} name={"Art" || "-"} subTile={"Phu-art Maelaeh" || "-"} textColor="text-white" />
                </div>
                <DownOutlined className="ml-2 text-white" style={{ width: 12 }} />
              </div>
            </Dropdown>
          </Col>
        </Row>
      </div>
        </HeaderWarpper>
  )  
}
export default Header;