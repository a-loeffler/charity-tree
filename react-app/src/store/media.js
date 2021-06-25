const SET_MEDIA = "media/setMedia"
const POST_MEDIA = "media/postMedia"
const GET_MEDIA = "media/getMedia"

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

const getAllMedia = mediaData => {
    return {
        type: GET_MEDIA,
        payload: mediaData
    }
}

export const mediaGetter = () => async dispatch => {
    const response = await fetch(`/api/project_medias/`)
    const data = await response.json();
    dispatch(getAllMedia(data.project_medias))
}

export const getMedia = (id) => async (dispatch) => {
    const response = await fetch(`/api/projects/${id}/edit`)
    const data = await response.json();
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


const initialState = {updated_media_info: [], project_medias: [], temp_media: []};

const mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MEDIA: {
            state.project_medias = action.payload
            return state
        }
        case SET_MEDIA: {
            state.updated_media_info = action.payload.medias
            let newState = {...state}
            // console.log('action.payload', action.payload)
            // console.log('newState', newState)
            // action.payload.medias.forEach(url => {
            //     newState.updated_media_info.push(url.media_url)
            // });
            console.log(newState)
            return newState
        }
        case POST_MEDIA: {
            let newState = {...state};

            newState.temp_media.push(action.payload.mediaUrl)
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default mediaReducer;
