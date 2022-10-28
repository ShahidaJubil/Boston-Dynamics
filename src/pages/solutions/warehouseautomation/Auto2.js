import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from './Auto2.module.css';
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


function Auto2() {
    useEffect(() =>{
        Aos.init({});
    },[]);
  return (
    <div>
              

    <Box sx={{ flexGrow: 1 }} id={classes.autocards}>
    <h1 id={classes.autocardh1}>WAREHOUSE AUTOMATION CAPABILITIES</h1>
      <h3 id={classes.autocardh3}>Automate your inbound warehouse operations with intelligent robots.</h3>
      <Grid container spacing={0} id={classes.autocard}>
        <Grid item xs={5.6} >
          <Item id={classes.singlegrid}>
          <h1 id={classes.autocardtitle}>Truck Unload</h1>
          <p id={classes.autocardp}>Autonomously unload inbound trucks and shipping containers. Stretch™ quickly identifies cases and places them on a conveyor, moving up to 800 cases per hour. Its mobile base and long 
          reach allow it to work through the full container with ease.</p>
          </Item>
        </Grid>
        <Grid item xs={6.4}>
          <Item id={classes.singlegrid}>
            <img id={classes.autocardimg}  src='https://www.bostondynamics.com/sites/default/files/2022-06/wa_unload.png' alt=''/>
          </Item>
        </Grid>
       
      </Grid>

      <Grid container spacing={0} id={classes.autocard}>
       
        <Grid item xs={6}>
          <Item id={classes.singlegrid}>
            <img className={classes.autocardimgenergy} src='https://www.bostondynamics.com/sites/default/files/2022-06/wa_depal.png' alt=''/>
          </Item>
        </Grid>
        <Grid item xs={6} >
          <Item id={classes.singlegrid}>
          <h1 id={classes.autocardtitle}>Depalletizing</h1>
          <p id={classes.autocardp}>Mobile, complex depalletizing with intelligent machine learning computer vision. Quickly depalletize and singulate cases, cartons,
           and trays from single, rainbow, and mixed-SKU pallets.</p>
          </Item>
        </Grid>
      </Grid>


      <Grid container spacing={0} id={classes.autocard}>
        <Grid item xs={5.6} >
          <Item id={classes.singlegrid}>
          <h1 id={classes.autocardtitle}>Order Building</h1>
          <p id={classes.autocardp}>Build up pallet orders for retailers and e-commerce fulfillment centers. With a small, mobile base, Stretch navigates warehouse aisles to build single and multi-SKU pallets. Pack cases tightly 
          and carefully with Stretch’s contact detection and force control capabilities.</p>
          </Item>
        </Grid>
        <Grid item xs={6.4}>
          <Item id={classes.singlegrid}>
            <img id={classes.autocardimg}  src='https://www.bostondynamics.com/sites/default/files/2022-06/wa_order-build.png' alt=''/>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={0} id={classes.autocard}>
       
        <Grid item xs={6}>
          <Item id={classes.singlegrid}>
            <img  className={classes.autocardimgenergy} src='https://www.bostondynamics.com/sites/default/files/2021-09/talen-energy-transition.jpg' alt=''/>
          </Item>
        </Grid>
        <Grid item xs={6} >
          <Item id={classes.singlegrid}>
          <h1 id={classes.autocardtitle}>Energy Transition</h1>
          <p id={classes.autocardp}>Deploy Spot to capture data on distributed energy resources and inspect remote facilities like wind and solar farms, or support decommissioning. 
            Spot helps detect hazards before they escalate.</p>
          </Item>
        </Grid>
      </Grid>

    </Box>


<div className={classes.respocardbg}>
    <Box sx={{ flexGrow: 1 }} id={classes.autocardsrespo}>
    <h1 id={classes.autocardh1}>WAREHOUSE AUTOMATION CAPABILITIES</h1>
      <h3 id={classes.autocardh3}>Automate your inbound warehouse operations with intelligent robots.</h3>
      <Grid container spacing={0} id={classes.autocard}>
        <Grid item xs={12} >
          <Item id={classes.singlegrid}>
          <h1 id={classes.autocardtitle}>Truck Unload</h1>
          <p id={classes.autocardp}>Autonomously unload inbound trucks and shipping containers. Stretch™ quickly identifies cases and places them on a conveyor, moving up to 800 cases per hour. Its mobile base and long 
          reach allow it to work through the full container with ease.</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item id={classes.singlegrid}>
            <img id={classes.autocardimg}  src='https://www.bostondynamics.com/sites/default/files/2022-06/wa_unload.png' alt=''/>
          </Item>
        </Grid>
       
      </Grid>

      <Grid container spacing={0} id={classes.autocard}>
       
        
        <Grid item xs={12} >
          <Item id={classes.singlegrid}>
          <h1 id={classes.autocardtitle}>Depalletizing</h1>
          <p id={classes.autocardp}>Mobile, complex depalletizing with intelligent machine learning computer vision. Quickly depalletize and singulate cases, cartons,
           and trays from single, rainbow, and mixed-SKU pallets.</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item id={classes.singlegrid}>
            <img className={classes.autocardimgenergy} src='https://www.bostondynamics.com/sites/default/files/2022-06/wa_depal.png' alt=''/>
          </Item>
        </Grid>
      </Grid>


      <Grid container spacing={0} id={classes.autocard}>
        <Grid item xs={12} >
          <Item id={classes.singlegrid}>
          <h1 id={classes.autocardtitle}>Order Building</h1>
          <p id={classes.autocardp}>Build up pallet orders for retailers and e-commerce fulfillment centers. With a small, mobile base, Stretch navigates warehouse aisles to build single and multi-SKU pallets. Pack cases tightly 
          and carefully with Stretch’s contact detection and force control capabilities.</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item id={classes.singlegrid}>
            <img id={classes.autocardimg}  src='https://www.bostondynamics.com/sites/default/files/2022-06/wa_order-build.png' alt=''/>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={0} id={classes.autocard}>
       
        
        <Grid item xs={12} >
          <Item id={classes.singlegrid}>
          <h1 id={classes.autocardtitle}>Energy Transition</h1>
          <p id={classes.autocardp}>Deploy Spot to capture data on distributed energy resources and inspect remote facilities like wind and solar farms, or support decommissioning. 
            Spot helps detect hazards before they escalate.</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item id={classes.singlegrid}>
            <img  className={classes.autocardimgenergy} src='https://www.bostondynamics.com/sites/default/files/2021-09/talen-energy-transition.jpg' alt=''/>
          </Item>
        </Grid>
      </Grid>

    </Box>
</div>

    </div>
  )
}

export default Auto2