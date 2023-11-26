import React from 'react';
import './css/MainTitleButton.css';

export default function MainTitleButton({callbackUpdate}) {

    const onHandlerButtonClick = () => {
        callbackUpdate();
    } 

    return (
        <button className='main-title-button' type='button' onClick={onHandlerButtonClick}>U</button>
    )
}
