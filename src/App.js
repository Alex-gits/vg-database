import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import SideMenu from './components/side-menu/side-menu.component';
import Content from './components/content/content.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='directory'>
        <SideMenu />
        <Content />
      </div>
    </div>
  );
}

export default App;
