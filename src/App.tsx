import React, { FC } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import SummonerForm from './components/SummonerForm/SummonerForm';
import { getSummonerByName } from './state/slices/summonerSlice';
// import SummonerInformation from './SummonerInformation/SummonerInformation';

const App: FC = () => {
  const dispatch = useDispatch();

  const showSummoner = (summonerName: string): void => {
    dispatch(getSummonerByName(summonerName));
  };

  return (
    <div className="App">
      <h1>EZ GG</h1>
      <SummonerForm handleSearch={showSummoner} />
    </div>
  );
};

export default App;
