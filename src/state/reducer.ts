import { combineReducers } from '@reduxjs/toolkit';
import summonerReducer from './slices/summonerSlice';

const rootReducer = combineReducers({
  summoner: summonerReducer,
});

export default rootReducer;
