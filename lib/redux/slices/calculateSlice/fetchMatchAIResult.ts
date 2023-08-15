import type {
    MatchAiResult
} from './types'

const localURL = 'http://127.0.0.1:8080';
const prodURL = 'http://194.67.103.134:32769';
const baseURL = localURL;

export const fetchMatchAiResult = async (
    model: string,
    radiant_rating: number,
    dire_rating: number,
): Promise<MatchAiResult> => {
    const response = await fetch(
        baseURL + `/api/predict?model=${model}&radiantRating=${radiant_rating}&direRating=${dire_rating}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    );
    const result = await response.json();

    return result;
};
