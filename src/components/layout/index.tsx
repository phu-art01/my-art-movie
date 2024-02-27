import { Layout } from "antd"
import Sider from "./sider"
import Header from "./header"
import Content from "./content"
import LayoutWrapper from "./layout.warpper"




const AppLayout = () =>{
    return(
        <Layout className="flex flex-col w-full min-h-full box-border bg-screen">
            <section id="section-layout" className="layout flex flex-auto flex-row min-h-full box-border w-full">
            <Sider/>
            <LayoutWrapper className="content-wrapper flex min-h-screen flex-col w-0">
                <Header/>
                <Content/>
            </LayoutWrapper>
            </section>
        </Layout>
    )
}
export default AppLayout