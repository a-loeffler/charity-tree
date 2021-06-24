import React, {useState, useEffect} from 'react';

import './index.css'

import ProjectCard from './ProjectCard'

const Carousel = ({list, id, title}) => {

    const [slidePosition, setSlidePosition] = useState(0);

    const [slidesToDisplay, setSlidesToDisplay] = useState([]);


    useEffect(() => {
        console.log(list)
        let displaySlides = list.slice(slidePosition, slidePosition + 5);

        setSlidesToDisplay(displaySlides);

    }, [slidePosition, list])


    const leftClick = () => {
        if (slidePosition > 0) {
            setSlidePosition(slidePosition - 1);
        }
    }


    const rightClick = () => {
        if (slidePosition < list.length - 4) {
            setSlidePosition(slidePosition + 1);
        }

        //To Do: if the user reaches the last track, direct them to more search results
        // else {}
    }

    //#region
    // const totalLength = list.length - 1;
    // const [scrollIndex, setScrollIndex] = useState(0)
    // const [scrollId, setScrollId] = useState(`${id}-${scrollIndex}`)

    // const [scrollerWidth, setScrollerWidth] = useState(0);
    // const [scrollElement, setScrollElement] = useState(null);
    // const [scrollToPosition, setScrollToPosition] = useState(0);

    // useEffect(() => {
    //     setScrollElement(document.getElementById(scrollId));
    //     if (scrollElement) {
    //         setScrollerWidth(scrollElement.scrollWidth)
    //         console.log(scrollElement.scrollWidth)
    //     }
    //     console.log("element width:  ", scrollerWidth)

    // }, [])

    // const rightClick = () => {
    //     if (scrollIndex < totalLength) {
    //         setScrollIndex(scrollIndex + 1);
    //         setScrollId(`${id}-${scrollIndex}`)

    //         console.log("scroll Id", scrollId)
    //         setScrollElement(document.getElementById(scrollId))

    //         if (scrollElement) {
    //             scrollElement.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //                 inline: "start"
    //             })
    //         }
    //     }

    // }

    // const rightClick = () => {
    //     if (scrollElement) {
    //         if (scrollToPosition < 1500) {
    //             let oldPosition = scrollToPosition;
    //             setScrollToPosition(oldPosition + 250)
    //             scrollElement.scroll(scrollToPosition, 0)
    //             console.log(scrollToPosition)

    //         }
    //     }
    // }

    // const leftClick = () => {
    //     if (scrollElement) {
    //         if (scrollToPosition >= 0) {
    //             let oldPosition = scrollToPosition;
    //             setScrollToPosition(oldPosition - 250)
    //             scrollElement.scroll(scrollToPosition, 0)
    //             console.log(scrollToPosition)

    //         }
    //     }
    // }
    //#endregion

    return (
        <div className="carousel-container">
            <div className="carousel-title-info">
                <h2 className="carousel-title">{title}</h2>
                <a className="carousel-title-link" href="">
                    <p>Link</p>
                    <img className="carousel-title-link-arrow" src="images/right-button.svg" alt=""></img>
                </a>
            </div>
            <div className="carousel-buttons-container">
                <div className="carousel-button-border right-space">
                    <img className="carousel-button" src="images/left-button.svg" alt="" onClick={leftClick}></img>
                </div>
                <div className="carousel-button-border">
                    <img className="carousel-button" src="images/right-button.svg" alt="" onClick={rightClick}></img>
                </div>
            </div>
            <div className="carousel-items-container" id={id}>
                {console.log('slidesTod siplay ', slidesToDisplay)}
                {slidesToDisplay.map((project, index) =>  {
                    console.log(slidesToDisplay)
                    return <ProjectCard key={index} title={project.name} description={project.description} cardId={`${id}-${index}`}/>
            })}
            </div>
        </div>
    )
}

export default Carousel;
