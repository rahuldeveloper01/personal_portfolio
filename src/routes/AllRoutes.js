import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../container/layout/Layout";
import HomePage from "../container/pages/home/HomePage";
import Section from "../container/pages/section/Section";
import Services from "../container/pages/services/Services";
import About from "../container/pages/about/About";
import Contact from "../container/pages/contacts/Contact";
import Portfolio from "../container/pages/portfolio/Portfolio";
import Scroll from "../container/pages/scroll/Scroll";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Section />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
