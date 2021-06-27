const SET_ALL_DONORS = "session/SET_DONORS"
const ADD_DONOR = "session/ADD_DONOR"

const setAllDonors = (donors) => {
    return {
        type: SET_ALL_DONORS,
        payload: donors
    }
}

const addDonor = (donor) => {
    return  {
        type: ADD_DONOR,
        payload: donor
    }
}


export const getAllDonors = () => async (dispatch) => {
    const response = await fetch(`/api/donors/`)
    const data = await response.json()
    dispatch(setAllDonors(data))
}

export const addADonor = (newDonorData) => async (dispatch) => {
    const {project_id, user_id, amount} = newDonorData;
    console.log(`!!!ADD-A-DONOR-THUNK'S-NEW-DONOR-DATA!!!${JSON.stringify(newDonorData)}`)
    const formData = new FormData();
    formData.append(project_id, user_id, amount)
    const response = await fetch(`/api/donors/add`, {
        method: "POST",
        body: formData
    })

    const data = await response.json();

    dispatch(addDonor(data))
}

const initialState = {donors: []}

const allDonorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_DONORS: {
            let newState = {...state}
            newState.donors = action.payload
            return newState;
        }
        case ADD_DONOR: {
            let newState = {...state};
            newState.newDonor = action.payload
            return newState
        }
        default: {
            return state;
        }
    }
}



export default allDonorsReducer;
