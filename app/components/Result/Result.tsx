'use client'

import React, {
    useEffect,
    useRef,
    useState
} from 'react';

import {
    useSelector
} from 'react-redux';

import {
    Container,
    Col,
    Row
} from 'react-bootstrap'

import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import { Context } from 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { ReduxState } from 'lib/redux/store';
import { stat } from 'fs';


Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

interface FooContext extends Context {
    foo?: number;
}

// const data = {
//     labels: ['Team Radiant', 'Team Dire'],
//     datasets: [
//         {
//             data: [70, 30],
//             backgroundColor: [
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(255, 99, 132, 0.2)'
//             ]
//         },

//     ],
// };

// export const options = {
//     responsive: true,
//     legend: {
//         display: false
//     },
//     scales: {
//         y: {
//             beginAtZero: true
//         }
//     },
//     plugins: {
//         datalabels: {
//             color: '#000000',
//             anchor: 'center', // Измените якорь на "center", чтобы центрировать метки данных над столбцами
//             align: 'top', // Выровнять метки данных по верхней части столбцов
//             offset: 0, // Добавьте небольшой отступ, чтобы поднять метки данных над столбцами
//             formatter: (value: number) => {
//                 return value + '%'; // Форматирование значения
//             }
//         },
//         maintainAspectRatio: false,
//         responsive: true,
//         legend: {
//             display: false
//         }
//     }
// };

export const Result = () => {
    const resultIsLoading = useSelector((state: ReduxState) => state.calculate.result_is_loading)
    const model = useSelector((state: ReduxState) => state.calculate.result_model)
    const team_radiant = useSelector((state: ReduxState) => state.calculate.result_team_radiant_id)
    const team_dire = useSelector((state: ReduxState) => state.calculate.result_team_dire_id)

    type MatchGoldData = {
        team_radiant_id: number;
        team_dire_id: number;
        parameter_1: string;
        parameter_2: string;
        parameter_3: string;
        parameter_4: string;
        parameter_5: string;
    };

    const localURL = 'http://127.0.0.1:7070';
    const prodURL = 'http://194.67.103.134:32769';
    const baseURL = localURL;

    return (
        <Container fluid="md" className='border border-black rounded h-100 p-3' style={{ backgroundColor: '#f8f9fa' }}>
            <Row>
                <p className="text-left" style={{ fontWeight: 'bold' }}>Результат анализа</p>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                        <p className='text-center' style={{ fontWeight: 500 }}>Вероятность победы</p>
                    </Row>
                    <Row>
                        {/* <Bar options={options} /> использование chartData */}
                    </Row>
                </Col>
                <Col xs={12} md={6} className='pagination-centered'>
                    <Row>
                        <p className='text-center' style={{ fontWeight: 500 }}>Вероятные события матча</p>
                    </Row>
                    <Row>
                        <ul>
                            <li>{resultIsLoading ? 'Загрузка...' : 'Данные загружены'}</li>
                            <li>{model}</li>
                            <li>{team_radiant}</li>
                            <li>{team_dire}</li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
