import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectCard from "../LandingPage/ProjectCard";

const Search = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState("");

  const handleSearch = async (query) => {
    const res = await fetch(`/api/search/${query}`);
    const json = await res.json();
    setSearchResults(json);
  };

  useEffect(() => {
    handleSearch(query);
  });

  useEffect(() => {}, [searchResults]);

  return (
    <div>
      <h1>This is the Search Page</h1>
      {searchResults?.map((result) => {
        <ProjectCard
          title={result.name}
          cardId={result.id}
          description={result.description}
        />;
      })}
    </div>
  );
};

export default Search;
