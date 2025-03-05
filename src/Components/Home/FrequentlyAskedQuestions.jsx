import React from "react";
import Wrapper from "../../assets/wrappers/FrequentlyAskedQuestions";
import { Typography } from "@mui/material";
import star from "../../assets/img/star.png";
import Grid from "@mui/material/Grid2";

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="star-container">
            <img src={star} alt="star" className="star-icon" />
            <Typography variant="h4" className="expertise-text">
              FrequentlyAskedQuestions
            </Typography>
          </div>
          {/* <Grid container spacing={2}>
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
          </Grid> */}
        </div>
      </Wrapper>
    </>
  );
};

export default FrequentlyAskedQuestions;
