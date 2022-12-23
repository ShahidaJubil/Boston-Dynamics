import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import classes from "./Secondslide.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} id={classes.cards}>
        <h1 id={classes.cardh1}>UTILITIES CAPABILITIES</h1>
        <h3 id={classes.cardh3}>
          Add an array of sensors and software to customize Spot for your use
          cases.
        </h3>
        <Grid container spacing={0} id={classes.card}>
          <Grid item xs={5.3}>
            <Item id={classes.singlegrid}>
              <div className="post1" data-aos="fade-up" data-aos-duration="4s">
                <h1 id={classes.cardtitle}>Worker Safety</h1>
                <p id={classes.cardp}>
                  Safely inspect hazardous environments from a distance to
                  improve visibility and collect valuable data without putting
                  people in harm’s way. Spot goes in so your employees don’t
                  have to.
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6.7}>
            <Item id={classes.singlegrid}>
              <img
                id={classes.cardimg}
                src="https://www.bostondynamics.com/sites/default/files/2021-09/talen-energy-worker-safety.jpg"
                alt=""
              />
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={0} id={classes.card}>
          <Grid item xs={6}>
            <Item id={classes.singlegrid}>
              <img
                className={classes.cardimgenergy}
                src="https://www.bostondynamics.com/sites/default/files/2021-09/visual-inspection-national-grid.jpg"
                alt=""
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item id={classes.singlegrid}>
              <div className="post1" data-aos="fade-up" data-aos-duration="4s">
                <h1 id={classes.cardtitle}>Grid Resiliency</h1>
                <p id={classes.cardp}>
                  Automate remote monitoring tasks to detect anomalies early and
                  minimize unplanned downtime. Spot is your eyes and ears on the
                  ground for outage and emergency response.
                </p>
              </div>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={0} id={classes.card}>
          <Grid item xs={5.3}>
            <Item id={classes.singlegrid}>
              <div className="post1" data-aos="fade-up" data-aos-duration="4s">
                <h1 id={classes.cardtitle}>Digital Transformation</h1>
                <p id={classes.cardp}>
                  Conduct autonomous rounds and readings, perform remote
                  inspections, and create digital twins. Spot simplifies asset
                  condition monitoring and enables you to deliver value through
                  data.
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6.7}>
            <Item id={classes.singlegrid}>
              <img
                id={classes.cardimg}
                src="https://www.bostondynamics.com/sites/default/files/2021-09/digital-transformation-bp.jpg"
                alt=""
              />
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={0} id={classes.card}>
          <Grid item xs={6}>
            <Item id={classes.singlegrid}>
              <img
                className={classes.cardimgenergy}
                src="https://www.bostondynamics.com/sites/default/files/2021-09/talen-energy-transition.jpg"
                alt=""
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item id={classes.singlegrid}>
              <div className="post1" data-aos="fade-up" data-aos-duration="4s">
                <h1 id={classes.cardtitle}>Energy Transition</h1>
                <p id={classes.cardp}>
                  Deploy Spot to capture data on distributed energy resources
                  and inspect remote facilities like wind and solar farms, or
                  support decommissioning. Spot helps detect hazards before they
                  escalate.
                </p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <div className={classes.respocardbg}>
        <Box sx={{ flexGrow: 1 }} id={classes.cardsrespo}>
          <h1 id={classes.cardh1}>UTILITIES CAPABILITIES</h1>
          <h3 id={classes.cardh3}>
            Add an array of sensors and software to customize Spot for your use
            cases.
          </h3>

          <Grid container spacing={0} id={classes.card}>
            <Grid item xs={12}>
              <Item id={classes.singlegrid}>
                <div
                  className="post1"
                  data-aos="fade-up"
                  data-aos-duration="4s"
                >
                  <h1 id={classes.cardtitle}>Worker Safety</h1>
                  <p id={classes.cardp}>
                    Safely inspect hazardous environments from a distance to
                    improve visibility and collect valuable data without putting
                    people in harm’s way. Spot goes in so your employees don’t
                    have to.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item id={classes.singlegrid}>
                <img
                  id={classes.cardimg}
                  src="https://www.bostondynamics.com/sites/default/files/2021-09/talen-energy-worker-safety.jpg"
                  alt=""
                />
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={0} id={classes.card}>
            <Grid item xs={12}>
              <Item id={classes.singlegrid}>
                <div
                  className="post1"
                  data-aos="fade-up"
                  data-aos-duration="4s"
                >
                  <h1 id={classes.cardtitle}>Grid Resiliency</h1>
                  <p id={classes.cardp}>
                    Automate remote monitoring tasks to detect anomalies early
                    and minimize unplanned downtime. Spot is your eyes and ears
                    on the ground for outage and emergency response.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item id={classes.singlegrid}>
                <img
                  className={classes.cardimgenergy}
                  src="https://www.bostondynamics.com/sites/default/files/2021-09/visual-inspection-national-grid.jpg"
                  alt=""
                />
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={0} id={classes.card}>
            <Grid item xs={12}>
              <Item id={classes.singlegrid}>
                <div
                  className="post1"
                  data-aos="fade-up"
                  data-aos-duration="4s"
                >
                  <h1 id={classes.cardtitle}>Digital Transformation</h1>
                  <p id={classes.cardp}>
                    Conduct autonomous rounds and readings, perform remote
                    inspections, and create digital twins. Spot simplifies asset
                    condition monitoring and enables you to deliver value
                    through data.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item id={classes.singlegrid}>
                <img
                  id={classes.cardimg}
                  src="https://www.bostondynamics.com/sites/default/files/2021-09/digital-transformation-bp.jpg"
                  alt=""
                />
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={0} id={classes.card}>
            <Grid item xs={12}>
              <Item id={classes.singlegrid}>
                <div
                  className="post1"
                  data-aos="fade-up"
                  data-aos-duration="4s"
                >
                  <h1 id={classes.cardtitle}>Energy Transition</h1>
                  <p id={classes.cardp}>
                    Deploy Spot to capture data on distributed energy resources
                    and inspect remote facilities like wind and solar farms, or
                    support decommissioning. Spot helps detect hazards before
                    they escalate.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item id={classes.singlegrid}>
                <img
                  className={classes.cardimgenergy}
                  src="https://www.bostondynamics.com/sites/default/files/2021-09/talen-energy-transition.jpg"
                  alt=""
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div id={classes.div4}>
        <div className="post1" data-aos="fade-up" data-aos-duration="4s">
          <h1 id={classes.div4title}>MEET OUR CUSTOMERS</h1>
        </div>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Item id={classes.div4grid}>
              <div className="post1" data-aos="fade-up" data-aos-duration="4s">
                <img
                  id={classes.div4img1}
                  src="https://www.bostondynamics.com/sites/default/files/2021-02/customer-logo-nb-power.jpg"
                  alt=""
                />
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item id={classes.div4grid}>
              <div className="post1" data-aos="fade-up" data-aos-duration="4s">
                <img
                  id={classes.div4img2}
                  src="https://www.bostondynamics.com/sites/default/files/2021-06/talen_mainlogo_reduced_resolution.png"
                  alt=""
                />
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item id={classes.div4grid}>
              <div className="post1" data-aos="fade-up" data-aos-duration="4s">
                <img
                  id={classes.div4img3}
                  src="https://www.bostondynamics.com/sites/default/files/2021-02/customer-logo-national-grid.jpg"
                  alt=""
                />
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
