import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import classes from './Autosolution.module.css';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Autosolution() {
  return (
    <div>
    <Box sx={{ width: '100%' }}>
    <div id={classes.autosoldiv}>    
    
    <h1 id={classes.autosoldivtitle}>SOLUTION FEATURES</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }} id={classes.autosolslidegrid}>
        <Grid item xs={6}>
          <Item className={classes.autosolgriditem}>
            <img className={classes.autosolgridimg} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-03/mobile.jpg?itok=My1Ri4cy' alt=''/>
            <h3 className={classes.autosolgridsubtitle}>FLEXIBLE MOBILITY</h3>
            <p className={classes.autosolgridp}>Go where the work is with mobile robots that can traverse ramps, bumps and cracks, and fit anywhere in the warehouse that a pallet can.</p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className={classes.autosolgriditem}>
            <img className={classes.autosolgridimg2} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-05/robust-intelligence.jpg?itok=5csFAWg_' alt=''/>
            <h3 className={classes.autosolgridsubtitle} id={classes.autosolgridsubtitle2}>ROBUST INTELLIGENCE</h3>
            <p className={classes.autosolgridp}id={classes.autosolgridp2}>Detect packages and container surroundings, and autonomously retrieve any boxes that may shift or fall in the unloading process.</p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className={classes.autosolgriditem}>
            <img className={classes.autosolgridimg} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-05/manipulation.jpg?itok=-c3SzPlI' alt=''/>
            <h3 className={classes.autosolgridsubtitle} id={classes.autosolgridsubtitle3}>ADAPTABLE MANIPULATION</h3>
            <p className={classes.autosolgridp} id={classes.autosolgridp3}>Take advantage of a custom-designed lightweight arm and a smart gripper with advanced sensing and controls to handle a variety of package types.</p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className={classes.autosolgriditem}>
            <img className={classes.autosolgridimg2} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-03/bounding-boxes.jpg?itok=1DQCVGwh' alt=''/>
            <h3 className={classes.autosolgridsubtitle} id={classes.subtauto}>ENHANCED PERCEPTION</h3>
            <p className={classes.autosolgridp}>Handle package variability in challenging environments with state-of-the-art vision systems. Detect single-SKU or mixed-SKU boxes in under a second.</p>
          </Item>
        </Grid>
      </Grid>

      <Button variant="outlined" id={classes.autorobotsbutton}>LEARN MORE ABOUT STRETCH</Button>
      </div>



      <div id={classes.autosoldivrespo}>    
    <div className={classes.bgsensing}>
    <h1 id={classes.autosoldivtitler}>SOLUTION FEATURES</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }} id={classes.autosolslidegridr}>
        <Grid item xs={12} className={classes.sensinggrid}>
          <Item className={classes.autosolgriditem}>
            <img className={classes.autosolgridimgr} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-03/mobile.jpg?itok=My1Ri4cy' alt=''/>
            <h3 className={classes.autosolgridsubtitle}>FLEXIBLE MOBILITY</h3>
            <p className={classes.autosolgridp}>Go where the work is with mobile robots that can traverse ramps, bumps and cracks, and fit anywhere in the warehouse that a pallet can.</p>
          </Item>
        </Grid>
        <Grid item xs={12} className={classes.sensinggrid}>
          <Item className={classes.autosolgriditem}>
            <img className={classes.autosolgridimg2r} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-05/robust-intelligence.jpg?itok=5csFAWg_' alt=''/>
            <h3 className={classes.autosolgridsubtitle} id={classes.autosolgridsubtitle2}>ROBUST INTELLIGENCE</h3>
            <p className={classes.autosolgridp}id={classes.autosolgridp2}>Detect packages and container surroundings, and autonomously retrieve any boxes that may shift or fall in the unloading process.</p>
          </Item>
        </Grid>
        <Grid item xs={12} className={classes.sensinggrid}>
          <Item className={classes.autosolgriditem}>
            <img className={classes.autosolgridimgr} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-05/manipulation.jpg?itok=-c3SzPlI' alt=''/>
            <h3 className={classes.autosolgridsubtitle} id={classes.autosolgridsubtitle3}>ADAPTABLE MANIPULATION</h3>
            <p className={classes.autosolgridp} id={classes.autosolgridp3}>Take advantage of a custom-designed lightweight arm and a smart gripper with advanced sensing and controls to handle a variety of package types.</p>
          </Item>
        </Grid>
        <Grid item xs={12} className={classes.sensinggrid}>
          <Item className={classes.autosolgriditem}>
            <img className={classes.autosolgridimg2r} src='https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-03/bounding-boxes.jpg?itok=1DQCVGwh' alt=''/>
            <h3 className={classes.autosolgridsubtitle} id={classes.subtauto}>ENHANCED PERCEPTION</h3>
            <p className={classes.autosolgridp}id={classes.autop4}>Handle package variability in challenging environments with state-of-the-art vision systems. Detect single-SKU or mixed-SKU boxes in under a second.</p>
          </Item>
        </Grid>
      </Grid>

      <Button variant="outlined" id={classes.autorobotsbutton}>LEARN MORE ABOUT STRETCH</Button>   

      </div>
    </div>
    </Box>
    </div>
  )
}

export default Autosolution