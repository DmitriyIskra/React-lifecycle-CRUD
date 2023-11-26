import React from 'react';

import './css/NotesCloseButton.css';

export default function NotesCloseButton({callbackDelete}) {

    const onHandlerClick = (e) => {
        const id = e.target.closest('.note-item').id
        callbackDelete(id);
    }

    return (
        <div className='notes-close-button' onClick={onHandlerClick}>X</div>
    )
}
