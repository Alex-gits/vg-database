import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './autocomplete.styles.scss';

import AutocompleteItem from '../autocomplete-item/autocomplete-item.component';

import { selectSearchResults } from '../../redux/search/search.selectors';

const Autocomplete = ({ searchedGames }) => {
  return (
    <div className='autocomplete'>
      {
        searchedGames ? searchedGames.map(game => <AutocompleteItem key={game.id} game={game} />) : null
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  searchedGames: selectSearchResults
})

export default connect(mapStateToProps)(Autocomplete);