import { createSlice, createAsyncThunk, createEntityAdapter, EntityAdapter } from '@reduxjs/toolkit';
import { Summoner, League, SummonerId } from '../../contracts/riotContracts';
import client from './../../client/client';
// import { normalize, schema } from 'normalizr';

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

export const getSummonerLeagues = createAsyncThunk('summoner/getLeagues', async (id: SummonerId) => {
  return await client.getSummonerLeagues(id);
});

export const getSummonerByName = createAsyncThunk('summoner/getSummoner', async (name: string, thunkApi) => {
  const result = await client.getSummoner(name);
  thunkApi.dispatch(getSummonerLeagues(result.id));
  return result;
});

const summonerSlice = createSlice({
  name: 'summoner',
  initialState: summonerAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummonerByName.fulfilled, (state, action) => {
        console.log('getSummmonerByName::fetched', state, action);
        state.summoner = action.payload;
      })
      .addCase(getSummonerLeagues.fulfilled, (state, action) => {
        console.log('getSummonerLeagues::fetched', state, action);
      });
  },
});

export default summonerSlice.reducer;
