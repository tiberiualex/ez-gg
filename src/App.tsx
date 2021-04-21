import React, { FC } from 'react';
import './App.css';
import client from './client/client';
import SummonerForm from './components/SummonerForm/SummonerForm';
// import SummonerInformation from './SummonerInformation/SummonerInformation';

const App: FC = () => {
  const showSummoner = async (summonerName: string): Promise<void> => {
    const summoner = await client.getSummoner(summonerName);
    const league = await client.getSummonerLeagues(summoner.id);
    console.log(league);
  };

  return (
    <div className="App">
      <h1>EZ GG</h1>
      <SummonerForm handleSearch={showSummoner} />
    </div>
  );
};

export default App;
