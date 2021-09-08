const GET_LIKES = "session/GET_LIKES"

const getLikes = (likes) => ({
    type: GET_LIKES,
    payload: likes
})

export const getUserLikes = (id) => async (dispatch) => {
    console.log('))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))')
    const response = await fetch(`/api/likes/${id}`)
    const data = await response.json()
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++', data)
    dispatch(getLikes(data))
}

const initialState = {likes: []}

export default function userLikesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIKES:
            return state.likes = action.payload
        default:
            return state;
    }
}
