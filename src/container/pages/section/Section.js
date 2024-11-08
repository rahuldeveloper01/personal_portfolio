import React from "react";
import Index from "../../../componets/Index";
import HomePage from "../home/HomePage";
import About from "../about/About";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contacts/Contact";
import PageIndex from "../../../componets/PageIndex";

const Section = () => {
  const { pathname } = PageIndex.useLocation();
  console.log(pathname,"hello");
  

  // Automatically scrolls to top whenever pathname changes
  PageIndex.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Index.Box className="section-container">
      {/* <Index.Box>
        <HomePage />
      </Index.Box> */}
      <Index.Box>
        <About />
      </Index.Box>
      <Index.Box>
        <Services />
      </Index.Box>
      <Index.Box>
        <Portfolio />
      </Index.Box>
      <Index.Box>
        <Contact />
      </Index.Box>
    </Index.Box>
  );
};

export default Section;
