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

  allProjects.sort((a, b) => {
    if (a.current_amount === null) a.current_amount = 100000;
    if (b.current_amount === null) b.current_amount = 100000;
    return (
      parseFloat(a.current_amount / a.goal).toFixed(2) +
      parseFloat(b.current_amount / b.goal).toFixed(2)
    );
  });

  allProjects.forEach((e) => {
    console.log(`${e.current_amount} ${e.goal} ${e.current_amount / e.goal}`);
  });
  console.log("this is sorted", allProjects);

  let sortedByRecent = []
  if (allProjects.length !== 0) {
    sortedByRecent =
        [allProjects[allProjects.length - 1],
        allProjects[allProjects.length - 2],
        allProjects[allProjects.length - 3],
        allProjects[allProjects.length - 4],
        allProjects[allProjects.length - 5],
        allProjects[allProjects.length - 6],
        allProjects[allProjects.length - 7],
        allProjects[allProjects.length - 8],
        allProjects[allProjects.length - 9],
        allProjects[allProjects.length - 10],
        ]
  }
;

  console.log(sortedByRecent)
  const mockCarouselData = [
    "alpha",
    "beta",
    "gamma",
    "delta",
    "epsilon",
    "zeta",
    "eta",
    "theta",
    "iota",
    "kappa",
  ];
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
            <Carousel id={"car-1"} list={sortedByRecent} />
        {/* <Carousel id={"car-2"} list={mockCarouselData} />
        <Carousel id={"car-3"} list={mockCarouselData} /> */}
      </div>
      <div className="side-space"></div>
    </div>
  );
};

export default LandingPage;
