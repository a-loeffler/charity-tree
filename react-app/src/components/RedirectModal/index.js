import React, {useState} from 'react';
import { useHistory } from 'react-router';


import './index.css'


const RedirectModal = ({destination, message}) => {


    const history = useHistory();
    const [timeDone, setTimeDone] = useState(false)



    setTimeout(() => {
        setTimeDone(true);
    }, 2001)



    if (timeDone) {
        history.push(destination)
    }


    return (
        <div className="redirect-modal-container">
            <h1 className="redirect-modal-title">{message}</h1>
            <button className="return-button"></button>
        </div>
    )

}


export default RedirectModal
