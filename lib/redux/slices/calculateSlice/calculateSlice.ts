/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getMatchGoldData } from './thunks'

export type MatchGoldData = {
    team_radiant_id: number;
    team_dire_id: number;
    parameter_1: string;
    parameter_2: string;
    parameter_3: string;
    parameter_4: string;
    parameter_5: string;
};

const initialState: CalculateSliceState = {
    selected_team_radiant_id: null,
    selected_team_dire_id: null,
    selected_model: 'Stacked Ensamble',
    result_is_loading: false,
    result_team_radiant_id: null,
    result_team_dire_id: null,
    result_model: 'Stacked Ensamble',
    result_match_gold_data: null
}

export const calculateSlice = createSlice({
    name: 'calculate',
    initialState,

    reducers: {
        setRadiantTeam: (state, action: PayloadAction<number | null>) => {
            console.log('set radiant team id');
            state.selected_team_radiant_id = action.payload;
        },
        setDireTeam: (state, action: PayloadAction<number | null>) => {
            console.log('set dire team id');
            state.selected_team_dire_id = action.payload;
        },
        setModel: (state, action: PayloadAction<string>) => {
            console.log('set dire team id');
            state.selected_model = action.payload;
        },
        calculate: (state) => {
            state.result_model = state.selected_model
            state.result_team_radiant_id = state.selected_team_radiant_id
            state.result_team_dire_id = state.selected_team_dire_id
            console.log('calculate result_team_radiant_id', state.result_team_radiant_id)
            console.log('calculate result_team_radiant_id', state.selected_team_radiant_id)
            console.log('calculate result_team_dire_id', state.result_team_dire_id)
            console.log('calculate result_team_dire_id', state.selected_team_dire_id)
        }
    },
    
    extraReducers: (builder) => {
        builder
            .addCase(getMatchGoldData.pending, (state) => {
                state.result_is_loading = true
            })
            .addCase(getMatchGoldData.fulfilled, (state, action) => {
                state.result_is_loading = false
                state.result_match_gold_data = action.payload
            })
    },
})

/* Types */
export interface CalculateSliceState {
    selected_team_radiant_id: number | null
    selected_team_dire_id: number | null
    selected_model: string
    result_is_loading: boolean,
    result_team_radiant_id: number | null
    result_team_dire_id: number | null
    result_model: string
    result_match_gold_data: MatchGoldData | null
}
