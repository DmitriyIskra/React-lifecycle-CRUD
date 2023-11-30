import React from 'react';

import styles from './css/NoteItem.module.css';

export default function NoteItem({children, data}) {
  return (
    <li className={`${styles['item']} note-item`} id={data.id}>
      {children}
      {data.content}
    </li>
  )
}
 