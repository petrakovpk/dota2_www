'use client'

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { calculateSlice } from '@/lib/redux';

import {
    Button,
    Container,
    Col,
    Row,
    Dropdown,
    Collapse
} from 'react-bootstrap'


export const ModelSelector = () => {
    const dispatch = useDispatch();

    type Model = {
        name: string;
        description: string;
        accuracy: string;
    };

    const models = [
        {
            name: 'Stacked Ensamble',
            description: 'Комбинация различных моделей для улучшения точности.',
            accuracy: '62%'
        },
        {
            name: 'Deep Learning',
            description: 'Использует нейронные сети для обучения сложным паттернам в данных.',
            accuracy: '65%'
        },
        {
            name: 'GBM',
            description: 'Gradient Boosting Machine, алгоритм, который строит модель предсказания в форме ансамбля слабых предсказательных моделей.',
            accuracy: '63%'
        }
    ];

    const [isOpen, setIsOpen] = useState(true);
    const [selectedModel, setSelectedModel] = useState<Model>(models[0]);

    const toggleClass = isOpen ? '' : 'd-none d-sm-flex';

    const handleSelectModel = (model: Model) => {
        setSelectedModel(model);
        dispatch(calculateSlice.actions.setModel(model.name));
    }

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
                                {selectedModel ? selectedModel.name : 'Модель не выбрана'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {models.map((model, index) => (
                                    <Dropdown.Item key={index} onClick={() => handleSelectModel(model)}>{model.name}</Dropdown.Item>
                                ))}
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
                            {selectedModel ? selectedModel.description : 'Выберите модель для просмотра описания'}
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
                            <li>Точность модели: {selectedModel ? selectedModel.accuracy : 'N/A'}</li>
                            <li>Количество матчей для обучения: 10000</li>
                        </ul>
                    </Row>

                </Col>
            </Row>

        </Container >
    )
}
