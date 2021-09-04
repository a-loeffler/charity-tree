const SET_PAGE_HTML = "session/SET_PAGE_HTML"
const POST_NEW_PROJECT = "project/POST_NEW_PROJECT"

const setPageHTML = (pageHTML) => ({
    type: SET_PAGE_HTML,
    payload: pageHTML
})


const postProject = (projectData) => (
    {
        type: POST_NEW_PROJECT,
        payload: projectData
    }
)


export const postNewPageHTML = (newPageHTML, id) => async (dispatch) => {
    const response = await fetch(`/api/projects/${id}/edit`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPageHTML),
    })
    const data = await response.json()
    dispatch(setPageHTML(data))
    return data
}


export const postNewProject = (project, tiers) => async (dispatch) => {
    const response = await fetch('/api/projects/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({project, tiers})
    })
    const data = await response.json()
    dispatch(postProject(data))
}


const initialState = {pageHTML: '', projectInfo: {}}

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE_HTML: {
            return {pageHTML: action.payload.html}
        }
        case POST_NEW_PROJECT: {
            const newState = {...state};
            newState.projectInfo = action.payload;
            return newState
        }
        default:
            return state;
    }
}
