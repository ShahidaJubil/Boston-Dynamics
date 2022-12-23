import React from "react";
import classes from "./Firstslide.module.css";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Aos from "aos";
import "aos/dist/aos.css";

function Firstslide() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <div className={classes.normal}>
        <div
          class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
          data-src="	https://www.bostondynamics.com/sites/default/files/2021-06/utilities-banner-2.jpg"
          uk-img="loading: eager"
          id={classes.slide1img}
        >
          <div id={classes.slide1div}>
            <div className="post1" data-aos="fade-up" data-aos-duration="4s">
              <h1 id={classes.slide1h1}>Spot for Power & Utilities</h1>
              <img
                src="	data:image/svg+xml;charset=utf8,%3Csvg xmlns='http…' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E"
                alt=""
              />
              <p id={classes.slide1p}>
                Automate sensing, inspection, and data capture in power
                generation, transmission and distribution facilities.
              </p>
              <Button variant="outlined" id={classes.slide1button}>
                CONTACT SALES
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.responsive}>
        <img
          src="https://www.bostondynamics.com/sites/default/files/2021-06/utilities-banner-mobile.jpg"
          alt=""
          id={classes.f}
        />
        <div id={classes.slide1div}>
          <div className="post1" data-aos="fade-up" data-aos-duration="4s">
            <h1 id={classes.slide1h1r}>Spot for Power & Utilities</h1>
            <img
              src="	data:image/svg+xml;charset=utf8,%3Csvg xmlns='http…' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E"
              alt=""
            />
            <p id={classes.slide1pr}>
              Automate sensing, inspection, and data capture in power
              generation, transmission and distribution facilities.
            </p>
            <Button variant="outlined" id={classes.slide1buttonr}>
              CONTACT SALES
            </Button>
          </div>
        </div>
      </div>

      <div id={classes.bluediv}>
        <p id={classes.bluedivp}>
          Watch our on-demand panel discussion - Spot in Energy & Natural
          Resources
        </p>
        <Button variant="outlined" id={classes.slide1button2}>
          WATCH NOW
        </Button>
      </div>

      <div id={classes.slide2div}>
        <img
          id={classes.slide2bg}
          src="	https://www.bostondynamics.com/sites/default/files/2021-06/video-feature-bg-min_1.png"
          alt=""
        />
        <h1 id={classes.slide2h1}>CAPTURE DIVERSE, HIGH-QUALITY DATA</h1>
        <PlayCircleIcon id={classes.play} />
        <p id={classes.slide2p}>
          Spot is an agile mobile robot that helps capture site data remotely,
          provide visibility in hazardous environments, build digital twins, and
          improve operational efficiency and safety.
        </p>
        <a href="/">
          <img
            id={classes.slide2img}
            src="	https://www.bostondynamics.com/sites/default/files/styles/video_feature_image/public/2021-06/national-grid_boston_dynamics-video.jpg?itok=UawMivMU"
            alt=""
          />
        </a>
        <a href="/" id={classes.slide2link}>
          Watch Now
        </a>
      </div>
    </div>
  );
}

export default Firstslide;
