import config from '../config/config';
import { Routes } from './routes';
import axios, { AxiosInstance } from 'axios';
import { Summoner, League, Puuid, MatchId, MatchDetails } from '../contracts/riotContracts';

// refactor it to use a factory wrapped by a memoize fn by apikey
class RiotClient {
  private static clientInstance: RiotClient;
  private axiosInstance: AxiosInstance;
  private apiKey: string;
  private baseUrl: string;

  private constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({
      headers: {
        'X-Riot-Token': this.apiKey,
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    });
  }

  public static getClient(): RiotClient {
    if (RiotClient.clientInstance === undefined) {
      RiotClient.clientInstance = new RiotClient(config.apiKey, config.baseUrl);
    }

    return RiotClient.clientInstance;
  }

  public async getSummoner(summonerName: string): Promise<Summoner> {
    const response = await this.axiosInstance.request<Summoner>({
      url: `${this.baseUrl}${Routes.SummonerName}${summonerName}`,
    });

    return response.data;
  }

  public async getSummonerLeagues(encryptedSummonerId: Puuid): Promise<Array<League>> {
    const response = await this.axiosInstance.request<Array<League>>({
      url: `${this.baseUrl}${Routes.League}${encryptedSummonerId}`,
    });

    return response.data;
  }

  public async getSummonerMatches(encryptedSummonerId: Puuid): Promise<Array<MatchId>> {
    const response = await this.axiosInstance.request<Array<MatchId>>({
      url: `${this.baseUrl}${Routes.Matches.replace('{puuid}', encryptedSummonerId)}`,
    });

    return response.data;
  }

  public async getMatchInfo(matchId: MatchId) : Promise<MatchDetails> {
    const response = await this.axiosInstance.request<MatchDetails>({
      url: `${this.baseUrl}${Routes.MatchDetails}${matchId}`,
    });

    return response.data;
  }
}

export default RiotClient.getClient();
