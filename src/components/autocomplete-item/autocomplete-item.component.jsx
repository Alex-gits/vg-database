import React from 'react';
import { withRouter } from 'react-router-dom';

import './autocomplete-item.styles.scss';

const AutocompleteItem = ({ game, history }) => {
  const visitTheGame = () => {
    history.push(`/games/${game.slug}`)
  }

  const gamePoster = game.background_image;
  const croppedPoster = gamePoster ? gamePoster.slice(0, 28) + "resize/420/-/" + gamePoster.slice(28) : 'https://optica-nadin.ru/static/img/no-img.png';

  return (
    <div className='autocomplete-item' onClick={visitTheGame}>
      <div className='autocomplete-item__overlay'>
        <div className='autocomplete-item__image_wrapper'>
          <span 
          className='autocomplete-item__image'
          style={{
            backgroundImage: `url(${croppedPoster})`
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
          game.platforms.map(platform => <span className='autocomplete-item__platform-name' key={platform.platform.slug}>{platform.platform.name}</span>)
        }
      </p>
    </div>
  )
}

export default withRouter(AutocompleteItem);