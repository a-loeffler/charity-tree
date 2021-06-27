// const GET_DONATIONS = "donations/getDonations"
// const ADD_DONATIONS = "donations/getDonations"

// const getDonations = donations => {
//     return {
//         type: GET_DONATIONS,
//         payload: donations
//     }
// }

// const addDonations = (donations) => {
//     return {
//         type: ADD_DONATIONS,
//         payload: donations
//     }
// }


// export const donationsGetter = () => async dispatch => {
//     const response = await fetch(`/api/donors/`)
//     const data = await response.json();
//     dispatch(getDonations(data.donations))
// }

// export const postNewDonation = (newDonationData) => async (dispatch) => {
//     const { amount, projectId, userId} = newDonationData;

//     const formData = new FormData();

//     if (projectId) formData.append("amount", amount);
//     formData.append("projectId", projectId);
//     formData.append("userId", userId);

//     const response = await fetch("/api/donors/add", {
//         method: "POST",
//         // headers: {
//         //     'Content-Type': 'multipart/form-data'
//         // },
//         body: formData,
//     })

//     const data = await response.json();

//     dispatch(addDonations(data));
// }


// const initialState = {};

// const mediaReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_MEDIA: {
//             state.project_medias = action.payload
//             return state
//         }
//         case SET_MEDIA: {
//             state.updated_media_info = action.payload.medias
//             let newState = {...state}
//             // console.log('action.payload', action.payload)
//             // console.log('newState', newState)
//             // action.payload.medias.forEach(url => {
//             //     newState.updated_media_info.push(url.media_url)
//             // });
//             console.log(newState)
//             return newState
//         }
//         case POST_MEDIA: {
//             let newState = {...state};

//             newState.temp_media.push(action.payload.mediaUrl)
//             return newState;
//         }
//         default: {
//             return state;
//         }
//     }
// }

// export default mediaReducer;
