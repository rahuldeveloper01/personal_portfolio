import React from "react";
import Index from "../../../componets/Index";
import PageIndex from "../../../componets/PageIndex";
import { PDF } from "../../../assests/Pdf";
import Section from "../section/Section";

var data = [
  "Frontend Developer",
  "Web Designer",
  "ReactJs Developer",
  "FullStack Developer",
];

const HomePage = () => {
  const [second, setSecond] = PageIndex.useState(0);
  const navigate = PageIndex.useNavigate();
  PageIndex.useEffect(() => {
    const result = setInterval(() => {
      if (second === 3) {
        setSecond(0);
      } else {
        setSecond(second + 1);
      }
    }, 3000);
    return () => clearInterval(result);
  }, [second]);

  return (
    <>
      <Index.Box className="homepage-main">
        <Index.Box className="homepage-text-contain">
          <Index.Typography variant="h4">Hi,Myself</Index.Typography>
          <Index.Typography variant="h3">Anil Chouhan</Index.Typography>
          <Index.Typography variant="h4" className="home-page-text">
            <p>And I'am </p>
            <h3 className="homepage-heading">{`${data[second]} ...`}</h3>
          </Index.Typography>
          <Index.Typography variant="h6">
            Frontend developer with expertise in creating responsive and
            interactive web applications. Proficient in HTML, CSS, JavaScript,
            and React, with a focus on delivering high-quality user experiences.
          </Index.Typography>
          <Index.Box className="social-medialogo-box">
            <img src={Index.PNG.facebook} className="social-media-image" />
            <img src={Index.PNG.instagram} className="social-media-image" />
            <img src={Index.PNG.twitter} className="social-media-image" />
            <img
              src={Index.PNG.linkden}
              className="social-media-image"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/anil-chouhan-441241240/",
                  "_blank"
                )
              }
            />
          </Index.Box>

          <Index.Box>
            <Index.Button variant="contained" className="read-more-button">
              <a
                href={PDF.resume}
                download="file.pdf"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Download CV
              </a>
            </Index.Button>
          </Index.Box>
        </Index.Box>
        <Index.Box className="image-box">
          <img
            className="homepage-image"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          />
        </Index.Box>
      </Index.Box>
      <Index.Box>
        <Section />
      </Index.Box>
    </>
  );
};

export default HomePage;
