export type Tier =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER';

export type Rank = 'I' | 'II' | 'III' | 'IV';

export type Queue = 'RANKED_SOLO_5x5';

export type Puuid = string;

export type Summoner = {
  id: string;
  accountId: string;
  puuid: Puuid;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export type League = {
  leagueId: string;
  queueType: Queue;
  tier: Tier;
  rank: Rank;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
};

export type MatchId = string;

export type Participant = {
  assists: number;
  championName: string;
  deaths: number;
  kills: number;
  totalMinionsKilled: number;
};

export type MatchHistory = {
  metadata: {
    participants: Array<MatchId>;
  };
  participants: Array<Participant>;
};
