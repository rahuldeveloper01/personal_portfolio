import React from "react";
import Index from "../../../componets/Index";
import { Box } from "@mui/material";
import { readMoreData } from "../about/About";
import PageIndex from "../../../componets/PageIndex";

const Services = () => {
  const [openIndex, setOpenIndex] = PageIndex.useState(null);
  const handleReadOpen = (val) => {
    setOpenIndex((pre) => (pre === val ? null : val));
  };
  console.log(openIndex, "openIndex");

  return (
    <>
      <Index.Box className="homepage-main">
        <Index.Box className="service-page-main">
          <Index.Box>
            <Index.Typography variant="h5" className="service-heading-box">
              My <span className="service-heading-text">Services</span>
            </Index.Typography>
          </Index.Box>
          <Index.Box className="servicepage-grid">
            <Box sx={{ width: "100%" }}>
              <Index.Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                className="servicepage-contain"
              >
                <Index.Grid item xs={4}>
                  <Index.Box className="servicepage-center-contain">
                    <img src={Index.PNG.code} className="service-page-logo" />

                    <Index.Typography
                      gutterBottom
                      variant="h6"
                      className="service-text"
                    >
                      Web Development
                    </Index.Typography>
                    <Index.Typography className="service-paragraph">
                      Frontend developer with expertise in creating responsive
                      and interactive web applications. Proficient in HTML, CSS,
                      JavaScript, and React, with a focus on delivering
                      high-quality user experiences.
                    </Index.Typography>
                    {readMoreData?.map((item, index) => (
                      <div key={index}>
                        {openIndex === 0 && (
                          <Index.Typography className="service-paragraph">
                            {item}
                          </Index.Typography>
                        )}
                      </div>
                    ))}
                    <Index.Button
                      variant="contained"
                      className="read-more-button"
                      onClick={() => handleReadOpen(0)}
                    >
                      {openIndex === 0 ? "Read Less" : "Read More"}
                    </Index.Button>
                  </Index.Box>
                </Index.Grid>
                <Index.Grid item xs={4}>
                  <Index.Box className="servicepage-center-contain">
                    <img src={Index.PNG.code} className="service-page-logo" />

                    <Index.Typography
                      gutterBottom
                      variant="h6"
                      className="service-text"
                    >
                      UI/UX Designing
                    </Index.Typography>
                    <Index.Typography className="service-paragraph">
                      Frontend developer with expertise in creating responsive
                      and interactive web applications. Proficient in HTML, CSS,
                      JavaScript, and React, with a focus on delivering
                      high-quality user experiences.
                    </Index.Typography>
                    {readMoreData?.map((item, index) => (
                      <div key={index}>
                        {openIndex === 1 && (
                          <Index.Typography className="service-paragraph">
                            {item}
                          </Index.Typography>
                        )}
                      </div>
                    ))}
                    <Index.Button
                      variant="contained"
                      className="read-more-button"
                      onClick={() => handleReadOpen(1)}
                    >
                      {openIndex === 1 ? "Read Less" : "Read More"}
                    </Index.Button>
                  </Index.Box>
                </Index.Grid>

                <Index.Grid item xs={4}>
                  <Index.Box className="servicepage-center-contain">
                    <img
                      src={Index.PNG.android}
                      className="service-page-logo"
                    />

                    <Index.Typography
                      gutterBottom
                      variant="h6"
                      className="service-text"
                    >
                      App Development
                    </Index.Typography>
                    <Index.Typography className="service-paragraph">
                      Frontend developer with expertise in creating responsive
                      and interactive web applications. Proficient in HTML, CSS,
                      JavaScript, and React, with a focus on delivering
                      high-quality user experiences.
                    </Index.Typography>
                    {readMoreData?.map((item, index) => (
                      <div key={index}>
                        {openIndex === 2 && (
                          <Index.Typography className="service-paragraph">
                            {item}
                          </Index.Typography>
                        )}
                      </div>
                    ))}
                    <Index.Button
                      variant="contained"
                      className="read-more-button"
                      onClick={() => handleReadOpen(2)}
                    >
                      {openIndex === 2 ? "Read Less" : "Read More"}
                    </Index.Button>
                  </Index.Box>
                </Index.Grid>
              </Index.Grid>
            </Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default Services;
