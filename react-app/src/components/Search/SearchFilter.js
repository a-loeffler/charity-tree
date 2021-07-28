import React, { useState } from "react";
import { useSelector } from "react-redux";


const SearchFilter = ({setFilterCategory}) => {

    const [showCategories, setShowCategories] = useState(false);

    const allCategories = useSelector(state => state.allCategories.categories)

    const toggleActions = (e) => {
        e.preventDefault();

        setShowCategories(!showCategories);
    }


    const selectCategory = (category) => {

        setFilterCategory(category)
    }

    return (
        <div className="results-toggle-container">
            <div className="sort-section">
                <button className={`${showCategories === true ? "selected-toggle" : "results-toggle-button"}`} onClick={e => toggleActions(e)}>Sort by category</button>
                {showCategories && <div className="sort-categories-list-container">
                    <ul className="sort-categories-list">
                        {allCategories.map((category, index) => <li className="sort-category" key={index} onClick={() => selectCategory(category.id)}>{category.name}</li>)}
                        <li className="sort-category red-button" onClick={() => selectCategory(null)}>Clear Filters</li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default SearchFilter;
