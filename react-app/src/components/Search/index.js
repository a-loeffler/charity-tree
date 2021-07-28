import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProjectCard from "../LandingPage/ProjectCard";
import './index.css'

const Search = () => {
  const projectMedia = useSelector(state => state.MediaList.project_medias)
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const res = await fetch(`/api/search/${query}`);
    const json = await res.json();
    console.log(json["projects"]);
    setSearchResults(json["projects"]);
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  useEffect(() => {
    console.log(searchResults, query)
  }, [searchResults]);
  const limitText = (str) => str.length > 70 ? `${str.substring(0, 70)}...` : str;
  let width = "300px"
  let minHeight = "300px"
  let display = "flex"

  return (
    <div className="search-results-container">
      
      <div className="parentGrid">
        {searchResults.length === 0 && <h1>No Results Found.</h1>}
        {searchResults.length > 0 &&
          searchResults.map((project) => {
            return <ProjectCard key={project.id} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id
                )[0]} ownerId={project.owner_id}/>
          })}
      </div>
    </div>
  );
};

export default Search;
