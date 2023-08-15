import {
  ChartData,
} from 'chart.js';


export enum CalculateActionTypes {
  CALCULATE = 'CALCULATE',
  FETCH_CALCULATE_ERROR = 'FETCH_CALCULATE_ERROR',
}

export type Model = {
  name: string;
  code: string,
  description: string;
  accuracy: string;
};

export type MatchGoldDataParams = {
  team_radiant_id: number;
  team_dire_id: number;
};

export type MatchGoldData = {
  team_radiant_id: number;
  team_dire_id: number;
  parameter_1: string;
  parameter_2: string;
  parameter_3: string;
  parameter_4: string;
  parameter_5: string;
};

export type MatchAiParams = {
  model: string;
  radiant_rating: number;
  dire_rating: number;
};

export type MatchAiResult = {
  model: string;
  is_radiant_win: boolean;
  p0: number;
  p1: number;
};


export interface CalculateSliceState {
  selected_team_radiant: Team | null
  selected_team_dire: Team | null
  selected_model: Model
  result_team_radiant: Team | null
  result_team_dire: Team | null
  result_model: Model
  result_match_gold_data: MatchGoldData | null
  result_match_gold_data_is_loading: boolean
  result_math_ai_result: MatchAiResult | null
  result_chart_data: ChartData
  result_chart_data_is_loading: boolean
}

export type Team = {
  team_id: number;
  name: string;
  logo_url: string;
  rating: number;
  wins: number;
  losses: number;
};

export type TeamGoldData = {
  team_id: number;
  parameter_1: string;
  parameter_2: string;
  parameter_3: string;
  parameter_4: string;
  parameter_5: string;
};


export const models = [
  {
      name: 'Stacked Ensamble',
      code: 'StackedEnsemble_AllModels_4_AutoML_1_20230705_114001',
      description: 'Комбинация различных моделей для улучшения точности.',
      accuracy: '62%'
  },
  {
      name: 'Deep Learning',
      code: 'DeepLearning_grid_1_AutoML_1_20230707_231200_model_3',
      description: 'Использует нейронные сети для обучения сложным паттернам в данных.',
      accuracy: '65%'
  },
  {
      name: 'GBM',
      code: 'GBM_grid_1_AutoML_1_20230707_231200_model_10',
      description: 'Gradient Boosting Machine, алгоритм, который строит модель предсказания в форме ансамбля слабых предсказательных моделей.',
      accuracy: '63%'
  }
];