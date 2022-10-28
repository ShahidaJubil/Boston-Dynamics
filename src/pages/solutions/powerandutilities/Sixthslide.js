import React from 'react';
import classes from './Sixthslide.module.css';
import { Button } from '@mui/material';

function Sixthdiv() {
  return (
    <div>
        <div className={classes.div6}>

            <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                <h1 id={classes.slide6head}>LEARN HOW SPOT CAN ADD VALUE TO YOUR OPERATIONS.</h1>
                <Button variant="outlined" id={classes.slide6but}>CONTACT SALES</Button>
            </div>

        </div>
        <div className={classes.div6respo}>

            <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                <h1 id={classes.slide6head}>LEARN HOW SPOT CAN ADD VALUE TO YOUR OPERATIONS.</h1>
                <Button variant="outlined" id={classes.slide6but}>CONTACT SALES</Button>
            </div>

        </div>


        
    </div>
  )
}

export default Sixthdiv