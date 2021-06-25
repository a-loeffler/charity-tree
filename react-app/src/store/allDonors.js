const SET_ALL_DONORS = "session/SET_DONORS"


const setAllDonors = (donors) => (
    {
        type: SET_ALL_DONORS,
        payload: donors
    }
)


export const getAllDonors = () => async (dispatch) => {
    const response = await fetch(`/api/donors/`)
    const data = await response.json()
    dispatch(setAllDonors(data))
}


const initialState = {donors: []}

const allDonorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_DONORS: {
            let newState = {...state}
            newState.donors = action.payload
            return newState;
        }
        default: {
            return state;
        }
    }
}



export default allDonorsReducer;
