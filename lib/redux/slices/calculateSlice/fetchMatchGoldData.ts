import type {
    MatchGoldData
} from './types'

const localURL = 'http://127.0.0.1:7070';
const prodURL = 'http://194.67.103.134:32769';
const baseURL = localURL;

export const fetchMatchGoldData = async (
    radiant_team_id: number,
    dire_team_id: number,
): Promise<MatchGoldData> => {
    const response = await fetch(
        baseURL + `/api/v1.0/matches_gold_data/get_matches_gold_data?team_radiant_id=${radiant_team_id}&team_dire_id=${dire_team_id}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    );
    const result = await response.json();

    return result;
};
