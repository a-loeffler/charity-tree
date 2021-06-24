import React from "react";
import "./index.css";
import Carousel from "./Carousel";
import FeaturedProject from "./FeaturedProject";
import Recommended from "./Recommended";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const allProjects = useSelector((state) => state.allProjects.projects);
  console.log(allProjects);

  allProjects.forEach((e) => {
    console.log(e);
  });

  //========== Sort By Most Recent ==============
  let recentProjects = [...allProjects];
  recentProjects.sort((b, a) => {
    return Date.parse(a.created) - Date.parse(b.created);
  });
  console.log("recemtProjectsssssssssssssssssssssss", recentProjects);

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
    creator: "Poor Boy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  const mockRecommendedData = {
    title: "Can I has moneyz?!",
    bannerUrl: "https://i.ibb.co/7CCsBs7/mock-tile.png",
    funded: 14,
    creator: "Mr. Whiskers",
  };

  const mockRecommendedList = [
    mockRecommendedData,
    mockRecommendedData,
    mockRecommendedData,
    mockRecommendedData,
    mockRecommendedData,
    mockRecommendedData,
    mockRecommendedData,
    mockRecommendedData,
    mockRecommendedData,
  ];

  return (
    <div className="main-container">
      <div className="side-space"></div>
      <div className="main-content">
        <div className="upper-content-container">
          <FeaturedProject featuredProject={mockFeaturedProjectData} />
          <Recommended recommendedList={mockRecommendedList} />
        </div>
        {allProjects?.length !== 0}
        <Carousel id={"car-1"} list={recentProjects} title={"Recent"} />
        <Carousel
          id={"car-2"}
          list={sortedByCompletion}
          title={"Close to Goal"}
        />
        <Carousel id={"car-3"} list={randomProjects} title={"Discover"} />
      </div>
      <div className="side-space"></div>
    </div>
  );
};

export default LandingPage;
