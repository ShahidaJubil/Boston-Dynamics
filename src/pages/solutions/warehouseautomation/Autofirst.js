import React from 'react';
import classes from './Autofirst.module.css';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Autofirst() {
  useEffect(() =>{
    Aos.init({});
},[]);
  return (
    
    <div>
      <div className={classes.normal}>
      <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="		https://www.bostondynamics.com/sites/default/files/2022-05/warehouse-solution-v2.jpg" uk-img="loading: eager" id={classes.auto1img}>
        <div id={classes.auto1div} >
        <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <h1 id={classes.auto1h1}>Solutions for Warehouse Automation</h1>
            <img src="	data:image/svg+xml;charset=utf8,%3Csvg xmlns='http…' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E" alt=''/>
            <p id={classes.auto1p}>Automate warehouse operations with fast, versatile robotic solutions.</p>
            <Button variant="outlined" id={classes.auto1button}>CONTACT SALES</Button>
            </div>
         </div>
         </div>
      </div>
      <div className={classes.responsive}>
      < img 		src='https://www.bostondynamics.com/sites/default/files/2022-05/warehouse-solution-v2.jpg' alt='' id={classes.auto1imgr}/>
        <div id={classes.auto1divr} >
        <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
            <h1 id={classes.auto1h1r}>Solutions for Warehouse Automation</h1>
            <img src="	data:image/svg+xml;charset=utf8,%3Csvg xmlns='http…' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E" alt=''/>
            <p id={classes.auto1pr}>Automate warehouse operations with fast, versatile robotic solutions.</p>
            <Button variant="outlined" id={classes.auto1buttonr}>CONTACT SALES</Button>
            </div>
         
         </div>
      </div>
     
      <div id={classes.auto2div}>

               
                    <img id={classes.auto2bg} src='	https://www.bostondynamics.com/sites/default/files/2021-06/video-feature-bg-min_1.png' alt=''/>
                    <h1 id={classes.auto2h1}>FLEXIBLE WAREHOUSE ROBOTICS</h1> <PlayCircleIcon id={classes.play}/>
                    <p id={classes.auto2p}>Enable flexible case handling, improve worker safety, and increase productivity. Deploy automation solutions with advanced mobility, 
                    perception, and manipulation.</p>
                    <a href='/'><img id={classes.auto2img} src='	https://www.bostondynamics.com/sites/default/files/styles/video_feature_image/public/2022-05/stretch-with-wall-removed.jpg?itok=E86S_Xm3' alt=''/>
                   
                    </a>
                    <a href='/' id={classes.auto2link}>A CLOSER LOOK AT STRECH</a>
      </div>
    

    
    </div>
  )
}


export default Autofirst