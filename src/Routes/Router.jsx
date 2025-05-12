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
import Subscribe from "../Pages/Subscribe";
import Blogs from "../Pages/Blogs";
import Contacts from "../Pages/Contacts";
import Terms from "../Pages/Terms";
import PrivacyPolicy from "../Pages/PrivacyPolicy";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<LogIn />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
        <Route
          path="profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="service/:id"
          element={
            <PrivateRoutes>
              <Details />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="subscribe"
          element={
            <PrivateRoutes>
              <Subscribe />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="terms" element={<Terms />}></Route>
        <Route path="privacy" element={<PrivacyPolicy />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Router;
