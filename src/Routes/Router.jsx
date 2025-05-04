import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../Components/Layout";
import LogIn from "./../Pages/LogIn";
import Home from "./../Pages/Home";
import Register from "./../Pages/Register";
import Profile from "../Pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Pages/Details";
import NotFound from "../Pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}></Route>
      <Route index element={<Home></Home>}></Route>
      <Route path="login" element={<LogIn></LogIn>}></Route>
      <Route path="register" element={<Register></Register>}></Route>
      <Route
        path="profile"
        element={
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="service/:id"
        element={
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        }
      ></Route>
      <Route path="login" element={<LogIn></LogIn>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default Router;
