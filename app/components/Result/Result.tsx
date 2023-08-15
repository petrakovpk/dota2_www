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
    ChartData,
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


export const Result = () => {
    const result_match_gold_data = useSelector((state: ReduxState) => state.calculate.result_match_gold_data)
    const result_chart_data = useSelector((state: ReduxState) => state.calculate.result_chart_data)

    const localURL = 'http://127.0.0.1:7070';
    const prodURL = 'http://194.67.103.134:32769';
    const baseURL = localURL;

    useEffect(() => {
        console.log("result_chart_data changed:", result_chart_data);
    }, [result_chart_data]);

    const options = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            datalabels: {
                color: '#000000',
                anchor: 'center', // Измените якорь на "center", чтобы центрировать метки данных над столбцами
                align: 'top', // Выровнять метки данных по верхней части столбцов
                offset: 0, // Добавьте небольшой отступ, чтобы поднять метки данных над столбцами
                formatter: (value: number) => {
                    return value + '%'; // Форматирование значения
                }
            },
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false
            }

        }
    };

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
                        <Bar options={options} data={result_chart_data} />
                    </Row>
                </Col>
                <Col xs={12} md={6} className='pagination-centered'>
                    <Row>
                        <p className='text-center' style={{ fontWeight: 500 }}>Вероятные события матча</p>
                    </Row>
                    <Row>
                        {result_match_gold_data ? (
                            <ul>
                                <li>{result_match_gold_data?.parameter_1}</li>
                                <li>{result_match_gold_data?.parameter_2}</li>
                                <li>{result_match_gold_data?.parameter_3}</li>
                                <li>{result_match_gold_data?.parameter_4}</li>
                                <li>{result_match_gold_data?.parameter_5}</li>
                            </ul>
                        ) : (
                            <li>Для этого матча мы еще не рассчитали параметры</li>
                        )
                        }
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}
