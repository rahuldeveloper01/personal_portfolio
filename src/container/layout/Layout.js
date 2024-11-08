import React from "react";
import Index from "../../componets/Index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Index.Box className="layout-container">
      <Index.Box>
        <Index.Header />
      </Index.Box>

      <Index.Box className="footer-outlet-main">
     
        <Index.Box className="outlet-container">
          <Outlet />
        </Index.Box>
        <Index.Footer />
      </Index.Box>
    </Index.Box>
  );
};

export default Layout;
