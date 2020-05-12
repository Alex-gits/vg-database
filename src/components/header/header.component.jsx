import React from 'react';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/game.svg'

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <span><Logo className='logo' /></span>
    </div>
    <div className='header__title'>
      VG GAMES
    </div>

    <div className='header__input-wrapper'>
      <span className='header__input-icon'>
        <i className="fas fa-search"></i>
      </span>
      <input type="text" className='header__input' placeholder='Search...' />
    </div>

    <div className='header__title-wrapper'>
      GAME DATABASE
    </div>
  </div>
)

export default Header;