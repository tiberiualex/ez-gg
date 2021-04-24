import { createSlice, createAsyncThunk, createEntityAdapter, EntityAdapter } from '@reduxjs/toolkit';
import { Summoner, League, SummonerId } from '../../contracts/riotContracts';
import client from './../../client/client';
import { RootState } from './../store';

const summonerAdapter: EntityAdapter<League> = createEntityAdapter({
  selectId: (league) => league.leagueId,
});

// move to a separate file
type LoadingState = 'Loading' | 'Loaded' | 'Error' | 'NotLoaded';

type SummonerState = {
  summoner?: Summoner;
  loaded: LoadingState;
};

const initialState: SummonerState = {
  loaded: 'NotLoaded',
};

export const getSummonerLeagues = createAsyncThunk('summoner/getLeagues', async (id: SummonerId) => {
  return await client.getSummonerLeagues(id);
});

export const getSummonerByName = createAsyncThunk('summoner/getSummoner', async (name: string, thunkApi) => {
  const result = await client.getSummoner(name);
  thunkApi.dispatch(getSummonerLeagues(result.id));
  return result;
});

export const selectors = summonerAdapter.getSelectors((state: RootState) => state.summoner);

const summonerSlice = createSlice({
  name: 'summoner',
  initialState: summonerAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummonerByName.fulfilled, (state, action) => {
        state.summoner = action.payload;
      })
      .addCase(getSummonerLeagues.fulfilled, (state, action) => {
        summonerAdapter.setAll(state, action.payload);
      });
  },
});

export default summonerSlice.reducer;
