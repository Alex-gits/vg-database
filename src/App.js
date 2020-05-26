import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import SideMenu from './components/side-menu/side-menu.component';
import Content from './components/content/content.component';

function App({ location }) {
  const [menuStatus, changeStatus] = useState(true);

  useEffect(() => {
    return () => changeStatus(true);
  }, [location.pathname]);

  const switchStatus = () => {
    changeStatus(menuStatus => !menuStatus);
  };

  const closeMenu = () => {
    if (menuStatus === true) return;
    changeStatus(true);
  }
 
  return (
    <div className="App" onClick={closeMenu} onTouchMove={closeMenu}>
      <Header switchStatus={switchStatus} status={menuStatus} />
      <div className='directory'>
        <SideMenu status={menuStatus} changeStatus={changeStatus} switchStatus={switchStatus} />
        <Content />
      </div>
    </div>
  );
}

export default withRouter(App);
