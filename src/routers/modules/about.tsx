import React from "react";
import { RouteObject } from "@/routers/interface";
import lazyLoad from "../utils/lazyLoad";
// import LayoutIndex from '@/layouts'

const PlazaRouter: Array<RouteObject> = [
  {
    path: "/about",
    element: lazyLoad(lazy(() => import("@/views/About"))),
  },
];

export default PlazaRouter;
