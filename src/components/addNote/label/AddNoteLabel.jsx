import React from 'react';

import styles from './css/AddNoteLabel.module.css';

export default function AddNoteLabel() {
  return (
    <label className={styles['add-note-label']} htmlFor="add-note">New Note</label>
  )
}
