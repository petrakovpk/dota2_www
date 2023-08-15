import type {
    MatchAiResult
} from './types'

const LOCAL_URL = 'http://127.0.0.1:8080';
const PROD_URL = 'http://194.67.103.134:32769';
const BASE_URL = PROD_URL;

export const fetchMatchAiResult = async (
    model: string,
    radiant_rating: number,
    dire_rating: number,
): Promise<MatchAiResult> => {
    const response = await fetch(
        BASE_URL + `/api/predict?model=${model}&radiantRating=${radiant_rating}&direRating=${dire_rating}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    );
    const result = await response.json();

    return result;
};
