import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import classes from './Fourthslide.module.css';
import Button from '@mui/material/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  useEffect(() =>{
    Aos.init({});
},[]);
  return (
    <div>
        
    <Box sx={{ width: '100%' }}>
    <div id={classes.fourthdiv}>    
    
    <h1 id={classes.fourthdivtitle}>A SENSING SOLUTION FOR UTILITIES</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }} id={classes.fourthslidegrid}>
        <Grid item xs={6}>
          <Item className={classes.fourthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid4img} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/inspection-solution-01_0.jpg?itok=NCO1fIfe' alt=''/>
            <h3 className={classes.grid4subtitle}>UNMATCHED MOBILITY</h3>
            <p className={classes.grid4p}>Autonomously navigate diverse terrains with unprecedented mobility to gain visibility in remote or hazardous environments.</p>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className={classes.fourthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid4img2} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/inspection-solution-02_0.jpg?itok=yRZm-q5X' alt=''/>
            <h3 className={classes.grid4subtitle} id={classes.grid4subtitle2}>SELF-CHARGING DESIGN</h3>
            <p className={classes.grid4p}id={classes.grid4p2}>Operate in remote facilities for extended periods of time and perform lengthy inspection missions with autonomous self-charging capabilities.</p>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className={classes.fourthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid4img} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/inspection-solution-03.png?itok=4Ws2yu06' alt=''/>
            <h3 className={classes.grid4subtitle}>FLEXIBLE AUTONOMY</h3>
            <p className={classes.grid4p} id={classes.grid4p3}>Program repeatable autonomous missions, executed on a predetermined schedule or with the push of a button, to gather consistent data on a regular basis.</p>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className={classes.fourthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid4img2} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/inspection-solution-04_0.jpg?itok=wouyb0MR' alt=''/>
            <h3 className={classes.grid4subtitle} id={classes.subt4}>TELEOPERATIONS</h3>
            <p className={classes.grid4p}id={classes.grid4p4}>Use intuitive web-based control software to remotely follow along on Spot’s missions, teleoperate the robot, and review data in real-time.</p>
          </div>  
          </Item>
        </Grid>
      </Grid>

      <Button variant="outlined" id={classes.robotsbutton}>LEARN MORE ABOUT AGILE MOBILE ROBOTS</Button>
      </div>


      <div id={classes.fourthdivrespo}>    
    <div className={classes.bgsensing}>
    <h1 id={classes.fourthdivtitler}>A SENSING SOLUTION FOR UTILITIES</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }} id={classes.fourthslidegridr}>
        <Grid item xs={12} >
          <Item className={classes.fourthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid4imgr} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/inspection-solution-01_0.jpg?itok=NCO1fIfe' alt=''/>
            <h3 className={classes.grid4subtitle}>UNMATCHED MOBILITY</h3>
            <p className={classes.grid4p}>Autonomously navigate diverse terrains with unprecedented mobility to gain visibility in remote or hazardous environments.</p>
          </div>
          </Item>
        </Grid>
        <Grid item xs={12} className={classes.sensinggrid}>
          <Item className={classes.fourthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid4img2r} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/inspection-solution-02_0.jpg?itok=yRZm-q5X' alt=''/>
            <h3 className={classes.grid4subtitle} id={classes.grid4subtitle2}>SELF-CHARGING DESIGN</h3>
            <p className={classes.grid4p}id={classes.grid4p2}>Operate in remote facilities for extended periods of time and perform lengthy inspection missions with autonomous self-charging capabilities.</p>
          </div>
          </Item>
        </Grid>
        <Grid item xs={12} className={classes.sensinggrid}>
          <Item className={classes.fourthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid4imgr} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/inspection-solution-03.png?itok=4Ws2yu06' alt=''/>
            <h3 className={classes.grid4subtitle}>FLEXIBLE AUTONOMY</h3>
            <p className={classes.grid4p} id={classes.grid4p3}>Program repeatable autonomous missions, executed on a predetermined schedule or with the push of a button, to gather consistent data on a regular basis.</p>
          </div>
          </Item>
        </Grid>
        <Grid item xs={12} className={classes.sensinggrid}>
          <Item className={classes.fourthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid4img2r} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2021-09/inspection-solution-04_0.jpg?itok=wouyb0MR' alt=''/>
            <h3 className={classes.grid4subtitle} id={classes.subt4}>TELEOPERATIONS</h3>
            <p className={classes.grid4p}id={classes.grid4p4}>Use intuitive web-based control software to remotely follow along on Spot’s missions, teleoperate the robot, and review data in real-time.</p>
          </div>  
          </Item>
        </Grid>
      </Grid>

      <Button variant="outlined" id={classes.robotsbutton}>LEARN MORE ABOUT AGILE MOBILE ROBOTS</Button>
      </div>
      </div>
    </Box>


<div className={classes.slidesupport}>
    <img id={classes.linebg} src='	https://www.bostondynamics.com/themes/custom/isovera/images/fading-grid-background-top.png' alt=''/>
    <h1 id={classes.fifthdivtitle}>SOLUTION SUPPORT</h1>
     
      <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} id={classes.fourthslidegrid}>
        <Grid item xs={4}>
          <Item className={classes.fifthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid5img} src='https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-02/bd-icons-training.png?itok=kt3Au1cv' alt=''/>
          </div>
            <h3 className={classes.grid5subtitle}>HANDS-ON TRAINING</h3>
            <p className={classes.grid5p}>Our field applications engineers help you run successful inspection missions from day one.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={classes.fifthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid5img} src='https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-02/bd-icons-warranty.png?itok=FMVVQ1sX' alt=''/>
          </div>
            <h3 className={classes.grid5subtitle}>EXTENDED WARRANTY</h3>
            <p className={classes.grid5p}>Spot CARE extended warranty provides expedited repair services, VIP support, and free hardware reliability upgrades.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={classes.fifthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid5img} src='https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-02/bd-icons-ecosystem.png?itok=iSGiPBMJ' alt=''/>
          </div>
            <h3 className={classes.grid5subtitle}>EXTENSIVE ECOSYSTEM</h3>
            <p className={classes.grid5p}>Existing network of third-party software and hardware providers makes it possible to utilize pre-built solutions to extend Spot’s capabilities.</p>
          </Item>
        </Grid>
        </Grid>
        <img id={classes.bgpic} src='	https://www.bostondynamics.com/themes/custom/isovera/images/fading-grid-background-bottom.png' alt=''/>
    </div>


    <div className={classes.slidesupportrespo}>

    <img id={classes.linebgr} src='		https://www.bostondynamics.com/themes/custom/isovera/images/fading-grid-background-top.png' alt=''/>
    <h1 id={classes.fifthdivtitle}>SOLUTION SUPPORT</h1>
     
      <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }} id={classes.fourthslidegrid}>
        <Grid item xs={12}>
          <Item className={classes.fifthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid5img} src='https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-02/bd-icons-training.png?itok=kt3Au1cv' alt=''/>
          </div>
            <h3 className={classes.grid5subtitle}>HANDS-ON TRAINING</h3>
            <p className={classes.grid5p}>Our field applications engineers help you run successful inspection missions from day one.</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item className={classes.fifthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid5img} src='https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-02/bd-icons-warranty.png?itok=FMVVQ1sX' alt=''/>
          </div>
            <h3 className={classes.grid5subtitle}>EXTENDED WARRANTY</h3>
            <p className={classes.grid5p}>Spot CARE extended warranty provides expedited repair services, VIP support, and free hardware reliability upgrades.</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item className={classes.fifthgriditem}>
          <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <img className={classes.grid5img} src='https://www.bostondynamics.com/sites/default/files/styles/thumbnail/public/2021-02/bd-icons-ecosystem.png?itok=iSGiPBMJ' alt=''/>
          </div>
            <h3 className={classes.grid5subtitle}>EXTENSIVE ECOSYSTEM</h3>
            <p className={classes.grid5p}>Existing network of third-party software and hardware providers makes it possible to utilize pre-built solutions to extend Spot’s capabilities.</p>
          </Item>
        </Grid>
        </Grid>
        <img id={classes.bgpic} src='	https://www.bostondynamics.com/themes/custom/isovera/images/fading-grid-background-bottom.png' alt=''/>
    </div>



    </div>
  );
}
