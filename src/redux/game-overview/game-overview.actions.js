import GameOverviewTypes from './game-overview.types';

export const fetchGameStart = slug => ({
  type: GameOverviewTypes.FETCH_GAME_START,
  payload: slug
});

export const fetchGameSuccess = game => ({
  type: GameOverviewTypes.FETCH_GAME_SUCCESS,
  payload: game
});

export const fetchGameFailure = error => ({
  type: GameOverviewTypes.FETCH_GAME_FAILURE,
  payload: error
});

export const fetchSimilarGamesStart = slug => ({
  type: GameOverviewTypes.FETCH_SIMILAR_START,
  payload: slug
});

export const fetchSimilarGamesSuccess = games => ({
  type: GameOverviewTypes.FETCH_SIMILAR_SUCCESS,
  payload: games
});

export const fetchSimilarGamesFailure = error => ({
  type: GameOverviewTypes.FETCH_SIMILAR_FAILURE,
  payload: error
});

export const fetchYoutubeUrlStart = slug => ({
  type: GameOverviewTypes.FETCH_YOUTUBE_URL_START,
  payload: slug
});

export const fetchYoutubeUrlSuccess = urls => ({
  type: GameOverviewTypes.FETCH_YOUTUBE_URL_SUCCESS,
  payload: urls
});

export const fetchYoutubeUrlFailure = error => ({
  type: GameOverviewTypes.FETCH_YOUTUBE_URL_FAILURE,
  payload: error
});