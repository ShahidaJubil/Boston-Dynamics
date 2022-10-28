import React from 'react'
import Slider from "react-slick";
import Button from '@mui/material/Button';
import './Autoslider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CircleIcon from '@mui/icons-material/Circle';

function Autoslider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
    <div id='autosliderdiv'>
    <img src='https://www.bostondynamics.com/themes/custom/isovera/images/quote-accent-icon.png' alt='' className='autodoubleslash'/>
    <div className='autoslidernormal'>
        <Slider {...settings} >
          <div id='slidersettingheight1'>
            <h3 id='slideradam1'>
            <table class="uk-table">
    <tbody>
        <tr>
            <td></td>
      </tr>
      </tbody>
</table>
<div class="uk-column-1-2 uk-column-divider" id='autoNationalGrid'>
    <ArrowBackIosIcon id='backarrow'/>
    <p className='autoBeingabletohaveSpotdoinspections '>"We’re excited to partner with Boston Dynamics to deploy its best-in-class robotics in our warehouses. The Stretch robot addresses complex industry challenges through flexible automation, which we’ll be able to replicate and scale regionally and globally.”</p>
    <p className='autoDeanBerlin'>Sally Miller, CIO,<span id='autonationalgridbold'>DHL Supply Chain North America</span></p>
    <img src='https://www.bostondynamics.com/sites/default/files/2022-02/dhl-sq.png' alt='' className='autonationgridimag2main' />
    <Button variant="outlined" id='autobtnnationgrid'>READ PRESS RELEASE</Button>
    <ArrowForwardIosIcon id='forarrow'/>
    < CircleIcon id='dot'/>
</div>
</h3>
          </div>
          
         
        </Slider>
      </div>
    


    <div className='autosliderrespo'>
        <Slider {...settings} >
          <div id='slidersettingheight'>
            <h3 id='slideradam'>
            
      <div  id='autoNationalGridr'>
          <ArrowBackIosIcon id='backarrowr'/>
          <p className='autoBeingabletohaveSpotdoinspections '>"We’re excited to partner with Boston Dynamics to deploy its best-in-class robotics in our warehouses. The Stretch robot addresses complex industry challenges through flexible automation, which we’ll be able to replicate and scale regionally and globally.”</p>
          <p className='autoDeanBerlin'>Sally Miller, CIO,<span id='autonationalgridbold'>DHL Supply Chain North America</span></p>
          <img src='https://www.bostondynamics.com/sites/default/files/2022-02/dhl-sq.png' alt='' className='autonationgridimag2mainr' />
          <Button variant="outlined" id='autobtnnationgrid'>READ PRESS RELEASE</Button>
          <ArrowForwardIosIcon id='forarrowr'/>
          < CircleIcon id='dotr'/>
      </div>
</h3>
          </div>
          
         
        </Slider>
      </div>
    </div>
    </div> 
  )
}
export default Autoslider