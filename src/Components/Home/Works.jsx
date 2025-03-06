import React from "react";
import Wrapper from "../../assets/wrappers/Works";
import { button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import star from "../../assets/img/star.png";
import Grid from "@mui/material/Grid2";
import zenocide from "../../assets/img/zenocide.png";
import fortnox from "../../assets/img/fortnox.png";
import analysis from "../../assets/img/analysis.png";

const Works = () => {
  const cardData = [
    {
      id: 1,
      img: analysis,
      title: "Analysis Application",
      description:
        "With user centered-approach the goals was to create an intuitive interface for enhanced financial intelligence.",
      button1: "FIGMA",
      button2: "UX",
      case: "View Case Study",
    },
    {
      id: 2,
      img: fortnox,
      title: "Fortknox Application",
      description:
        "With user centered-approach the goals was to create an intuitive interface for enhanced financial intelligence.",
      button1: "MOBILE ",
      button2: "WEB",
      case: "View Case Study",
    },
    {
      id: 3,
      img: zenocide,
      title: "Zenocide Application",
      description:
        "With user centered-approach the goals was to create an intuitive interface for enhanced financial intelligence.",
      button1: "APP",
      button2: "WEB",
      case: "View Case Study",
    },
  ];
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="star-container">
            <img src={star} alt="star" className="star-icon" />
            <Typography variant="h4" className="expertise-text">
              Works
            </Typography>
          </div>
          {cardData.map((data) => (
            <Card className="card">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                    <CardMedia
                      component="img"
                      image={data.img}
                      alt="Paella dish"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                    <div className="ds-container">
                      <Typography className="title">{data.title}</Typography>
                      <Typography className="description">
                        {data.description}
                      </Typography>
                      <div className="button-container">
                        <button className="button">{data.button1}</button>
                        <button className="button">{data.button2}</button>
                      </div>
                      <button className="study">{data.case}</button>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Works;
