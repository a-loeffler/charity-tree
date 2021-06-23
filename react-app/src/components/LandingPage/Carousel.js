import React, {useState, useEffect} from 'react';

import './index.css'

import ProjectCard from './ProjectCard'

const Carousel = ({list}) => {

    const [scrollWidth, setScrollWidth] = useState(0);
    const [scrollElement, setScrollElement] = useState(null);
    const [scrollToPosition, setScrollToPosition] = useState(0);

    useEffect(() => {
        setScrollElement(document.querySelector(".carousel-items-container"));
        if (scrollElement) {
            setScrollWidth(scrollElement.offsetWidth)
        }
        console.log("element width:  ", scrollWidth)
    }, [])

    const rightClick = () => {
        if (scrollElement) {
            if (scrollToPosition < 1500) {
                let oldPosition = scrollToPosition;
                setScrollToPosition(oldPosition + 250)
                scrollElement.scroll(scrollToPosition, 0)
                console.log(scrollToPosition)

            }
        }
    }

    const leftClick = () => {
        if (scrollElement) {
            if (scrollToPosition >= 0) {
                let oldPosition = scrollToPosition;
                setScrollToPosition(oldPosition - 250)
                scrollElement.scroll(scrollToPosition, 0)
                console.log(scrollToPosition)

            }
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-title-info">
                <h2 className="carousel-title">Title</h2>
                <a className="carousel-title-link" href="">Link</a>
            </div>
            <div className="carousel-buttons-container">
                <div className="carousel-button-border right-space">
                    <img className="carousel-button" src="images/left-button.svg" onClick={leftClick}></img>
                </div>
                <div className="carousel-button-border">
                    <img className="carousel-button" src="images/right-button.svg" onClick={rightClick}></img>
                </div>
            </div>
            <div className="carousel-items-container" id="carousel-items-container">
                {list.map((project, index) => <ProjectCard key={index} title={project}/>)}
            </div>
        </div>
    )
}

export default Carousel;
