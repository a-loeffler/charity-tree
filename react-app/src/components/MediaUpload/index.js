import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import './index.css'

import {postNewMedia} from '../../store/media';


const MediaUpload = () => {
    const dispatch = useDispatch();
    const [mediaFile, setMediaFile] = useState(null)


    const updateFile = (e) => {
        const file = e.target.files[0];

        if (file) setMediaFile(file);
    }


    const handleSubmit= (e) => {
        e.preventDefault();

        const mediaData = {projectId: 1, file: mediaFile}

        dispatch(postNewMedia(mediaData))
            .then(() => {
                setMediaFile(null);
            })
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="media-file-upload" />
                <input
                    type="file"
                    id="media-file-upload"
                    accept="image/*"
                    onChange={(e) => updateFile(e)}>
                </input>
                <button type="submit">Upload</button>
            </form>
        </>
    )
}

export default MediaUpload;
