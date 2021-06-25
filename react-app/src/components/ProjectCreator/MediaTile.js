import React from "react"
import './index.css'

const MediaTile = ({url, index}) => {



    return (
        <div className="media-tile-container">
            <img className="media-tile-img" src={url}></img>
            <div className="media-delete-button" id={`media-delete-${index}`} >
                <p>x</p>
            </div>
        </div>
    )


}

export default MediaTile
