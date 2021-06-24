const SET_ALL = "session/SET_CATEGORIES"

const setAll = (categories) => ({
    type: SET_ALL,
    payload: categories
})

export const getAllCategories = () => async (dispatch) => {
    const response = await fetch(`/api/categories/`)
    const data = await response.json()
    dispatch(setAll(data))
}

const initialState = {categories: []}

export default function allCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL:
            console.log(`${JSON.stringify(action.payload)}*********************************** ${state.categories}`)
            return state.categories = action.payload
        default:
            return state;
    }
}
