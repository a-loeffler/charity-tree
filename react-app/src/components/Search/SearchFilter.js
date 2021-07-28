


const SearchFilter = () => {
    


    return (
        <div class="results-toggle-container">
            <div class="sort-section">
                <button class="results-toggle-button">Sort by category</button>
                <div class="sort-categories-list-container">
                    <ul class="sort-categories-list">
                        {allCategories.map((category, index) => <li className="sort-category" key={index}>{category}</li>)}
                        <li class="sort-category">Cancer</li>
                        <li class="sort-category">Awareness</li>
                        <li class="sort-category">Terminally Ill Children</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}