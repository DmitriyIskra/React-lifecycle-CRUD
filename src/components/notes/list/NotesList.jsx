import React from 'react';

import './css/NotesList.css';

import { v4 } from 'uuid';

import NoteItem from '../item/NoteItem';
import NotesCloseButton from '../button/NotesCloseButton';

export default function NotesList({notes, callbackDelete}) {
  
  return (
    <ul className='notes-list'>
      {notes && notes.map( item => {
          return (
              <NoteItem key={v4()}  data={item}>
                  <NotesCloseButton callbackDelete={callbackDelete}/>
              </NoteItem>
          )
      } )}
    </ul>
  )
}
