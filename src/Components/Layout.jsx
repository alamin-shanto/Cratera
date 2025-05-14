import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => {
      clearTimeout(timeout);
      setLoading(false);
    };
  }, [location.pathname]);

  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[40vh]">
        {loading ? <LoadingSpinner /> : <Outlet />}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
