import React from 'react';

import MainTitleText from '../text/MainTitleText';
import MainTitleButton from '../button/MainTitleButton';

import './css/MainTitleWr.css';

export default function MainTitleWr({callback}) {
  return (
    <div className='main-title-wrapper'>
      <MainTitleText />
      <MainTitleButton callbackUpdate={callback}/>
    </div>
  )
}
