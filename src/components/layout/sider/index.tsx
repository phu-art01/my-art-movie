import { Layout, Menu, MenuProps } from "antd"
import { useLocation, useNavigate } from "react-router-dom";
import { _menu } from "./listmenu";
import React from "react";
import { useTranslation } from "react-i18next";
import SideBarWarper from "./sidebar.warpper";
import "./style.css"
type MenuItem = Required<MenuProps>['items'][number];
export interface MenuInfo{
  key:string;
  keyPath:string[];
  item:React.ReactInstance;
  domEvent:React.MouseEvent<HTMLElement>|React.KeyboardEvent<HTMLElement>;
}
function getItem(
  label:React.ReactNode,
  key:React.Key,
  icon?:React.ReactNode,
  children?:MenuItem[],
  type?:'group',
):MenuItem{
  return{
    key,
    icon,
    children,
    label,
    type,
  }as MenuItem;
}

const Sider = () =>{
  const navigate = useNavigate();
  const {t}=useTranslation();
  const location=useLocation();

  const getMenu = () =>{
    const authorizedMenu = _menu.map(item =>(getItem(t(item.titleTH),item.path,<item.icon/>)))
    return authorizedMenu
  }

  const onClick:MenuProps['onClick']=(e:MenuInfo) =>{
    console.log("e",e.key);
    navigate(e.key)
}
  const getMenuActive = () =>{
    const pathname = "/" +location.pathname.split('/')[1]
    return location?.pathname?[pathname] : []
  }
    return(
        <SideBarWarper>
          <div className='p-2 flex flex-col justify-between '>
        <Layout.Sider  
            collapsedWidth="40px"
            breakpoint="lg"
            className='!max-w-full !w-full'>
        <Menu
          className='CSidebar'
          defaultSelectedKeys={getMenuActive()}
          items={getMenu()}
          onClick={onClick}
        />
      </Layout.Sider>
      </div>
        </SideBarWarper>
    )
}
export default Sider