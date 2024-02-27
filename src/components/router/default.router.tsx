import { RouteCustom } from "./route.interface";
import Page500 from "../../pages/error/Page500";
import Page404 from "../../pages/error/Page404";
import NoLayout from "../layout/_none-layout";
export const routerDefault:RouteCustom[] = [
    {
        path:"/error",
        element:<NoLayout/>,
        children:[
            {path:"/error/404",element: <Page404/>},
            {path:"/error/500",element:<Page500/>},
            { path: "*", navigateElement: { to: "/error/404" } },
      { index: true, navigateElement: { to: "/error/500" } },
        ]
    }
]