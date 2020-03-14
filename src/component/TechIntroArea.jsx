import React from 'react'
import './techIntroArea.css'
import TechIntroCard from "./TechIntroCard";
import {Col, Grid, Row} from "react-flexbox-grid";
import StorageIcon from '@material-ui/icons/Storage';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import FadeInSection from "./FadeInSection";
const TechIntroArea = () => {
    return (
        <div className="techIntroWrapper">
            <Grid fluid>
                <Row gutter={40} >

                        <TechIntroCard svg={<StorageIcon/>} title={"大数据"} content={"智能爬虫，kafka数据流，产品品牌分析"}/>
                        <TechIntroCard svg={<AndroidOutlinedIcon/>} title={"人工智能"} content={"图像识别，人脸识别，智能对话AI"}/>
                        <TechIntroCard svg={<CloudOutlinedIcon/>} title={"云计算"} content={"无服务器架构，弹性计算，私人云架构"}/>
                        <TechIntroCard svg={<DesktopMacIcon/>} title={"开发语言"} content={"各项经典前沿语言框架，React, React Native, Vue, Angular, Spring boot, python, Golang, Laravel, tensorflow 等"}/>
                </Row>
            </Grid>
        </div>
    )
}

export default  TechIntroArea;