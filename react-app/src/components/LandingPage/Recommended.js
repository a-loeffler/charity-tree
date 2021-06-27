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

        console.log(displayCounter)
        console.log(tilePosition)

    }, [tilePosition, recommendedList, displayCounter])



    const navRight = () => {
        if (tilePosition > 0) {
            setTilePosition(tilePosition - 3);
            setDisplayCounter(displayCounter + 1);
        }
    }


    const navLeft = () => {
        if (tilePosition < recommendedList.length) {
            setTilePosition(tilePosition - 3);
            setDisplayCounter(displayCounter - 1);
        }
    }


    const setOne = () => {
        setDisplayCounter(1)
        setTilePosition(0)
    }

    const setTwo = () => {
        setDisplayCounter(2)
        setTilePosition(3)
    }

    const setThree = () => {
        setDisplayCounter(3)
        setTilePosition(6)
    }
    //To-do: slice recommendedList to get appropriate data
    //use arrow buttons to affect indices in state

    //

    return (
        <div className="recommended-container">
            <h2 className="recommended-container-title">Recommended For You</h2>
            {tilesToDisplay.map((tileData, index) => <RecommendedTile key={index} tileData={tileData}/>)}
            <div className="recommended-nav-container">
                <div className="recommended-nav-button-border">
                    <img className="recommended-nav-button" src="images/left-button.svg" alt="" onClick={navRight} ></img>
                </div>
                <p className={displayCounter === 1 ? "recommended-nav-number active-nav-number" : "recommended-nav-number"} onClick={setOne}>1</p>
                <p className={displayCounter === 2 ? "recommended-nav-number active-nav-number" : "recommended-nav-number"} onClick={setTwo}>2</p>
                <p className={displayCounter === 3 ? "recommended-nav-number active-nav-number" : "recommended-nav-number"} onClick={setThree}>3</p>
                <div className="recommended-nav-button-border">
                    <img className="recommended-nav-button" src="images/right-button.svg" alt="" onClick={navLeft}></img>
                </div>
            </div>
        </div>
    )
}


export default Recommended;
