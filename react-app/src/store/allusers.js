const SET_ALL_USERS = "session/SET_USERS"
const UPDATE_USER = "session/UPDATE_USER"

const setAllUsers = (users) => ({
    type: SET_ALL_USERS,
    payload: users
})

const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user
})

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch(`/api/users/`)
    const data = await response.json()
    dispatch(setAllUsers(data))
}

export const updateUserInfo = (user) => async (dispatch) => {
    const response = await fetch(`api/users/update`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    dispatch(updateUser(data))
}

const initialState = {users: []}

export default function allUsersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_USERS:
            return state.users = action.payload
        case UPDATE_USER:
            const newState = {...state}
            const target = newState.allUsers.users.filter(item => item.id === action.payload.id)
            target = action.payload
            return newState
        default:
            return state;
    }
}
