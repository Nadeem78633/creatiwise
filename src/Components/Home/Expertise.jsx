import React from "react";
import Wrapper from "../../assets/wrappers/Expertise";
import { Typography } from "@mui/material";
import star from "../../assets/img/star.png";
import Grid from "@mui/material/Grid2";
import SquareIcon from "@mui/icons-material/Square";
const Expertise = () => {
  const data = [
    {
      icon: <SquareIcon style={{ height: "10px", width: "10px" }} />,
      heading: "Branding",
      text: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      icon: <SquareIcon style={{ height: "10px", width: "10px" }} />,
      heading: "UI Design",
      text: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      icon: <SquareIcon style={{ height: "10px", width: "10px" }} />,
      heading: "UX Design",
      text: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      icon: <SquareIcon style={{ height: "10px", width: "10px" }} />,
      heading: "Development",
      text: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
  ];

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="star-container">
            <img src={star} alt="star" className="star-icon" />
            <Typography variant="h4" className="expertise-text">
              Expertise
            </Typography>
          </div>
          <Grid container spacing={2}>
            {data.map((d) => (
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}
                key={d.heading}
              >
                <div className="star-container">
                  <Typography variant="h6">
                    {d.icon} {d.heading}
                  </Typography>
                </div>
                <Typography>{d.text}</Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      </Wrapper>
    </>
  );
};

export default Expertise;
