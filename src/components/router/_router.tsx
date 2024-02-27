import { RouteCustom } from "./route.interface";
import {routerAuthorization} from "./authorization.router"
import { routerDefault } from "./default.router";
export const router:RouteCustom[] =[...routerAuthorization,...routerDefault];
export default router