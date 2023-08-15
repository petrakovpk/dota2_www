'use client'

import { useState } from 'react'
import { Button } from 'react-bootstrap'
import {
  useDispatch,
  fetchMatchGoldDataAsync,
  fetchMatchAiResultAsync,
  calculateSlice
} from '@/lib/redux' // Путь к файлу, где объявлено действие

import type { MatchAiParams, MatchGoldDataParams } from '@/lib/redux'

export const Calculate = () => {
  const dispatch = useDispatch()
  const match_gold_data_params: MatchGoldDataParams = { team_radiant_id: 15, team_dire_id: 15 };
  const match_ai_params: MatchAiParams = { model: 'StackedEnsemble_AllModels_4_AutoML_1_20230705_114001', radiant_rating: 1800, dire_rating: 500}; // Используйте правильный синтаксис для создания объекта


  const handleCalculate = () => {
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
