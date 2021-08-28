import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProjectCard from "../LandingPage/ProjectCard";
import SearchFilter from "./SearchFilter";
import './index.css'

const Search = () => {
  const projectMedia = useSelector(state => state.MediaList.project_medias)
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null)
  const [filterSearch, setFilterSearch] = useState([])

  const handleSearch = async (query) => {
    const res = await fetch(`/api/search/${query}`);
    const json = await res.json();
    setSearchResults(json["projects"]);
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  useEffect(() => {
  }, [searchResults]);

  useEffect(() => {
    if (filterCategory) {
      const filtered = searchResults.filter((project) => {
        return project.category_id === filterCategory
      })
      setFilterSearch(filtered)
    }
    else {
      setFilterSearch([])
    }
  }, [filterCategory, searchResults])

  const limitText = (str) => str.length > 70 ? `${str.substring(0, 70)}...` : str;
  let width = "300px"
  let minHeight = "300px"
  let display = "flex"

  return (
    <div className="search-results-container">
      <SearchFilter setFilterCategory={setFilterCategory}/>
      <div className="parentGrid">
        {searchResults.length === 0 && <h1>No Results Found.</h1>}
        {filterCategory !== null && filterSearch.length > 0  ? filterSearch.map((project, index) => {
            return <ProjectCard key={index} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id
                )[0]} ownerId={project.owner_id}/>
          }) : null}
        {filterCategory !== null && filterSearch.length === 0 && searchResults.length !== 0 ? <h1>No Results Found.</h1> : null}
        {filterCategory === null ? searchResults.map((project, index) => {
            return <ProjectCard key={index} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id
                )[0]} ownerId={project.owner_id}/>
          }) : null }
        {/* {searchResults.length > 0 &&
          searchResults.map((project, index) => {
            return <ProjectCard key={index} width={width} minHeight={minHeight} display={display} title={project?.name} description={limitText(project?.description)} cardId={project?.id} image={projectMedia?.filter(item => item.project_id === project.id
                )[0]} ownerId={project.owner_id}/>
          })} */}
      </div>
    </div>
  );
};

export default Search;
