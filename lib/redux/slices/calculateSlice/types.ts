import {
  ChartData,
} from 'chart.js';


export enum CalculateActionTypes {
  CALCULATE = 'CALCULATE',
  FETCH_CALCULATE_ERROR = 'FETCH_CALCULATE_ERROR',
}

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
  selected_model: string
  result_team_radiant: Team | null
  result_team_dire: Team | null
  result_model: string
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