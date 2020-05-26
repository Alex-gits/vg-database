import React from 'react';

import './platform-selector.styles.scss';

const style = {
  color: '#eb3b5a',
  textDecoration: 'underline'
}

const PlatformSelector = ({ changePlatform, type }) => {
  const switchPlatform = e => {
    const platform = e.target.getAttribute('platform');

    changePlatform(+platform);
  }

  return (
    <div className='platform-selector'>
      <p className='platform-selector__title'>Platform:</p>
      <div className='platform-selector__wrapper'>
        <span 
          className='platform-selector__button' 
          style={type === 0 ? style : null} onClick={switchPlatform} 
          platform='0'
        >
          All
        </span>
        <span 
          className='platform-selector__button' 
          style={type === 1 ? style : null} 
          onClick={switchPlatform} 
          platform='1'
        >
          PC
        </span>
        <span 
          className='platform-selector__button' 
          style={type === 2 ? style : null} 
          onClick={switchPlatform} 
          platform='2'
        >
          PlayStation
        </span>
        <span 
          className='platform-selector__button' 
          style={type === 3 ? style : null} 
          onClick={switchPlatform} 
          platform='3'
        >
          Xbox
        </span>
        <span 
          className='platform-selector__button' 
          style={type === 7 ? style : null} 
          onClick={switchPlatform} 
          platform='7'
        >
          Nintendo
        </span>
        <span 
          className='platform-selector__button' 
          style={type === 4 ? style : null} 
          onClick={switchPlatform} 
          platform='4'
        >
          iOS
        </span>
        <span 
          className='platform-selector__button' 
          style={type === 8 ? style : null} 
          onClick={switchPlatform} 
          platform='8'
        >
          Android
        </span>
      </div>
    </div>
  )
};

export default PlatformSelector;