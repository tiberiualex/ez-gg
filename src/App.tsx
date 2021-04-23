import React, { FC } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './state/hooks';
import SummonerForm from './components/SummonerForm/SummonerForm';
import { getSummonerByName } from './state/slices/summonerSlice';
import { selectors } from './state/slices/summonerSlice';
import store from './state/store';
import SummonerInformation from './components/SummonerInformation/SummonerInformation';

const App: FC = () => {
  const dispatch = useAppDispatch();

  const showSummoner = (summonerName: string): void => {
    dispatch(getSummonerByName(summonerName));
  };

  const summoner = useAppSelector((state) => state.summoner);
  const leagues = selectors.selectAll(store.getState());

  return (
    <div className="App">
      <h1>EZ GG</h1>
      <SummonerForm handleSearch={showSummoner} />
      {/* replace this with leagues loaded state check */}
      {summoner.summoner && <SummonerInformation leagues={leagues} summonerName={summoner.summoner?.name} />}
    </div>
  );
};

export default App;
