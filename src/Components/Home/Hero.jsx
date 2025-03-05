import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import Wrapper from "../../assets/wrappers/Hero";
import person from "../../assets/img/person.png";
import location from "../../assets/img/location.png";
import doradesign from "../../assets/img/doradesign.png";
import wavefun from "../../assets/img/wavefun.png";
import silla from "../../assets/img/silla.png";
const Hero = () => {
  return (
    <Wrapper>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* Text Section */}
        <Grid item size={{ xs: 12, sm: 12, lg: 12, md: 12, xl: 12 }}>
          <div className="container">
            <Typography className="san">
              I AM A <img src={person} alt="person" className="rectangle" />{" "}
              FREELANCE
              <br />
              DESIGNER{" "}
              <img
                src={location}
                alt="location"
                className="rectangle"
              /> FROM <br />
              SAN FRANCISCO
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          size={{ xs: 12, sm: 12, lg: 8, md: 8, xl: 8 }}
          className="dora-container"
        >
          <img src={doradesign} alt="dora" className="doradesign" />
          <img src={wavefun} alt="dora" className="doradesign" />
          <img src={silla} alt="dora" className="doradesign" />
        </Grid>

        {/* Extra Text or Elements */}
        <Grid
          item
          size={{ xs: 12, sm: 12, lg: 4, md: 4, xl: 4 }}
          className="intro-container"
        >
          <Typography variant="subtitle1">
            Welcome to my portfolio.Here artistry meets functionality.Dive into
            the curated showcase of distinctive branding and web designs,each
            crafted to captivate and inspire.{" "}
          </Typography>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Hero;
