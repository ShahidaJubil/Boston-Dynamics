import React from 'react'
// Import css files
import Slider from "react-slick";
import Button from '@mui/material/Button';
import './Thirdslide.css';


function Inspectionmeetcutomer() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div >
    <div className='sliderdiv'>
    <img src='https://www.bostondynamics.com/themes/custom/isovera/images/quote-accent-icon.png' alt='' className='doubleslash'/>
    <div className='normalview'>
        <Slider {...settings} >
          <div id='slidersettingheight'>
            <h3 id='slideradam'>
            
              <div class="uk-column-1-2 uk-column-divider" id='NationalGrid'>
              <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                  <p className='BeingabletohaveSpotdoinspections '>"Being able to have Spot do inspections controlled by human operators gives an extra layer of safety and extra layer of troubleshooting for technicians and engineers."</p>
                  <p className='DeanBerlin'>Dean Berlin, Lead Technology Analyst, <span id='nationalgridbold'>National Grid</span></p>
                  <img src='https://www.bostondynamics.com/sites/default/files/2021-02/testimonial-logo-national-grid.png' alt='' className='nationgridimag2main' />
                  <Button variant="outlined" id='btnnationgrid'>Read Customer story</Button>
              </div>
              </div>

              </h3>
          </div>
          
    <div>
          <h3 id='slideradam'>

            <div class="uk-column-1-2 uk-column-divider" id='NationalGrid'>
            <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                <p className='BeingabletohaveSpotdoinspections '>"Every 12 hours, we follow the same path through the plant, and we’re assessing situational awareness. It’s important to communicate across shift changes and make sure you’re handing off critical information. Spot is going to capture things we may not notice or that we’re not always around to see."
                </p>
                    <p className='DeanBerlin'>Christopher Phillips, Production Technician,  <span id='nationalgridbold'>Woodside</span></p>
                    <img src='https://www.bostondynamics.com/sites/default/files/2020-10/woodside-primary-vertical.png' alt='' className='nationgridimag2main'/>
                    <Button variant="outlined" id='btnnationgrid'>Read Customer story</Button>
            </div>
            </div>
            </h3>
    </div>
   
        </Slider>
      </div>



      <div className='responsiveview'>
        <Slider {...settings} >
          <div id='slidersettingheight'>
            <h3 id='slideradam'>
            
              <div  id='NationalGrid'>
              <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                  <p className='BeingabletohaveSpotdoinspections '>"Being able to have Spot do inspections controlled by human operators gives an extra layer of safety and extra layer of troubleshooting for technicians and engineers."</p>
                  <p className='DeanBerlin'>Dean Berlin, Lead Technology Analyst, <span id='nationalgridbold'>National Grid</span></p>
                  <img src='https://www.bostondynamics.com/sites/default/files/2021-02/testimonial-logo-national-grid.png' alt='' className='nationgridimag2main' />
                  <Button variant="outlined" id='btnnationgrid'>Read Customer story</Button>
              </div>
              </div>

              </h3>
          </div>
          
    <div>
          <h3 id='slideradam'>

            <div  id='NationalGrid'>
            <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                <p className='BeingabletohaveSpotdoinspections '>"Every 12 hours, we follow the same path through the plant, and we’re assessing situational awareness. It’s important to communicate across shift changes and make sure you’re handing off critical information. Spot is going to capture things we may not notice or that we’re not always around to see."
                </p>
                    <p className='DeanBerlin'>Christopher Phillips, Production Technician,  <span id='nationalgridbold'>Woodside</span></p>
                    <img src='https://www.bostondynamics.com/sites/default/files/2020-10/woodside-primary-vertical.png' alt='' className='nationgridimag2main'/>
                    <Button variant="outlined" id='btnnationgrid'>Read Customer story</Button>
            </div>
            </div>
            </h3>
    </div>
   
        </Slider>
      </div>
    </div>
    </div>
  )
}
export default Inspectionmeetcutomer