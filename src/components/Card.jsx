import React from 'react';
import FeatureImg from "../images/feature1.png";

function Card(props){
    return (
        <>
        <div className="feature_box col-md-4">
            <div className="inner">
                <img src={props.featureimg} alt="" />
            <div className="title">{props.title}</div>
            <p class="description">{props.description}</p>
            </div>
        </div>
        </>
    )
}

export default Card