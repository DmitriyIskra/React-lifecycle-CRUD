import React from 'react';

import styles from './css/NotesCloseButton.module.css';

export default function NotesCloseButton({callbackDelete}) {

    const onHandlerClick = (e) => {
        const id = e.target.closest('.note-item').id
        callbackDelete(id);
    }

    return (
        <div className={styles['notes-close-button']} onClick={onHandlerClick}>X</div>
    )
}
