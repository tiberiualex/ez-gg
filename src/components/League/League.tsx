import React, { FC } from 'react';
import { Rank, Queue, Tier } from './../../contracts/riotContracts';

type LeagueProps = {
  rank: Rank;
  tier: Tier;
  queue: Queue;
  leaguePoints: number;
  wins: number;
  losses: number;
};

const League: FC<LeagueProps> = (props) => {
  return (
    <>
      <span>{props.queue} | </span>
      <span>{props.tier} | </span>
      <span>{props.rank} | </span>
      <span>{props.wins} | </span>
      <span>{props.losses} | </span>
      <br />
    </>
  );
};

export default League;
