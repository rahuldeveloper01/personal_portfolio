import React from "react";
import Index from "../../Index";
import PageIndex from "../../PageIndex";

const Header = () => {
  const navigate = PageIndex.useNavigate();
  return (
    <Index.Box className="header-main">
      <Index.Box className="header-contain">
        <Index.Box className="header-title-box">
          <Index.Typography variant="h4" className="header-title-text">
            RAHUL CHOUHAN..
          </Index.Typography>
        </Index.Box>
        <Index.Box className="navbar-box">
          {/* <Index.Link></Index.Link> */}
          <Index.Typography
            variant="h6"
            className="navbar-text"
            onClick={() => navigate("/")}
          >
            Home
          </Index.Typography>
          <Index.Typography
            variant="h6"
            className="navbar-text"
            onClick={() => navigate("/about")}
          >
            About
          </Index.Typography>
          <Index.Typography
            variant="h6"
            className="navbar-text"
            onClick={() => navigate("/service")}
          >
            Services
          </Index.Typography>
          <Index.Typography variant="h6" className="navbar-text">
            Portfolio
          </Index.Typography>
          <Index.Typography variant="h6" className="navbar-text">
            Contact
          </Index.Typography>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default Header;
