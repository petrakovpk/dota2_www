/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchMatchGoldData } from './fetchMatchGoldData'
import { fetchMatchAiResult } from './fetchMatchAIResult'
import { calculateSlice } from './calculateSlice'
import type { ReduxThunkAction } from '@/lib/redux'
import type { 
    MatchGoldDataParams,
    MatchAiParams,
    MatchAiResult
} from './types'

export const fetchMatchGoldDataAsync = createAppAsyncThunk(
    'calculate/fetchMatchGoldData',
    async (params: MatchGoldDataParams) => {
        const response = await fetchMatchGoldData(params.team_dire_id, params.team_dire_id);

        return response;
    }
)

export const fetchMatchAiResultAsync = createAppAsyncThunk(
    'calculate/fetchMatchAiResult',
    async (params: MatchAiParams) => {
        const response = await fetchMatchAiResult(params.model, params.radiant_rating, params.dire_rating);

        return response;
    }
)
