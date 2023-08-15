/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
    Team,
    Model,
    CalculateSliceState
} from './types'

import {
    fetchMatchGoldDataAsync,
    fetchMatchAiResultAsync
} from './thunks'

import {
    models
} from './types'

import type {
    ChartData
} from 'chart.js';

const initialChartData: ChartData = {
    labels: ["Team Radiant", "Team Dire"],
    datasets: [
        {
            data: [50, 50],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ]
        },
    ],
}

const initialState: CalculateSliceState = {
    selected_team_radiant: null,
    selected_team_dire: null,
    selected_model: models[0],
    result_team_radiant: null,
    result_team_dire: null,
    result_model: models[0],
    result_match_gold_data: null,
    result_match_gold_data_is_loading: false,
    result_math_ai_result: null,
    result_chart_data: initialChartData,
    result_chart_data_is_loading: false
}

export const calculateSlice = createSlice({
    name: 'calculate',
    initialState,

    reducers: {
        setRadiantTeam: (state, action: PayloadAction<Team | null>) => {
            state.selected_team_radiant = action.payload;
        },
        setDireTeam: (state, action: PayloadAction<Team | null>) => {
            state.selected_team_dire = action.payload;
        },
        setModel: (state, action: PayloadAction<Model>) => {
            console.log('set dire team id');
            state.selected_model = action.payload;
        },
        calculate: (state) => {
            console.log("работаем")
            state.result_model = state.selected_model
            state.result_team_radiant = state.selected_team_radiant
            state.result_team_dire = state.selected_team_dire
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMatchGoldDataAsync.pending, (state) => {
                state.result_match_gold_data_is_loading = true
                state.result_match_gold_data = null
            })
            .addCase(fetchMatchGoldDataAsync.fulfilled, (state, action) => {
                state.result_match_gold_data_is_loading = false
                state.result_match_gold_data = action.payload
            })
            .addCase(fetchMatchGoldDataAsync.rejected, (state, action) => {
                state.result_match_gold_data_is_loading = false
                state.result_match_gold_data = null
            })

            .addCase(fetchMatchAiResultAsync.pending, (state) => {
                state.result_chart_data_is_loading = true
                console.log('fetching ai result')
            })
            .addCase(fetchMatchAiResultAsync.fulfilled, (state, action) => {
                state.result_chart_data_is_loading = false
                state.result_math_ai_result = action.payload

                let roundedP0: number = 0
                let roundedP1: number = 1

                if (state.result_math_ai_result.is_radiant_win = false) {
                    roundedP0 = Math.round(state.result_math_ai_result.p0 * 10000) / 100;
                    roundedP1 = Math.round(state.result_math_ai_result.p1 * 10000) / 100;
                } else {
                    roundedP0 = Math.round(state.result_math_ai_result.p1 * 10000) / 100;
                    roundedP1 = Math.round(state.result_math_ai_result.p0 * 10000) / 100;
                }

                state.result_chart_data.datasets = [
                    {
                        data: [roundedP0, roundedP1],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 99, 132, 0.2)'
                        ]
                    }
                ]

            })
            .addCase(fetchMatchAiResultAsync.rejected, (state, action) => {
                state.result_chart_data_is_loading = false
                console.log('error', action.error)
            })
    },

})

