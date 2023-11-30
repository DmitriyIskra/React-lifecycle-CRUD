import React from 'react';

import MainTitleText from '../text/MainTitleText';
import MainTitleButton from '../button/MainTitleButton';

import styles from './css/MainTitleWr.module.css';

export default function MainTitleWr({callback}) {
  return (
    <div className={styles['main-title-wrapper']}>
      <MainTitleText />
      <MainTitleButton callbackUpdate={callback}/>
    </div>
  )
}
