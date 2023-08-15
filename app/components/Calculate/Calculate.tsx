'use client'

import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getMatchGoldData } from '@/lib/redux' // Путь к файлу, где объявлено действие

type MatchGoldDataParams = {
  radiant_team_id: number;
  dire_team_id: number;
};

export const Calculate = () => {
  const dispatch = useDispatch()

  const handleCalculateClick = () => {
    dispatch(getMatchGoldData({ radiant_team_id: 15, dire_team_id: 15 })) // Вызовите thunk-действие здесь
  }

  return (
    <Button variant="secondary" className='h-100 w-100' onClick={handleCalculateClick}>
      Рассчитать
    </Button>
  )
}
