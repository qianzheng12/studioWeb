import React from 'react'
import {Col, Grid, Row} from "react-flexbox-grid";
import StorageIcon from '@material-ui/icons/Storage';
import FadeInSection from "./FadeInSection";

const TechIntroCard = ({svg,title,content}) => {
    return (

        <Col md={4} lg={3} mdOffset={1} lgOffset={2}>
            <FadeInSection>
            <div className="techIntroCard">
                {svg}

                <h1>
                    {title}
                </h1>
                <p>
                    {content}
                </p>
            </div>
            </FadeInSection>
        </Col>
    )
}

export default  TechIntroCard;