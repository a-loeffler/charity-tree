const SET_ALL_TIERS = "session/SET_TIERS"


const setAllTiers = (tiers) => (
    {
        type: SET_ALL_TIERS,
        payload: tiers
    }
)


export const getAllTiers = () => async (dispatch) => {
    const response = await fetch(`/api/tiers/`)
    const data = await response.json()
    dispatch(setAllTiers(data))
}


const initialState = {tiers: []}

const allTiersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_TIERS: {
            let newState = {...state}
            newState.tiers = action.payload
            return newState;
        }
        default: {
            return state;
        }
    }
}



export default allTiersReducer;
