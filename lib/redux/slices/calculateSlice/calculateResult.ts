type MatchGoldData = {
    team_radiant_id: number;
    team_dire_id: number;
    parameter_1: string;
    parameter_2: string;
    parameter_3: string;
    parameter_4: string;
    parameter_5: string;
};

const localURL = 'http://127.0.0.1:7070';
const prodURL = 'http://194.67.103.134:32769';
const baseURL = localURL;

export const fetchMatchGoldData = async (
    radiant_team_id: number,
    dire_team_id: number,
): Promise<MatchGoldData> => {
    const response = await fetch(
        baseURL + `/api/v1.0/matches_gold_data/get_match_gold_data?radiant_team_id=${radiant_team_id}&dire_team_id=${dire_team_id}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    );
    const result = await response.json();

    return result;
};
