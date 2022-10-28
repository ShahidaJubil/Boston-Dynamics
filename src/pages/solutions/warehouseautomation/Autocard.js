import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import classes from './Autocard.module.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Autocard() {
  return (
    <div>
    <div>
<div className={classes.carddiv}>
<h1 className={classes.resourcetitle}>RESOURCES</h1>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
       
    <Grid item xs={6}>
    <Item className={classes.grid6item}>
            <Card sx={{ maxWidth: 530 }}  className={classes.resourcecard1} >
           
                <CardMedia
                component="img"
                height="140"
                image="https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-03/unblock-supply-chain.jpg?itok=bahb31wE"
                alt="green iguana"
                />
                 <div className={classes.cardcontent}>
                <CardContent>
                <Typography gutterBottom variant="h6" component="div" color="#a7a7a7" textAlign="left" id={classes.card6sub}>
                BLOG POST
                </Typography>
                
                <Typography gutterBottom variant="h5" component="div" color="#00355A" textAlign="left"  id={classes.card6title}>
                BREAK THROUGH SUPPLY CHAIN BLOCKS WITH AUTOMATED CONTAINER UNLOADING
                </Typography>
                <Typography variant="body2" color="#00355A" textAlign="left"  id={classes.card6p}>
                Automated container unloading helps alleviate supply chain bottlenecks and create safer
                    working conditions.
                </Typography>
                
                </CardContent>
           
            
            
                <Button size="small" color="primary" id={classes.ebookbutton}>
                LEARN MORE  <span uk-icon="chevron-right"></span>
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
                image="https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-05/3-takeaways-modex22.jpg?itok=qFMokvY0"
                alt="green iguana"
                />
                <div className={classes.cardcontent}>
                <CardContent >
                    
                <Typography gutterBottom variant="h6" component="div" color="#a7a7a7" textAlign="left"  id={classes.card6sub}>
                BLOG POST
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color="#00355A" textAlign="left"  id={classes.card6title}>
                3 TAKEAWAYS AFTER DEBUTING STRETCH AT MODEX 2022
                </Typography>
                <Typography variant="body2" color="#00355A" textAlign="left"  id={classes.card6p}>
                After launching our warehouse robot Stretch at MODEX 2022, we heard from warehouse and materials handling professionals with a few consistent themes.
                </Typography>
               
                </CardContent>
               
         
                <Button size="small" color="primary"  className={classes.blogbutton}>
                READ MORE  <span uk-icon="chevron-right"></span>
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
            <Card sx={{ maxWidth: 930 }}  className={classes.resourcecard1} >
           
                <CardMedia
                component="img"
                height="140"
                image="https://www.bostondynamics.com/sites/default/files/styles/application_card_large/public/2022-03/unblock-supply-chain.jpg?itok=bahb31wE"
                alt="green iguana"
                />
                 <div className={classes.cardcontent}>
                <CardContent>
                <Typography gutterBottom variant="h6" component="div" color="#a7a7a7" textAlign="left" id={classes.card6sub}>
                BLOG POST
                </Typography>
                
                <Typography gutterBottom variant="h5" component="div" color="#00355A" textAlign="left"  id={classes.card6title}>
                BREAK THROUGH SUPPLY CHAIN BLOCKS WITH AUTOMATED CONTAINER UNLOADING
                </Typography>
                <Typography variant="body2" color="#00355A" textAlign="left"  id={classes.card6p}>
                Automated container unloading helps alleviate supply chain bottlenecks and create safer
                    working conditions.
                </Typography>
                
                </CardContent>
           
            
            
                <Button size="small" color="primary" id={classes.ebookbutton}>
                LEARN MORE <span uk-icon="chevron-right"></span>
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
                <CardContent >
                    
                <Typography gutterBottom variant="h6" component="div" color="#a7a7a7" textAlign="left"  id={classes.card6sub}>
                BLOG POST
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color="#00355A" textAlign="left"  id={classes.card6title}>
                3 TAKEAWAYS AFTER DEBUTING STRETCH AT MODEX 2022
                </Typography>
                <Typography variant="body2" color="#00355A" textAlign="left"  id={classes.card6p}>
                After launching our warehouse robot Stretch at MODEX 2022, we heard from warehouse and materials handling professionals with a few consistent themes.
                </Typography>
               
                </CardContent>
               
         
                <Button size="small" color="primary"  className={classes.blogbutton}>
                READ MORE  <span uk-icon="chevron-right"></span>
                </Button>
                
                </div>    
            
            
            </Card>

        </Item>
        </Grid>
        </Grid>
    </div>

    </div>
                <div className={classes.div6}>

                <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                    <h1 id={classes.autohead}>GET STARTED WITH FLEXIBLE WAREHOUSE AUTOMATION.</h1>
                    <Button variant="outlined" id={classes.autobut1}>LEARN ABOUT STRETCH</Button>
                    <Button variant="outlined" id={classes.autobutton}>CONTACT SALES</Button>
                </div>

                </div>
</div>
  )
}

export default Autocard