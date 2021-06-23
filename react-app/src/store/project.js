const SET_DESCRIPTION = "session/SET_DESCRIPTION"

const setDescription = (description) => ({
    type: SET_DESCRIPTION,
    payload: description
})

export const postNewDescription = (newDescription, id) => async (dispatch) => {
    const response = await fetch(`/api/projects/${id}/edit`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDescription), // this needs to be an object??
    })
    const data = await response.json()
    dispatch(setDescription(data))
}

const initialState = {description: ''}

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DESCRIPTION:
            return {description: action.payload}
        default:
            return state;
    }
}
