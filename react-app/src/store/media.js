const SET_MEDIA = "media/setMedia"
const POST_MEDIA = "media/postMedia"

const setMedia = (mediaData) => {
    return {
        type: SET_MEDIA,
        payload: mediaData
    }
}


const postMedia = (mediaData) => {
    return {
        type: POST_MEDIA,
        payload: mediaData
    }
}


export const getMedia = () => async (dispatch) => {
    const response = await fetch("/api/media/")
    const data = await response.json();
    // console.log('----------------', data)
    dispatch(setMedia(data))
}


export const postNewMedia = (newMediaData) => async (dispatch) => {
    const { projectId, file} = newMediaData;

    const formData = new FormData();

    if (projectId) formData.append("projectId", projectId);
    formData.append("file", file);

    const response = await fetch("/api/projects/create/:id/upload", {
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
    // console.log(action)
    switch (action.type) {
        case SET_MEDIA: {
            let newState = {...state}
            // console.log('******************', action.payload.medias[0].media_url)
            action.payload.medias.forEach(url => {
                newState.media.push(url.media_url)
            });
            // HOW TO ACCESS THE MEDIA URL
            return newState
        }
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
