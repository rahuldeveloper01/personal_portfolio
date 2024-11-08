import React from "react";
import Index from "../../../componets/Index";
import PageIndex from "../../../componets/PageIndex";
export const readMoreData = [
  "Frontend developer with expertise in creating responsive and interactive web applications. Proficient in HTML, CSS, JavaScript, and React, with a focus on delivering high-quality user experiences. Frontend developer with expertise in creating responsive and interactive web applications. Proficient in HTML, CSS, JavaScript, and React, with a focus on delivering high-quality user experiences.",
  "Frontend developer with expertise in creating responsive and interactive web applications. Proficient in HTML, CSS, JavaScript, and React, with a focus on delivering high-quality user experiences. Frontend developer with expertise in creating responsive and interactive web applications. Proficient in HTML, CSS, JavaScript, and React, with a focus on delivering high-quality user experiences.",
  "Frontend developer with expertise in creating responsive and interactive web applications. Proficient in HTML, CSS, JavaScript, and React, with a focus on delivering high-quality user experiences. Frontend developer with expertise in creating responsive and interactive web applications. Proficient in HTML, CSS, JavaScript, and React, with a focus on delivering high-quality user experiences.",

];
const About = () => {
  const [readOpen, setReadOpen] = PageIndex.useState(false);

  return (
    <Index.Box className="homepage-main">
      <Index.Box className="about-image-box">
        <img
          className="about-image"
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        />
      </Index.Box>

      <Index.Box className="about-contain">
        <Index.Typography variant="h4">
          About <span className="about-text">Me</span>
        </Index.Typography>
        <Index.Typography variant="h5">Frontend Developer</Index.Typography>

        <Index.Typography variant="span">
          Frontend developer with expertise in creating responsive and
          interactive web applications. Proficient in HTML, CSS, JavaScript, and
          React, with a focus on delivering high-quality user experiences.
          Frontend developer with expertise in creating responsive and
          interactive web applications. Proficient in HTML, CSS, JavaScript, and
          React, with a focus on delivering high-quality user experiences.
        </Index.Typography>
        {readOpen
          ? readMoreData?.map((item) => {
              return (
                <>
                  <Index.Typography variant="span">{item}</Index.Typography>
                </>
              );
            })
          : null}
        <Index.Button
          variant="contained"
          className="read-more-button"
          onClick={() => setReadOpen(!readOpen)}
        >
          Read More
        </Index.Button>
      </Index.Box>
    </Index.Box>
  );
};

export default About;
