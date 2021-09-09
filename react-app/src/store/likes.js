const GET_LIKES = "session/GET_LIKES"
const ADD_LIKE = "session/ADD_LIKE"
const REMOVE_LIKE = "session/REMOVE_LIKE"

const getLikes = (likes) => ({
    type: GET_LIKES,
    payload: likes
})

const addLike = (like) => ({
    type: ADD_LIKE,
    payload: like
})

const removeLike = (like) => ({
    type: REMOVE_LIKE,
    payload: like
})

export const getUserLikes = (id) => async (dispatch) => {
    console.log('))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))')
    const response = await fetch(`/api/likes/${id}`)
    const data = await response.json()
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++', data)
    dispatch(getLikes(data))
}

export const addNewLike = (userId, projectId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${userId}/add`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: projectId
    })
    const data = await response.json()
    dispatch(addLike(data))
}

export const removeALike = (userId, projectId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${userId}/remove`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'DELETE',
        body: projectId
    })
    const data = await response.json()
    console.log(data)
    dispatch(removeLike(data))
}

const initialState = {likes: []}
let newState

export default function userLikesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIKES:
            return state.likes = action.payload
        case ADD_LIKE:
            newState = {...state}
            newState.likes = [...newState.likes, action.payload]
            return newState
        case REMOVE_LIKE:
            return state.likes = action.payload
        default:
            return state;
    }
}
