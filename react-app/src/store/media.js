

const POST_MEDIA = "media/postMedia"



const postMedia = (mediaData) => {
    return {
        type: POST_MEDIA,
        payload: mediaData
    }
}





export const postNewMedia = (newMediaData) => async (dispatch) => {
    const { projectId, file} = newMediaData;

    const formData = new FormData();

    if (projectId) formData.append("projectId", projectId);
    formData.append("file", file);

    const response = await fetch("/api/media/upload", {
        method: "POST",
        // headers: {
        //     'Content-Type': 'multipart/form-data'
        // },
        body: formData,
    })

    const data = await response.json();

    dispatch(postMedia(data));
}


const initialState = {media: []};

const mediaReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case POST_MEDIA: {
            let newState = {...state};
            //state.media is an array

            newState.media.push(action.payload.mediaUrl)
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default mediaReducer;
