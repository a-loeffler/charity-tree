import { useState } from "react";
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
        <div class="results-toggle-container">
            <div class="sort-section">
                <button class={`${showCategories === true ? "selected-toggle" : "results-toggle-button"}`} onClick={e => toggleActions(e)}>Sort by category</button>
                {showCategories && <div class="sort-categories-list-container">
                    <ul class="sort-categories-list">
                        {allCategories.map((category, index) => <li className="sort-category" key={index} onClick={() => selectCategory(category)}>{category}</li>)}
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default SearchFilter;