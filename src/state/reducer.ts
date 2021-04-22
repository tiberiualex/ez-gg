import { combineReducers } from '@reduxjs/toolkit';
import summonerReducer from './slices/summonerSlice';

const rootReducer = combineReducers({
  summonerReducer,
});

export default rootReducer;
