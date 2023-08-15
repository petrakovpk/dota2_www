import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMatchGoldData } from './calculateResult';
import { calculateSlice } from './calculateSlice';

import type { CalculateSliceState, MatchGoldData } from './calculateSlice';

type MatchGoldDataParams = {
    radiant_team_id: number;
    dire_team_id: number;
};

export const getMatchGoldData = createAsyncThunk<MatchGoldData, MatchGoldDataParams>(
    'calculate/fetchMatchGoldData',
    async (params: MatchGoldDataParams) => {
        const response = await fetchMatchGoldData(params.radiant_team_id, params.dire_team_id);
        return response;
    }
);

export const calculateAndFetchMatchGoldData = createAsyncThunk(
    'calculate/calculateAndFetchMatchGoldData',
    async (_, { dispatch, getState }) => {
        const state = getState() as { calculate: CalculateSliceState }; // Уточните тип состояния

        // Вызовите действие calculate
        dispatch(calculateSlice.actions.calculate());

        // Получите параметры для getMatchGoldData
        const { result_team_radiant_id, result_team_dire_id } = state.calculate;

        // Проверьте, что оба ID не равны null
        if (result_team_radiant_id !== null && result_team_dire_id !== null) {
            // Вызовите getMatchGoldData
            return dispatch(getMatchGoldData({ radiant_team_id: result_team_radiant_id, dire_team_id: result_team_dire_id }));
        }
    }
);

