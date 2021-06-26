const SET_PAGE_HTML = "session/SET_PAGE_HTML"

const setPageHTML = (pageHTML) => ({
    type: SET_PAGE_HTML,
    payload: pageHTML
})

export const postNewPageHTML = (newPageHTML, id) => async (dispatch) => {
    const response = await fetch(`/api/projects/${id}/edit`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPageHTML),
    })
    const data = await response.json()
    console.log('this will be state data', data)
    dispatch(setPageHTML(data))
    return data
}

const initialState = {pageHTML: ''}

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE_HTML:
            return {pageHTML: action.payload.html}
        default:
            return state;
    }
}
