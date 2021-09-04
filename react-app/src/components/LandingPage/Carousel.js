import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import './index.css'

import ProjectCard from './ProjectCard'
import leftButton from "./left-button.svg";
import rightButton from "./right-button.svg";

const Carousel = ({list, id, title}) => {

    const [slidePosition, setSlidePosition] = useState(0);

    const [slidesToDisplay, setSlidesToDisplay] = useState([]);

    const project_medias = useSelector((state) => state.MediaList.project_medias)

    useEffect(() => {
        let displaySlides = list.slice(slidePosition, slidePosition + 5);

        setSlidesToDisplay(displaySlides);

    }, [slidePosition, list, project_medias])


    const leftClick = () => {
        if (slidePosition > 0) {
            setSlidePosition(slidePosition - 1);
        }
    }


    const rightClick = () => {
        if (slidePosition < list.length - 4) {
            setSlidePosition(slidePosition + 1);
        }
    }

    const limitText = (str) => str.length > 70 ? `${str.substring(0, 70)}...` : str;
    let width = "95%"
    let minHeight = "240px"
    let display = "flex"


    return (
        <div className="carousel-container">
            <div className="carousel-title-info">
                <h2 className="carousel-title">{title}</h2>
            </div>
            <div className="carousel-buttons-container">
                <div className="carousel-button-border right-space">
                    <img className="carousel-button" src={leftButton} alt="" onClick={leftClick}></img>
                </div>
                <div className="carousel-button-border">
                    <img className="carousel-button" src={rightButton} alt="" onClick={rightClick}></img>
                </div>
            </div>
            <div className="carousel-items-container" id={id}>
                {slidesToDisplay.map((project, index) =>  {
                    const project_medias2 = project_medias?.filter(obj => obj['project_id'] === project.id);
                    return <ProjectCard key={index} width={width} minHeight={minHeight} display={display} title={project.name} description={limitText(project.description)} cardId={`${project.id}`} image={project_medias2[0]} ownerId={project.owner_id}/>
            })}
            </div>
        </div>
    )
}

export default Carousel;
