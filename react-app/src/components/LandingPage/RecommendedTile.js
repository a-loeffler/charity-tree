import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const RecommendedTile = ({tileData}) => {

    const project_medias = useSelector(state => state.MediaList.project_medias)
    const project_medias2 = project_medias?.filter(obj => obj['project_id'] === tileData?.id);

    useEffect(() => {
    }, [project_medias2])

    return (
        <Link to={`/projects/${tileData?.id}`} style={{textDecoration:"none"}}>
        <div className="recommended-tile-container">
            <div className="recommended-tile-image-container">
                {project_medias2[0] && <img className="recommended-tile-image" src={project_medias2[0]?.media_url} alt={`tile for project ${tileData.title}`}></img>}
            </div>
            <div className="recommended-tile-info-container">
                <h3 className="recommended-tile-title">{tileData?.name}</h3>
                <h3 className="recommended-tile-funded">{`${Math.floor(tileData?.current_amount / tileData?.goal)}% funded`}</h3>
                {/* <div className="recommended-tile-creator-info"><h3 className="recommended-tile-creator">By </h3><h3 className="recommended-tile-creator-link">{tileData.creator}</h3></div> */}
            </div>
        </div>
        </Link>
    )
}


export default RecommendedTile
