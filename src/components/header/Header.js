import  React from 'react';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Header() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Link to="/" >Boston Dynamics</Link> &nbsp;

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Company</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/about" >About</Link></MenuItem>
          <MenuItem><Link to="/careers" >Careers</Link></MenuItem>
          <MenuItem><Link to="/ethics" >Ethics</Link></MenuItem>
          <MenuItem><Link to="/news" >News</Link></MenuItem> 
        </Select>
      </FormControl> &nbsp;

      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem> 
                <FormControl  sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Spot</InputLabel>
                    <Select>
                        <MenuItem><Link to="/arm">Arm</Link></MenuItem>
                        <MenuItem><Link to="/extras">Extras</Link></MenuItem>
                        <MenuItem><Link to="/partners">Partners</Link></MenuItem>
                        <MenuItem><Link to="/payloads">Payloads</Link></MenuItem>
                        <MenuItem><Link to="/scout">Scout</Link></MenuItem>
                    </Select>
                </FormControl>
          </MenuItem>
          <MenuItem><Link to="/stretch" >Stretch</Link></MenuItem>
        </Select>
      </FormControl> &nbsp;


      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Research</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/atlas" >Atlas</Link></MenuItem>
          <MenuItem><Link to="/legacyrobot" >Legacy Robot</Link></MenuItem> 
        </Select>
      </FormControl> &nbsp;

      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Resources</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/blogs" >Blogs</Link></MenuItem>
          <MenuItem><Link to="/casestudies" >Case Studies</Link></MenuItem>
          <MenuItem><Link to="/developerdocumentation" >Developer Documentation</Link></MenuItem>
          <MenuItem><Link to="/supportcenter" >Support Center</Link></MenuItem>
          <MenuItem><Link to="/webinars" >Webinars</Link></MenuItem>
          <MenuItem><Link to="/whitepapers" >White Papers</Link></MenuItem> 
        </Select>
      </FormControl> &nbsp;

      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Solutions</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/assetmanagement" >Asset Management</Link></MenuItem>
          <MenuItem><Link to="/construction" >Construction</Link></MenuItem>
          <MenuItem><Link to="/inspection" >Inspection</Link></MenuItem>
          <MenuItem><Link to="/manufacturing" >Manufacturing</Link></MenuItem>
          <MenuItem><Link to="/powerandutilities" >Power and Utilities</Link></MenuItem>
          <MenuItem><Link to="/publicsafety" >Public Safety</Link></MenuItem>
          <MenuItem><Link to="/warehouseautomation" >Warehouse Automation</Link></MenuItem> 
        </Select>
      </FormControl> &nbsp;

      <Link to="/contact" >Contact Us</Link> &nbsp;
    </>
  )
}

export default Header
