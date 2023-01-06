import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router";
import AddListPage from "../pages/AddListPage";
import MainPage from "../pages/MainPage";
import SelectListPage from "../pages/SelectListPage";

const routes: RouteObject[] = [
  {
    path: "/list",
    element: <AddListPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/select",
    element: <SelectListPage />,
  },
];

const AppRouter: RemixRouter = createBrowserRouter(routes);

export default AppRouter;
