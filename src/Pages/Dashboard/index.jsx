import React, { useEffect } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    transition: "0.5s all",
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
    },
  },
  caption: {
    transition: "0.5s all",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    fontSize: 20,
    [theme.breakpoints.up("md")]: {
      fontSize: 22,
    },
  },
  description: {
    transition: "0.5s all",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    lineHeight: 1.2,
    fontSize: 34,
    [theme.breakpoints.up("md")]: {
      fontSize: 54,
    },
  },
  subTitle: {
    transition: "0.5s all",
    color: theme.palette.text.secondary,
    fontSize: 14,
    [theme.breakpoints.up("md")]: {
      fontSize: 17,
    },
  },
  slider: {
    height: "100%",
    "& .slick-list": {
      height: "100%",
      "& .slick-track": {
        height: "100%",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& div": {
        height: "100%",
      },
    },
  },
  sliderImage: {
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      height: 560,
    },
    height: 400,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function Dashboard() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const classes = useStyles();

  useEffect(() => {
    axios.get('/home')
      .then(res => {
        console.log(res, 'response')
      })
      .catch(er => console.log(er))
  })

  return (
    <>
      <div style={{ height: "100%" }}>
        <Slider {...settings} className={classes.slider}>
          <div>
            <Grid container>
              <Grid item sm={12} md={6} lg={6} xl={6}>
                <Container className={classes.leftContainer}>
                  <Typography className={classes.caption}>
                    Legal Services & IT Services
                  </Typography>
                  <Typography className={classes.description}>
                    Smart Living Style for smart people
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Much did had call new drew that kept. Limits expect wonder
                    law she. Now has you views woman noisy match money rooms.
                  </Typography>
                </Container>
              </Grid>
              <Grid item sm={12} md={6} lg={6} xl={6}>
                <div
                  className={classes.sliderImage}
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)`,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container>
              <Grid item sm={12} md={6} lg={6} xl={6}>
                <Container className={classes.leftContainer}>
                  <Typography className={classes.caption}>
                    Legal Services & IT Services
                  </Typography>
                  <Typography className={classes.description}>
                    Smart Living Style for smart people
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Much did had call new drew that kept. Limits expect wonder
                    law she. Now has you views woman noisy match money rooms.
                  </Typography>
                </Container>
              </Grid>
              <Grid item sm={12} md={6} lg={6} xl={6}>
                <div
                  className={classes.sliderImage}
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)`,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container>
              <Grid item sm={12} md={6} lg={6} xl={6}>
                <Container className={classes.leftContainer}>
                  <Typography className={classes.caption}>
                    Legal Services & IT Services
                  </Typography>
                  <Typography className={classes.description}>
                    Smart Living Style for smart people
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Much did had call new drew that kept. Limits expect wonder
                    law she. Now has you views woman noisy match money rooms.
                  </Typography>
                </Container>
              </Grid>
              <Grid item sm={12} md={6} lg={6} xl={6}>
                <div
                  className={classes.sliderImage}
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)`,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container>
              <Grid item sm={12} md={6} lg={6} xl={6}>
                <Container className={classes.leftContainer}>
                  <Typography className={classes.caption}>
                    Legal Services & IT Services
                  </Typography>
                  <Typography className={classes.description}>
                    Smart Living Style for smart people
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Much did had call new drew that kept. Limits expect wonder
                    law she. Now has you views woman noisy match money rooms.
                  </Typography>
                </Container>
              </Grid>
              <Grid item sm={12} md={6} lg={6} xl={6}>
                <div
                  className={classes.sliderImage}
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)`,
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Slider>
      </div>
    </>
  );
}
