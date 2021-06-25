const SET_ALL = "session/SET_ALL"

const setAll = (projects) => ({
    type: SET_ALL,
    payload: projects
})

export const getAllProjects = () => async (dispatch) => {
    const response = await fetch(`/api/projects/`)
    const data = await response.json()
    console.log('this will be state data', data)
    dispatch(setAll(data))
}

const initialState = {projects: []}

export default function allProjectsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL:
            return state.projects = action.payload
        default:
            return state;
    }
}
