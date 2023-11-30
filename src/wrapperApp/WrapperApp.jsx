import React from 'react';
import { useState, useEffect, useRef } from 'react';

// Функции для работы с API сервера
import { _create, _read, _update, _delete } from '../api/api';

import MainTitleWr from '../components/title/wrapper/MainTitleWr';
import NotesList from '../components/notes/list/NotesList';
import WrapperAddNote from '../components/addNote/wrapper/WrapperAddNote';

import styles from './css/WrapperApp.module.css';


// Приложение
export default function WrapperApp() {
  const [notes, setNotes] = useState();

  // получаем массив заметок
  const getNotes = () => {
    (async () => {
      const result = await _read();
      setNotes(result);
    })()
  }

  // Добавляет заметку
  const addNote = (note) => {

    (async () => {
      try {
        await _create(note);
        getNotes();
       } catch(error) {
        console.log(error);
       }
    })();
     
  }

  // удаляет заметку
  const deleteNotes = (item) => {
    (async () => {

      try {
        // удаляем
        await _delete(item);
        // загружаем
        getNotes();
      } catch (error) {
        console.log(error)
      }

    })();
  }


  useEffect(getNotes, []);


  return (
    <div className={styles['wrapper-app']}>
        <MainTitleWr callback={getNotes}/>
        { notes?.length === 0 ? 'Add notes' : (
          <NotesList 
            notes={notes}
            callbackDelete={deleteNotes}
          />
        ) }
        <WrapperAddNote callbackAddNote={addNote}/>
    </div>
  )
}
