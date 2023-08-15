'use client'

import { useState } from 'react'
import { Button } from 'react-bootstrap'
import {
  useDispatch,
  fetchMatchGoldDataAsync,
  fetchMatchAiResultAsync,
  calculateSlice
} from '@/lib/redux' // Путь к файлу, где объявлено действие

import {
  useSelector
} from 'react-redux';

import { ReduxState } from 'lib/redux/store';

import type { MatchAiParams, MatchGoldDataParams } from '@/lib/redux'

export const Calculate = () => {
  const dispatch = useDispatch()

  const model = useSelector((state: ReduxState) => state.calculate.result_model)
  const team_radiant = useSelector((state: ReduxState) => state.calculate.selected_team_radiant)
  const team_dire = useSelector((state: ReduxState) => state.calculate.selected_team_dire)

  const handleCalculate = () => {
    console.log(team_radiant, team_dire, model)
    if (!team_radiant || !team_dire || !model) {
      console.warn("Either team_radiant, team_dire, or model is null. Calculation cannot proceed.");
      return;
    }

    const match_gold_data_params: MatchGoldDataParams = { team_radiant_id: team_radiant.team_id, team_dire_id: team_dire.team_id };
    const match_ai_params: MatchAiParams = { model: model.code, radiant_rating: team_radiant.rating, dire_rating: team_dire.rating };

    dispatch(calculateSlice.actions.calculate()); // Dispatch the calculate action
    dispatch(fetchMatchGoldDataAsync(match_gold_data_params));
    dispatch(fetchMatchAiResultAsync(match_ai_params));
  }

  return (
    <Button
      variant="secondary"
      className='h-100 w-100'
      onClick={handleCalculate}
    >
      Рассчитать
    </Button >
  )
}
