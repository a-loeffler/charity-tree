// import React, {useState, useEffect} from 'react';

// import './index.css'

// import ProjectCard from './ProjectCard'

// const Carousel = ({list}) => {

//     let scrollElement;
//     let width;

//     const [scrollTo, setScrollTo] = useState(0);

//     useEffect(() => {
//         scrollElement = document.getElementById("carousel-items-container");
//         width = scrollElement.offsetWidth
//     }, [])

//     const rightClick = () => {
//         if (scrollElement) {
//             scrollElement
//         }
//     }

//     return (
//         <div className="carousel-container">
//             <div className="carousel-title-info">
//                 <h2 className="carousel-title">Title</h2>
//                 <a className="carousel-title-link" href="">Link</a>
//             </div>
//             <div className="carousel-buttons-container">
//                 <div className="carousel-button-border right-space">
//                     <img className="carousel-button" src="images/left-button.svg"></img>
//                 </div>
//                 <div className="carousel-button-border">
//                     <img className="carousel-button" src="images/right-button.svg"></img>
//                 </div>
//             </div>
//             <div className="carousel-items-container" id="carousel-items-container">
//                 {list.map(project => <ProjectCard title={project}/>)}
//             </div>
//         </div>
//     )
// }

// export default Carousel;
