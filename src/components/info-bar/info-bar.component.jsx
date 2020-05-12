import React from 'react';
import { withRouter } from 'react-router-dom';

import './info-bar.styles.scss';


const InfoBar = ({ location }) => {
  let checkPath = location.pathname;

  if (checkPath === '/games') {
    return null
  } else return (
    <div className='info-bar'>
      <h3 className='info-bar__title'>SOME INFO</h3>
    </div>
  )
};

export default withRouter(InfoBar);