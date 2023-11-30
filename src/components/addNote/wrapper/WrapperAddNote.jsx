import React from 'react';
import { v4 } from 'uuid';

import styles from './css/WrapperAddNote.module.css';

import AddNoteLabel from '../label/AddNoteLabel';
import AddNoteTextAria from '../textArea/AddNoteTextAria';
import AddNoteButton from '../button/AddNoteButton';

export default function WrapperAddNote({callbackAddNote}) {

  const onHandlerSubmit = (e) => {
    e.preventDefault();
    const text = e.target.addNote.value;

    if(text) {
      callbackAddNote(
        {
          id: v4(),
          content: text,
        }
      )
    }
  }

  return (
    <form className={styles['add-note-form']} onSubmit={onHandlerSubmit}>
        <AddNoteLabel />
        <AddNoteTextAria />
        <AddNoteButton />
    </form>
  )
}
