import React from "react";

import './index.css'

const TierButton = ({tierInfo}) => {



    return (
        <div className="tier-button-container">
            <h3 className="tier-button-title">{tierInfo.name}</h3>
            <h3 className="tier-button-value">{tierInfo.value}</h3>
            <h3 className="tier-button-description">{tierInfo.description}</h3>
            <div className="tier-button-cancel">
                <button className="tier-button-cancel-button">X</button>
            </div>
        </div>
    )
}

export default TierButton
