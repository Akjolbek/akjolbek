import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Home from "./components/Home/Home";
import ProductsList from "./components/WindowsList/ProductsList";
import NewsList from "./components/NewsList/NewsList";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import CreditCart from "./components/creditCart/CreditCart"
import SuccessCredit from "./components/creditCart/SuccessCredit"
import Fav from "./components/Favourites/Fav";
import CreditForm from "./components/creditCart/CreditForm"
import EditNews from "./components/EditNews/EditNews";
import WindowHome from "./components/News/WindowHome";
import WindowHome1 from "./components/News/WindowHome1";
import WindowHome2 from "./components/News/WindowHome2";
import WindowHome3 from "./components/News/WindowHome3";
import DoorsList from "./components/DoorsList/DoorsList";
import DetailsDoor from "./components/DetailsDoor/DetailsDoor";
import EditDoor from "./components/EditDoor/EditDoor";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/window_shop",
      element: <ProductsList/>,
      id: 2,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 3,
    },
    {
      link: "/window_shop/:id",
      element: <DetailsProduct />,
      id: 4,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 5,
    },
    {
      link: "/creditCart",
      element:<CreditCart/>,
      id: 6
    },
    {
      link:"/successCredit",
      element:<SuccessCredit/>,
      id: 7
    },
    {
      link: '/window_home_1',
      element: <WindowHome1 />,
      id: 8
    },
    {
      link: '/window_home',
      element: <WindowHome />,
      id: 9
    },
    {
      link: "/news",
      element:<NewsList/>,
      id: 10
    },
    {
      link: "/window_home_2",
      element:<WindowHome2/>,
      id: 11
    },
    {
      link: "/fav",
      element: <Fav/>,
      id: 12
    },
    {
      link:"/creditForm",
      element:<CreditForm/>,
      id: 14
    },
    {
      link:"/doors",
      element:<DoorsList/>,
      id: 15
    },
    {
      link:"/door_shop/:id",
      element:<DetailsDoor/>,
      id: 16
    },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
    {
      link: "/edits/:id",
      element: <EditNews />,
      id: 3,
    },
    {
      link: "/window_home_3",
      element: <WindowHome3 />,
      id: 4,
    },
    {
      link:"/edites/:id",
      element:<EditDoor />,
      id: 5
    },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      { user ? ADMIN_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            user.email === "akjol2001@gmail.com" ? (
              item.element
            ) : (
              <Navigate replace to="*" />
            )
          }
        />
      )): null}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
