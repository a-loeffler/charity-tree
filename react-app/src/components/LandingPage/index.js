import React, { useState } from "react";
import "./index.css";
import Carousel from "./Carousel";
import FeaturedProject from "./FeaturedProject";
import Recommended from "./Recommended";
import { useSelector } from "react-redux";



const LandingPage = () => {
  const allProjects = useSelector((state) => state.allProjects.projects);
  const MediaList = useSelector((state) => state.MediaList.project_medias)
  // allProjects.forEach((e) => {
  //   console.log(e);
  // });

  //========== Sort By Most Recent ==============
  let recentProjects = [...allProjects];
  recentProjects.sort((b, a) => {
    return Date.parse(a.created) - Date.parse(b.created);
  });

  //========== Sort By Completed ==============
  let completionProjects = [...allProjects];
  completionProjects.sort((b, a) => {
    if (a.current_amount === null) a.current_amount = 0;
    if (b.current_amount === null) b.current_amount = 0;
    return (
      parseFloat(a.current_amount / a.goal).toFixed(10) -
      parseFloat(b.current_amount / b.goal).toFixed(10)
    );
  });

  let sortedByCompletion = [];
  if (completionProjects.length !== 0) {
    let i = 0;
    sortedByCompletion = [];
    while (i < 10) {
      sortedByCompletion.push(completionProjects[i]);
      i++;
    }
  }

  //========== Random Sort ==============
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  let random = [...allProjects];
  const randomProjects = shuffle(random);

  const mockFeaturedProjectData = {
    title: "We be broke, y’all!",
    bannerUrl: "https://i.ibb.co/YWvkzkf/mock-banner.png",
    creator: "Charity Tree Creators",
    description:
      "The creators of Charity Tree are working to develop web software that can aid and support charities and nonprofit organizations.  Join us in helping others!",
  };

  const mockRecommendedData1 = {
    title: "Can I has moneyz?!",
    bannerUrl: "https://i.ibb.co/7CCsBs7/mock-tile.png",
    funded: 14,
    creator: "Mr. Whiskers",
  };


  const mockRecommendedData2 = {
    title: "AHA",
    bannerUrl: "https://city-sentinel.com/wp-content/uploads/2016/05/AHA-logo.jpg",
    funded: 12,
    creator: "City Sentinel",
  };

  const mockRecommendedData3 = {
    title: "End Homelessness",
    bannerUrl: "https://endhomelessness.org/wp-content/uploads/2016/10/2016update.png",
    funded: 12,
    creator: "Society for the Prevention of Homelessness",
  };




  const mockRecommendedList = [
    randomProjects[1],
    randomProjects[2],
    randomProjects[3],
    randomProjects[4],
    randomProjects[5],
    randomProjects[6],
    randomProjects[7],
    randomProjects[8],
    randomProjects[9],
  ];

  return (
    <div className="main-container">
      <div className="side-space"></div>
      <div className="main-content">
        <div className="upper-content-container">
          <FeaturedProject featuredProject={randomProjects[0]}  />
          <Recommended recommendedList={mockRecommendedList} />
        </div>
        {allProjects?.length !== 0}
        <Carousel id={"car-1"} list={recentProjects} title={"Recent"}/>
        <Carousel
          id={"car-2"}
          list={sortedByCompletion}
          title={"Close to Goal"}
          carouselLink={""}
        />
        <Carousel id={"car-3"} list={randomProjects} title={"Discover"} carouselLink={""} />
      </div>
      <div className="side-space"></div>
    </div>
  );
};

export default LandingPage;
