import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from '../pages/home/Home' 

import About from '../pages/company/about/About'
import Careers from '../pages/company/careers/Careers'
import Ethics from '../pages/company/ethics/Ethics'
import News from '../pages/company/news/News' 

import Arm from '../pages/product/spot/arm/Arm'
import Extras from '../pages/product/spot/extras/Extras'
import Partners from '../pages/product/spot/partners/Partners'
import Payloads from '../pages/product/spot/payloads/Payloads'
import Scout from '../pages/product/spot/scout/Scout'
import Stretch from '../pages/product/stretch/Stretch' 

import Atlas from '../pages/research/atlas/Atlas'
import LegacyRobot from '../pages/research/legacyrobot/LegacyRobot' 

import Blogs from '../pages/resources/blogs/Blogs'
import CaseStudies from '../pages/resources/casestudies/CaseStudies'
import DeveloperDocumentation from '../pages/resources/developerdocumentation/DeveloperDocumentation'
import SupportCenter from '../pages/resources/supportcenter/SupportCenter'
import Webinars from '../pages/resources/webinars/Webinars'
import WhitePapers from '../pages/resources/whitepapers/WhitePapers' 

import AssetManagement from '../pages/solutions/assetmanagement/AssetManagement'
import Construction from '../pages/solutions/construction/Construction'
import Inspection from '../pages/solutions/inspection/Inspection'
import Manufacturing from '../pages/solutions/manufacturing/Manufacturing'
import PowerandUtilities from '../pages/solutions/powerandutilities/PowerandUtilities'
import PublicSafety from '../pages/solutions/publicsafety/PublicSafety'
import WarehouseAutomation from '../pages/solutions/warehouseautomation/WarehouseAutomation' 

export default function Navigate() {
    return (
        <Router>
            <div>
                <div><Header/></div>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route> 

                    <Route path="/about" element={<About />}></Route>
                    <Route path="/careers" element={<Careers />}></Route>
                    <Route path="/ethics" element={<Ethics />}></Route>
                    <Route path="/news" element={<News />}></Route> 

                    <Route path="/arm" element={<Arm />}></Route>
                    <Route path="/extras" element={<Extras />}></Route>
                    <Route path="/partners" element={<Partners />}></Route>
                    <Route path="/payloads" element={<Payloads />}></Route>
                    <Route path="/scout" element={<Scout />}></Route>
                    <Route path="/stretch" element={<Stretch />}></Route>


                    <Route path="/atlas" element={<Atlas />}></Route>
                    <Route path="/legacyrobot" element={<LegacyRobot />}></Route>



                    <Route path="/blogs" element={<Blogs />}></Route>
                    <Route path="/casestudies" element={<CaseStudies />}></Route>
                    <Route path="/developerdocumentation" element={<DeveloperDocumentation />}></Route>
                    <Route path="/supportcenter" element={<SupportCenter />}></Route>
                    <Route path="/webinars" element={<Webinars />}></Route> 
                    <Route path="/whitepapers" element={<WhitePapers />}></Route> 

                    <Route path="/assetmanagement" element={<AssetManagement />}></Route>
                    <Route path="/construction" element={<Construction />}></Route>
                    <Route path="/inspection" element={<Inspection />}></Route>
                    <Route path="/manufacturing" element={<Manufacturing />}></Route>
                    <Route path="/powerandutilities" element={<PowerandUtilities />}></Route>
                    <Route path="/publicsafety" element={<PublicSafety />}></Route>
                    <Route path="/warehouseautomation" element={<WarehouseAutomation />}></Route> 
 

                </Routes>
                <div><Footer/></div>
            </div>
        </Router>

    );
}