import React from 'react';

import './css/NoteItem.css';

export default function NoteItem({children, data}) {
  return (
    <li className='note-item' id={data.id}>
      {children}
      {data.content}
    </li>
  )
}
 