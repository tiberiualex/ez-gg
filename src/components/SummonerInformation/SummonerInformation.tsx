import React, { FC } from 'react';
import { League } from '../../contracts/riotContracts';

type SummonerInformationProps = {
  leagues: Array<League>;
  summonerName: string;
};

const SummonerInformation: FC<SummonerInformationProps> = (props) => {
  return (
    <div className="summoner-information">
      <span>{props.summonerName}</span>
      <ul className="leagues">
        {props.leagues.map((l) => {
          return <li key={props.summonerName + l.queueType}>{l.tier}</li>;
        })}
      </ul>
    </div>
  );
};

export default SummonerInformation;
