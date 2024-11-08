import React from "react";
import Index from "../../../componets/Index";

const Contact = () => {
  return (
    <Index.Box className="homepage-main">
      <Index.Box className="contact-container">
        <Index.Box>
          <Index.Typography variant="h5" className="contact-heading-box">
            Contact <span className="service-heading-text">Me</span>
          </Index.Typography>
        </Index.Box>
        <Index.Box className="contact-page-textfield-box">
          <Index.Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Index.Grid item xs={6}>
              <Index.TextField
                placeholder="Full Name"
                size="small"
                className="contact-textfield"
              />
            </Index.Grid>
            <Index.Grid item xs={6}>
              <Index.TextField
                placeholder="Email Address"
                size="small"
                className="contact-textfield"
              />
            </Index.Grid>
            <Index.Grid item xs={6}>
              <Index.TextField
                placeholder="Mobile Number"
                size="small"
                className="contact-textfield"
              />
            </Index.Grid>
            <Index.Grid item xs={6}>
              <Index.TextField
                placeholder="Email Subject"
                size="small"
                className="contact-textfield"
              />
            </Index.Grid>
            <Index.Grid item xs={12} md={12} lg={12} xl={12}>
              <Index.TextField
                className="contact-textfield"
                placeholder="Your Message"
                multiline
                rows={2}
                maxRows={4}
              />
            </Index.Grid>
            <Index.Grid item xs={12}>
              <Index.Button variant="contained"  fullWidth className="read-more-button">Send Message</Index.Button>
            </Index.Grid>
          </Index.Grid>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};

export default Contact;
