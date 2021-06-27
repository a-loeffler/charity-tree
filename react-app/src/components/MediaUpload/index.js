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

        const mediaData = {file: mediaFile}

        dispatch(postNewMedia(mediaData))
            .then(() => {
                setMediaFile(null)
            })
    }

    // {`${mediaFile ? "media-submit-button" : "disabled"}`}


    return (
        <>
            <form className="media-upload-form" onSubmit={e => handleSubmit(e)}>
                <label htmlFor="media-file-upload" />
                <input
                    className="media-upload-input"
                    type="file"
                    id="media-file-upload"
                    accept="image/*,video/*"
                    onChange={(e) => updateFile(e)}>
                </input>
                <div className="media-submit-button-container">
                    <button className="media-submit-button" type="submit" onClick={e => handleSubmit(e)}>Upload</button>
                </div>
            </form>
        </>
    )
}

export default MediaUpload;
