import React, {useState, useEffect} from 'react'

import './index.css'

import RecommendedTile from "./RecommendedTile";


const Recommended = ({recommendedList}) => {

    const [tilePosition, setTilePosition] = useState(0);

    const [tilesToDisplay, setTilesToDisplay] = useState([]);

    const [displayCounter, setDisplayCounter] = useState(1);

    useEffect(() => {

        let displayTiles = recommendedList.slice(tilePosition, tilePosition + 3);

        setTilesToDisplay(displayTiles);

    }, [tilePosition, recommendedList])



    const navRight = () => {
        if (tilePosition > 0) {
            setTilePosition(tilePosition - 3);
        }
    }


    const navLeft = () => {
        if (tilePosition < recommendedList.length) {
            setTilePosition(tilePosition - 3);
        }
    }

    //To-do: slice recommendedList to get appropriate data
    //use arrow buttons to affect indices in state

    return (
        <div className="recommended-container">
            <h2 className="recommended-container-title">Recommended</h2>
            {tilesToDisplay.map((tileData, index) => <RecommendedTile key={index} tileData={tileData}/>)}
            <div className="recommended-nav-container">
                <div className="recommended-nav-button-border">
                    <img className="recommended-nav-button" src="images/left-button.svg" alt="" onClick={navRight} ></img>
                </div>
                <p className="recommended-nav-number">1</p>
                <p className="recommended-nav-number">2</p>
                <p className="recommended-nav-number">3</p>
                <div className="recommended-nav-button-border">
                    <img className="recommended-nav-button" src="images/right-button.svg" alt="" ></img>
                </div>
            </div>
        </div>
    )
}


export default Recommended;
