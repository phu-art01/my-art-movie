
import { Outlet } from "react-router-dom"
import LayoutWrapper from "../layout.warpper"



const Content = () => {
    return(
        <LayoutWrapper className="main-wrapper block min-h-0">
          <div className="rounded-sm h-full text-gray-500">
          <Outlet/>
        </div>
        </LayoutWrapper>
    )
}
export default Content