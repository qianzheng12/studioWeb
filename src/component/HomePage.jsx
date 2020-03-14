import React, {useEffect, useState} from 'react'
import './HomePage.css'
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import BusinessAreaIntro from "./BusinessAreaIntro";
import {Helmet} from "react-helmet";
import TechIntroArea from "./TechIntroArea";
import {Col, Grid, Row} from "react-flexbox-grid";
const HomePage = () => {
    const [scrolledToTop, setScrolledToTop] = useState(true);
    useEffect(()=>{
        const handleScroll= e => {
            if(window.pageYOffset === 0){
                setScrolledToTop(true)
            }
            else{
                setScrolledToTop(false)
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true })


    });
   return (
       <div className="wrapper">
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Ma+Shan+Zheng|Zhi+Mang+Xing&display=swap" rel="stylesheet"/>

        </Helmet>
           <NavBar scrolledToTop={scrolledToTop}/>
           <div className="headerCard">
               <Grid  className="introArea" fluid>
                   <Row gutter={40} >
                       <Col md={5} lg={3} mdOffset={3} smOffset={0} lgOffset={5}>
                           <h1 align="center"> Whale </h1>
                           <img id="logo" src={require("../resource/logo1.png")}/>
                           <p align="center">
                               创意如鲸 <br/>
                               水击三千里 <br/>
                               搏浪万丈高 <br/>
                           </p>
                       </Col>
                   </Row>
               </Grid>
           </div>
           <BusinessAreaIntro />
           <div className="seaPic"/>
           <TechIntroArea/>
       </div>
   )

}
export default HomePage