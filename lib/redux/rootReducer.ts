/* Instruments */
import { counterSlice, calculateSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  calculate: calculateSlice.reducer
}
