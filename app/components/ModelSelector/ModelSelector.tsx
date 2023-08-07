'use client'

import { useState } from 'react';


import {
    Button,
    Container,
    Col,
    Row,
    Dropdown,
    Collapse
} from 'react-bootstrap'


export const ModelSelector = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleClass = isOpen ? '' : 'd-none d-sm-flex';

    return (
        <Container fluid="md" className='border border-black rounded h-100 p-3' style={{ backgroundColor: '#f8f9fa' }}>
            <Row>
                <Col xs={7} className="d-flex align-items-center">
                    <p style={{ fontWeight: 'bold' }}>Выберите модель</p>
                </Col>
                <Col xs={5} className="d-flex justify-content-end d-xs-block d-sm-none mb-3">
                    <Button
                        variant="light"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "Скрыть" : "Подробнее"}
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={3} className='mb-2'>
                    <Row className='d-none d-sm-flex '>
                        <p className="text-center" style={{ fontWeight: 500 }}>Название модели</p>
                    </Row>
                    <Row>
                        <Dropdown className='d-flex flex-column '>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Модель не выбрана
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Model 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Model 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Model 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>
                </Col>

                <Col md={3} className={toggleClass}>
                    <Row>
                        <p className="text-center" style={{ fontWeight: 500 }}>Описание модели</p>
                    </Row>
                    <Row>
                        <p>
                            Это супер-пупер модель очень мощная
                        </p>
                    </Row>
                </Col>
                <Col md={3} className={toggleClass}>
                    <Row>
                        <p className="text-center" style={{ fontWeight: 500 }}>Параметры модели</p>
                    </Row>
                    <Row>
                        <ul>
                            <li>Название команды Radiant</li>
                            <li>Название команды Dire</li>
                            <li>Рейтинг команды Radiant</li>
                            <li>Рейтинг команды Dire</li>
                            <li>Radiant победили</li>
                        </ul>
                    </Row>
                </Col>
                <Col md={3} className={toggleClass}>

                    <Row >
                        <p className="text-center" style={{ fontWeight: 500 }}>Характеристики модели</p>
                    </Row>
                    <Row>
                        <ul>
                            <li>Точность модели: 62%</li>
                            <li>Количество матчей для обучения: 10000</li>
                            <li>Тип модели: оптимистичная</li>
                        </ul>
                    </Row>

                </Col>
            </Row>

        </Container >
    )
}
