import { createSlice, createAsyncThunk, createEntityAdapter, EntityAdapter } from '@reduxjs/toolkit';
import { Summoner, League } from '../../contracts/riotContracts';
import client from './../../client/client';

const summonerAdapter: EntityAdapter<SummonerState> = createEntityAdapter();

type SummonerState = {
  summoner?: Summoner;
  leagues: {
    [key: string]: League;
  };
};

const initialState: SummonerState = {
  leagues: {},
};

const matchHistorySlice = createSlice({
  name: 'matches',
  initialState: summonerAdapter.getInitialState(initialState),
  reducers: {},
});

export default matchHistorySlice;
