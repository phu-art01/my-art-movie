import type { RouteObject } from "react-router-dom";
import { UserPermission } from "../confing/interface.config";


export interface RenderRouteInterface {
  userPermission: UserPermission[];
  routes: RouteCustom[];
}
export interface RouteCustom extends Omit<RouteObject, "children"> {
  keyName?: string;
  children?: RouteCustom[];
  requireAuth?: boolean;
  navigateElement?: NavigateElement;
  element?: React.ReactNode;
}
export interface NavigateElement {
  to: string;
}
export interface ElementRender {
  objRoute: RouteCustom;
}
