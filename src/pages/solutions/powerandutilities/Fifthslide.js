import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import classes from "./Fifthslide.module.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MultiActionAreaCard() {
  return (
    <div>
      <div className={classes.carddiv}>
        <h1 className={classes.resourcetitle}>RESOURCES</h1>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          <Grid item xs={6}>
            <Item className={classes.grid6item}>
              <Card sx={{ maxWidth: 530 }} className={classes.resourcecard1}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/industrial-inspection-ebook_1.jpg?itok=7sH8qS8v"
                  alt="green iguana"
                />
                <div className={classes.cardcontent}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="#a7a7a7"
                      textAlign="left"
                      id={classes.card6sub}
                    >
                      EBOOK
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#00355A"
                      textAlign="left"
                      id={classes.card6title}
                    >
                      YOUR GUIDE TO AUTOMATING INDUSTRIAL INSPECTION
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#00355A"
                      textAlign="left"
                      id={classes.card6p}
                    >
                      Discover how agile mobile robots are performing tedious
                      and hazardous work and uncover how agile mobile robots
                      succeed where other automation alternatives fail.
                    </Typography>
                  </CardContent>

                  <Button size="small" color="primary" id={classes.ebookbutton}>
                    DOWNLOAD NOW <span uk-icon="chevron-right"></span>
                  </Button>
                </div>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item className={classes.grid6item}>
              <Card sx={{ maxWidth: 530 }} className={classes.resourcecard}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/spot-the-dog-calder-turbine-hall-trials-10-08-21-1200_0.jpg?itok=7OUKp4D_"
                  alt="green iguana"
                />
                <div className={classes.cardcontent}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="#a7a7a7"
                      textAlign="left"
                      id={classes.card6sub}
                    >
                      BLOG POST
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#00355A"
                      textAlign="left"
                      id={classes.card6title}
                    >
                      HOW TO GATHER BETTER DATA AND REDUCE DOSAGE IN NUCLEAR
                      FACILITIES
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#00355A"
                      textAlign="left"
                      id={classes.card6p}
                    >
                      Spot, an agile mobile robot, helps the nuclear power
                      industry perform inspection tasks in radiation zones that
                      are unsafe for humans.
                    </Typography>
                  </CardContent>

                  <Button
                    size="small"
                    color="primary"
                    className={classes.blogbutton}
                  >
                    READ NOW <span uk-icon="chevron-right"></span>
                  </Button>
                </div>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </div>

      <div className={classes.carddivrespo}>
        <h1 className={classes.resourcetitle}>RESOURCES</h1>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          <Grid item xs={12}>
            <Item className={classes.grid6item}>
              <Card sx={{ maxWidth: 930 }} className={classes.resourcecard1}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/industrial-inspection-ebook_1.jpg?itok=7sH8qS8v"
                  alt="green iguana"
                />
                <div className={classes.cardcontent}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="#a7a7a7"
                      textAlign="left"
                      id={classes.card6sub}
                    >
                      EBOOK
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#00355A"
                      textAlign="left"
                      id={classes.card6title}
                    >
                      YOUR GUIDE TO AUTOMATING INDUSTRIAL INSPECTION
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#00355A"
                      textAlign="left"
                      id={classes.card6p}
                    >
                      Discover how agile mobile robots are performing tedious
                      and hazardous work and uncover how agile mobile robots
                      succeed where other automation alternatives fail.
                    </Typography>
                  </CardContent>

                  <Button size="small" color="primary" id={classes.ebookbutton}>
                    DOWNLOAD NOW <span uk-icon="chevron-right"></span>
                  </Button>
                </div>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item className={classes.grid6item}>
              <Card sx={{ maxWidth: 530 }} className={classes.resourcecard}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/spot-the-dog-calder-turbine-hall-trials-10-08-21-1200_0.jpg?itok=7OUKp4D_"
                  alt="green iguana"
                />
                <div className={classes.cardcontent}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="#a7a7a7"
                      textAlign="left"
                      id={classes.card6sub}
                    >
                      BLOG POST
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="#00355A"
                      textAlign="left"
                      id={classes.card6title}
                    >
                      HOW TO GATHER BETTER DATA AND REDUCE DOSAGE IN NUCLEAR
                      FACILITIES
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#00355A"
                      textAlign="left"
                      id={classes.card6p}
                    >
                      Spot, an agile mobile robot, helps the nuclear power
                      industry perform inspection tasks in radiation zones that
                      are unsafe for humans.
                    </Typography>
                  </CardContent>

                  <Button
                    size="small"
                    color="primary"
                    className={classes.blogbutton}
                  >
                    READ NOW <span uk-icon="chevron-right"></span>
                  </Button>
                </div>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
