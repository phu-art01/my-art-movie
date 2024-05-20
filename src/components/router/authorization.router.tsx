
import Product from "../../pages/edit.post";
import Page404 from "../../pages/error/Page404";
import Movie from "../../pages/movies";
import Premium from "../../pages/premium";
import Billboard from "../../pages/revies/net";

import AppLayout from "../layout";
import { RouteCustom } from "./route.interface";


export const routerAuthorization :RouteCustom[] = [
   {
    path:"/",
    element:<AppLayout />,
    children:[
      { index:true,navigateElement:{to:"/movie"}},
      {
         path: "/movie",
         keyName: "MOVIE",
         requireAuth: true,
         children: [
           {
             index: true,
             path: "/movie",
             keyName: "MOVIE",
             requireAuth: true,
             element: <Movie />,
           },
           {
             index: true,
             path: "/movie/:id",
             keyName: "MOVIE",
             requireAuth: true,
             element: <Billboard />,
           },
         ]
       },
            {
               index:true,
                path: "/product" ,
                keyName:"PRODUCT",
                requireAuth:true,
                element: <Product/>
               },
            {
               index:true,
                path: "/premium" ,
                keyName:"PREMIUM",
                requireAuth:true,
                element: <Premium/>
               },
               {
                  path: "/404",
                  keyName: "error404",
                  requireAuth: true,
                  element: <Page404 />,
                },
                { path: "*", keyName: "error", navigateElement: { to: "/error/404" } },
                { path: "*", navigateElement: { to: "/error/404" }, requireAuth: false },
        
    ]
   }
]