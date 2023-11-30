import React from 'react';
import styles from './css/MainTitleButton.module.css';

export default function MainTitleButton({callbackUpdate}) {

    const onHandlerButtonClick = () => {
        callbackUpdate();
    } 

    return (
        <button className={styles['main-title-button']} type='button' onClick={onHandlerButtonClick}>U</button>
    )
}
