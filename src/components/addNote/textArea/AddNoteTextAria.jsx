import React from 'react';
import styles from './css/TextAria.module.css';

export default function AddNoteTextAria() {
  return (
    <textarea className={styles['add-note-textarea']} id='add-note-textarea' name="addNote">
      
    </textarea>
  )
}
