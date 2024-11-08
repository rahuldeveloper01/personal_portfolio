import React from "react";
import Index from "../../../componets/Index";

const Portfolio = () => {
  return (
    <Index.Box className="homepage-main">
      <Index.Box className="service-page-main">
        <Index.Box>
          <Index.Typography variant="h5" className="service-heading-box">
            Latest <span className="service-heading-text">Projects</span>
          </Index.Typography>
        </Index.Box>
        <Index.Box className="servicepage-grid">
          <Index.Box sx={{ width: "100%" }}>
            <Index.Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              className="servicepage-contain"
            >
              <Index.Grid item xs={4}>
                <Index.Card className="portfolio-card">
                  <img
                    src={Index.PNG.reactjs}
                    alt="React JS"
                    className="portfolio-card-image"
                  />
                  <div className="overlay">
                    <Index.CardContent className="card-content-overlay">
                      <Index.Box className="portfolio-card-center">
                        <Index.Typography variant="h6" className="card-heading">
                          Web Developer
                        </Index.Typography>
                        <Index.Typography
                          variant="p"
                          className="card-paragranph"
                        >
                          Frontend developer with expertise in creating
                          responsive and interactive web applications.
                        </Index.Typography>
                        <Index.Box className="card-logo-box">
                          <img
                            src="https://img.icons8.com/?size=80&id=wiLnCg3OanlU&format=png"
                            className="card-share-icon"
                          />
                        </Index.Box>
                      </Index.Box>
                    </Index.CardContent>
                  </div>
                </Index.Card>
              </Index.Grid>
              <Index.Grid item xs={4}>
                <Index.Card className="portfolio-card">
                  <img
                    src={Index.PNG.reactjs}
                    alt="React JS"
                    className="portfolio-card-image"
                  />
                  <div className="overlay">
                    <Index.CardContent className="card-content-overlay">
                      <Index.Box className="portfolio-card-center">
                        <Index.Typography variant="h6" className="card-heading">
                          Web Developer
                        </Index.Typography>
                        <Index.Typography
                          variant="p"
                          className="card-paragranph"
                        >
                          Frontend developer with expertise in creating
                          responsive and interactive web applications.
                        </Index.Typography>
                        <Index.Box className="card-logo-box">
                          <img
                            src="https://img.icons8.com/?size=80&id=wiLnCg3OanlU&format=png"
                            className="card-share-icon"
                          />
                        </Index.Box>
                      </Index.Box>
                    </Index.CardContent>
                  </div>
                </Index.Card>
              </Index.Grid>
              <Index.Grid item xs={4}>
                <Index.Card className="portfolio-card">
                  <img
                    src={Index.PNG.reactjs}
                    alt="React JS"
                    className="portfolio-card-image"
                  />
                  <div className="overlay">
                    <Index.CardContent className="card-content-overlay">
                      <Index.Box className="portfolio-card-center">
                        <Index.Typography variant="h6" className="card-heading">
                          Web Developer
                        </Index.Typography>
                        <Index.Typography
                          variant="p"
                          className="card-paragranph"
                        >
                          Frontend developer with expertise in creating
                          responsive and interactive web applications.
                        </Index.Typography>
                        <Index.Box className="card-logo-box">
                          <img
                            src="https://img.icons8.com/?size=80&id=wiLnCg3OanlU&format=png"
                            className="card-share-icon"
                          />
                        </Index.Box>
                      </Index.Box>
                    </Index.CardContent>
                  </div>
                </Index.Card>
              </Index.Grid>
            </Index.Grid>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default Portfolio;
