const SET_MEDIA = "media/setMedia"
const POST_MEDIA = "media/postMedia"
const GET_MEDIA = "media/getMedia"
const DELETE_TEMP_MEDIA = "media/deleteTempMedia"
const POST_MEDIA_TO_PROJECT = "media/postMediaToProject"

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

const deleteOneTempMedia = (deleteIndex) => {
    return {
        type: DELETE_TEMP_MEDIA,
        payload: deleteIndex,
    }
}

const postMediaToProject = (mediaData) => {
    return {
        type: POST_MEDIA_TO_PROJECT,
        payload: mediaData,
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
    const { file} = newMediaData;

    const formData = new FormData();

    // if (projectId) formData.append("projectId", projectId);
    formData.append("file", file);

    const response = await fetch(`/api/media/temp_upload`, {
        method: "POST",
        body: formData,
    })

    const data = await response.json();

    dispatch(postMedia(data));
}


export const deleteTempMedia = (deleteIndex) => async (dispatch) => {
    dispatch(deleteOneTempMedia(deleteIndex))
}


export const postProjectMedia = (mediaData, projectId) => async (dispatch) => {
    const response = await fetch(`/api/projects/${projectId}/add_media`)
    const data = await response.json();

    dispatch(postMediaToProject(data))
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
        case DELETE_TEMP_MEDIA: {
            let newState = {...state};
            let newTempMedia = newState.temp_media.slice();
            newTempMedia.splice(action.payload, 1);
            newState.temp_media = newTempMedia;
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default mediaReducer;
