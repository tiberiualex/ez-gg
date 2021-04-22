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

export const getSummonerByName = createAsyncThunk('summoner/getSummoner', async (name: string) => {
  return await client.getSummoner(name);
});

// const getSummonerLeagues = createAsyncThunk('summoner/getLeagues', async (puuid: Puuid) => {
//   return await client.getSummonerLeagues(puuid);
// });

const summonerSlice = createSlice({
  name: 'summoner',
  initialState: summonerAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSummonerByName.fulfilled, (state, action) => {
      console.log('fetched');
      state.summoner = action.payload;
    });
  },
});

export default summonerSlice.reducer;
