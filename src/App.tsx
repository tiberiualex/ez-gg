import React from 'react';
import './App.css';
import SummonerForm from './SummonerForm/SummonerForm';
import client from './client/client';

const App: React.FC = () => {
  const showSummoner = async (summonerName: string): Promise<void> => {
    const summoner = await client.getSummoner(summonerName);
    console.log(summoner);
  };

  return (
    <div className="App">
      <h1>EZ GG</h1>
      <SummonerForm handleSearch={showSummoner} />
    </div>
  );
};

export default App;
