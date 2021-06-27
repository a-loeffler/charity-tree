const SET_ALL_USERS = "session/SET_USERS"

const setAllUsers = (users) => ({
    type: SET_ALL_USERS,
    payload: users
})

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch(`/api/users/`)
    const data = await response.json()
    dispatch(setAllUsers(data))
}

const initialState = {users: []}

export default function allUsersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_USERS:
            return state.users = action.payload
        default:
            return state;
    }
}
