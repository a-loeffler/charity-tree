import React from 'react'




const RecommendedTile = ({tileData}) => {



    return (
        <div className="recommended-tile-container">
            <div className="recommended-tile-image-container">
                <img className="recommended-tile-image" src={tileData.bannerUrl} alt={`tile for project ${tileData.title}`}></img>
            </div>
            <div className="recommended-tile-info-container">
                <h3 className="recommended-tile-title">{tileData.title}</h3>
                <h3 className="recommended-tile-funded">{`${tileData.funded}% funded`}</h3>
                <div className="recommended-tile-creator-info"><h3 className="recommended-tile-creator">By </h3><h3 className="recommended-tile-creator-link">{tileData.creator}</h3></div>
            </div>
        </div>
    )
}


export default RecommendedTile
