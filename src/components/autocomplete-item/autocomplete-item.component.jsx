import React from 'react';
import { withRouter } from 'react-router-dom';

import './autocomplete-item.styles.scss';

import { getCroppedImage } from '../../utils/utils';

const AutocompleteItem = ({ game, history }) => {
  const visitTheGame = () => {
    history.push(`/games/${game.slug}`)
  }

  return (
    <div className='autocomplete-item' onClick={visitTheGame}>
      <div className='autocomplete-item__overlay'>
        <div className='autocomplete-item__image_wrapper'>
          <span 
          className='autocomplete-item__image'
          style={{
            backgroundImage: `url(${getCroppedImage(game.background_image, "resize/420/-/")})`
          }}
          ></span>
        </div>
        <p className='autocomplete-item__name'>
          {game.name}
        </p>
      </div>
      <p className='autocomplete-item__platforms'>
        Platforms: 
        {
          game.platforms ? game.platforms.map(platform => <span className='autocomplete-item__platform-name' key={platform.platform.slug}>{platform.platform.name}</span>) : ' Will be added soon'
        }
      </p>
    </div>
  )
}

export default withRouter(AutocompleteItem);