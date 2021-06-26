import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';


import './index.css'


const RedirectModal = () => {

    const history = useHistory();
    const [timeDone, setTimeDone] = useState(false)



    setTimeout(() => {
        setTimeDone(true);
    }, 2001)



    if (timeDone) {
        history.push('/signup')
    }


    return (
        <div className="redirect-modal-container">
            <h1 className="redirect-modal-title">Users must be logged in to create a project</h1>
            <button className="return-button"></button>
        </div>
    )

}


export default RedirectModal
