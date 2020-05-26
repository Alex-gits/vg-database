import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './header.styles.scss';

import Autocomplete from '../autocomplete/autocomplete.component';

import { ReactComponent as Logo } from '../../assets/game.svg';

import { fetchSearchResultsStart } from '../../redux/search/search.actions';
import { selectSearchResults } from '../../redux/search/search.selectors';

const whiteColor = {
  color: '#fff'
}

const Header = ({ fetchSearch, location, switchStatus, status }) => {
  const [focused, changeFocus] = useState(false);
  const [inputValue, changeValue] = useState('');

  useEffect(() => {
    return () => {
      changeValue('');
      fetchSearch('');
    }
  }, [location.pathname, fetchSearch]);

  const searchBegin = e => {
    const {value} = e.target;
    changeValue(value);

    fetchSearch(value);
  }

  const switchFocus = () => {
    setTimeout(() => changeFocus(focused => !focused), 200)
  }

  return (
    <div className='header'>
      <div className='logo-container'>
        <span><Logo className='logo' /></span>
      </div>
      <div className='header__title'>
        VG DATABASE
      </div>

      <div className='header__input-wrapper'>
        <span className='header__input-icon'>
          <i className="fas fa-search"></i>
        </span>
        <input 
          type="text"
          value={inputValue}
          onBlur={switchFocus} 
          onFocus={switchFocus}
          onChange={searchBegin}
          className='header__input' 
          placeholder='Search...' 
        />
      </div>

      <div className='header__link-wrapper'>
        <p className='link-info'>Powered by</p>
        <p className='rawg'><a href="https://rawg.io/apidocs" rel="noopener noreferrer" target="_blank">RAWG</a></p>
      </div>
      {
        focused ? <Autocomplete focused={focused} /> : null
      }
      <div className='header__button-wrapper'>
        <button onClick={switchStatus} className='header__button-menu' style={status ? null : whiteColor}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchSearch: value => (dispatch(fetchSearchResultsStart(value)))
})

const mapStateToProps = createStructuredSelector({
  searchedGames: selectSearchResults
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));