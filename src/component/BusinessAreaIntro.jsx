import React from 'react'
import './BusinessAreaIntro.css'
import {Col, Grid, Row} from 'react-flexbox-grid';
import FadeInSection from "./FadeInSection";

const BusinessAreaIntro = () => {
    return (
        <div className="businessAreaIntro">
            <div className="businessAreaContent">
                <Grid fluid>
                    <Row gutter={40}>
                        <Col md={6} xl={4} xs={12} xlOffset={3} xsOffset={0}>
                            <FadeInSection>
                                <div className="introTextPart" style={{height: "400px"}}>
                                    <h1>网页高端定制</h1>
                                    <p>
                                        可为您量身设计网站，也可以根据您的设计开发网站。以多年的开发经验为基础，支持任意语言与框架的网站开发。不论是门户网站，电商，抑或是论坛，视频网站、只要你想得到
                                        我们都能为您定制。
                                    </p>
                                </div>
                            </FadeInSection>
                        </Col>

                        <Col md={6} xl={2} xsOffset={0} xlOffset={0}>
                            <FadeInSection>
                                <div className="introPicturePart">
                                    <img src={require("../resource/websiteIntro.png")}/>
                                </div>
                            </FadeInSection>
                        </Col>
                    </Row>
                </Grid>

            </div>
            <div className="businessAreaContent">
                <Grid fluid>
                    <Row gutter={40} className="reverse">
                        <Col md={6} xl={5} xsOffset={0} xlOffset={2} >
                            <FadeInSection>
                                <div className="introTextPart" style={{height: "400px"}}>
                                    <h1>企业级后端服务</h1>
                                    <p>
                                        以国内外各大云服务厂商（aws，阿里云，腾讯云等）为基础，帮您搭建云上完整业务流程，免除您搭建服务器的烦恼
                                    </p>
                                </div>

                            </FadeInSection>
                        </Col>
                        <Col md={6} xl={2} xs={12} mdOffset={0} xlOffset={0} xsOffset={0}>
                            <FadeInSection>
                                <div className="introPicturePart">
                                    <img src={require("../resource/serverIntro.png")}/>
                                </div>
                            </FadeInSection>
                        </Col>

                    </Row>
                </Grid>

            </div>
            <div className="businessAreaContent">
                <Grid fluid>
                    <Row gutter={40}>
                        <Col md={6} xl={4} xs={12} xlOffset={3} xsOffset={0}>
                            <FadeInSection>
                                <div className="introTextPart" style={{height: "400px"}}>
                                    <h1>移动端app开发</h1>
                                    <p>
                                        量身设计与开发ios及android端软件。在智能手机的时代，移动端得开发显得更为重要。任何面向用户的产品，都需要移动端app来打开用户的心。
                                    </p>
                                </div>
                            </FadeInSection>
                        </Col>

                        <Col md={6} xl={2} xsOffset={0} xlOffset={0}>
                            <FadeInSection>
                                <div className="introPicturePart">
                                    <img src={require("../resource/appIntro.png")}/>
                                </div>
                            </FadeInSection>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="businessAreaContent">
                <Grid fluid>
                    <Row gutter={40} className="reverse">
                        <Col md={6} xl={5} xsOffset={0} xlOffset={2} >
                            <FadeInSection>
                                <div className="introTextPart" style={{height: "400px"}}>
                                    <h1>各类小程序开发</h1>
                                    <p>
                                        微信小程序，支付宝小程序等。小程序小但却精致。我们精心的设计便是精致的代表
                                    </p>
                                </div>

                            </FadeInSection>
                        </Col>
                        <Col md={6} xl={2} xs={12} mdOffset={0} xlOffset={0} xsOffset={0}>
                            <FadeInSection>
                                <div className="introPicturePart">
                                    <img src={require("../resource/smallAppIntro.png")}/>
                                </div>
                            </FadeInSection>
                        </Col>

                    </Row>
                </Grid>

            </div>
            <div className="businessAreaContent">
                <Grid fluid>
                    <Row gutter={40}>
                        <Col md={6} xl={4} xs={12} xlOffset={3} xsOffset={0}>
                            <FadeInSection>
                                <div className="introTextPart" style={{height: "400px"}}>
                                    <h1>企业级桌面端软件开发</h1>
                                    <p>
                                        为您开发各种操作系统端的桌面软件。桌面端已经不是潮流的代表，却是成熟与技术的代言，例如公司管理系统，大数据分析，定制公司聊天软件，人工智能等。
                                    </p>
                                </div>
                            </FadeInSection>
                        </Col>

                        <Col md={6} xl={2} xsOffset={0} xlOffset={0}>
                            <FadeInSection>
                                <div className="introPicturePart">
                                    <img src={require("../resource/desktopIntro.png")}/>
                                </div>
                            </FadeInSection>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>

    )

};
export default BusinessAreaIntro