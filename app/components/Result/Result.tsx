'use client'

import React, { useEffect, useRef, useState } from 'react';
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

export const options = {
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


const labels = ['Team Radiant', 'Team Dire'];

export const data = {
    labels,
    datasets: [
        {
            data: [70, 30],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ]
        },

    ],
};


export const Result = () => {

    return (
        <Container fluid="md" className='border border-black rounded h-100 p-3' style={{ backgroundColor: '#f8f9fa' }}>
            <Row>
                <p className="text-left" style={{ fontWeight: 'bold' }}>Результат анализа</p>
            </Row>
            <Row>
                <Col md={4}>
                    <Row>
                        <p className='text-center' style={{ fontWeight: 500 }}>Вероятность победы</p>
                    </Row>
                    <Row>
                        <Bar options={options} data={data} />
                    </Row>
                </Col>
                <Col md={5}>
                    <Row>
                        <p className='text-center' style={{ fontWeight: 500 }}>Сравнение команд</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <p className='text-center'>Team Radiant</p>
                            </Row>
                            <ul>
                                <li>Один</li>
                                <li>Два</li>
                                <li>Три</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <p className='text-center'>Team Dire</p>
                            </Row>
                            <ul>
                                <li>Четыре</li>
                                <li>Пять</li>
                                <li>Шесть</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='pagination-centered'>
                    <Row>
                        <p className='text-center' style={{ fontWeight: 500 }}>Вероятные события матча</p>
                    </Row>
                    <Row>
                        <ul>
                            <li>Семь</li>
                            <li>Восемь</li>
                            <li>Девять</li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
