import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../store/allusers';

export default function UpdateUser() {
    const dispatch = useDispatch();

    return(
        <>
            <button onClick={() => {
                return dispatch(updateUserInfo({email: "demo2@aa.io", id: 1, username: "Demo"}))
                }}>test</button>
        </>
    )
}