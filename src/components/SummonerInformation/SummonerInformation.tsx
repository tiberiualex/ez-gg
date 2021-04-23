import React, { FC } from 'react';
import { League } from '../../contracts/riotContracts';
import LeagueComponent from '../League/League';

type SummonerInformationProps = {
  leagues: Array<League>;
  summonerName: string;
};

const SummonerInformation: FC<SummonerInformationProps> = (props) => {
  return (
    <div className="summoner-information">
      <h4>{props.summonerName}</h4>
      <ul className="leagues">
        {props.leagues.map((l) => (
          <LeagueComponent
            key={l.leagueId}
            rank={l.rank}
            tier={l.tier}
            queue={l.queueType}
            leaguePoints={l.leaguePoints}
            wins={l.wins}
            losses={l.losses}
          />
        ))}
      </ul>
    </div>
  );
};

export default SummonerInformation;
