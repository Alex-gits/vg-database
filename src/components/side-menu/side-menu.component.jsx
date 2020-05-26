import React from 'react';
import { Link } from 'react-router-dom';

import './side-menu.styles.scss';

const SideMenu = ({ status, switchStatus }) => (
  <div className={`side-menu ${status ? 'side-menu__close' : '' }`} onClick={e => e.stopPropagation()}>
    <h3 className='side-menu__home'>
      <Link to='/'>HOME</Link>
    </h3>

    <h3 className='side-menu__home'>
      <Link to='/games'>ALL GAMES</Link>
    </h3>

    <h3 className='side-menu__home'>
      <Link to='/genres'>GENRES</Link>
    </h3>

    <div className='side-menu__box'>
      <p className='box-title'>New Releases</p>
      <ul className='box-list'>
        <li className="box-list__item">
          <Link className='box-list__link' to='/releases/last-month'>
            <i className="fas fa-star"></i>
            Last month
          </Link>
        </li>
        <li className="box-list__item">
          <Link className='box-list__link' to='/releases/last-week'>
            <i className="fas fa-fire"></i>
            Last week
          </Link>
        </li>
        <li className="box-list__item">
          <Link className='box-list__link' to='/releases/next-week'>
            <i className="fas fa-fast-forward"></i>
            Next week
          </Link>
        </li>
      </ul>
    </div>

    <div className='side-menu__box'>
      <p className='box-title'>Top Games</p>
      <ul className='box-list'>
        <li className="box-list__item">
          <Link className='box-list__link' to='/top/best-of-the-year'>
            <i className="fas fa-trophy"></i>
            Best of the year
          </Link>
        </li>
        <li className="box-list__item">
          <Link className='box-list__link' to='/top/best-of-2018'>
            <i className="fas fa-bolt"></i>
            Best of 2018
          </Link>
        </li>
        <li className="box-list__item">
          <Link className='box-list__link' to='/top/best-of-all-time'>
            <i className="fas fa-crown"></i>
            All time top 100
          </Link>
        </li>
      </ul>
    </div>

    <div className='box-list__button-wrapper'>
      <i onClick={switchStatus} className="box-list__close-button fas fa-times"></i>
    </div>
  </div>
);

export default SideMenu;