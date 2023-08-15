'use client'

import {
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    Form,
    Table
} from 'react-bootstrap';

import './main_page.css'
import { TeamsSelector } from '../TeamsSelector/TeamsSelector';
import { Calculate } from '../Calculate/Calculate';
import { Info } from '../Info/Info'
import { ModelSelector } from '../ModelSelector/ModelSelector'
import { Result } from '../Result/Result';

export const MainPage = () => {
    return (
        <Container className='h-100 mt-2'>
            <Row className="mt-2 text-center">
                <p style={{ fontWeight: 'bold' }}>Лаборатория Dota 2</p>
            </Row>
            <Row className='mt-0'>
                <Col md={12}>
                    <TeamsSelector />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col md={10}>
                    <ModelSelector />
                </Col>
                <Col md={2} className='d-flex flex-column'>
                    <div className='d-flex flex-column flex-grow-1 justify-content-center align-items-center d-none d-sm-flex' style={{ flex: '70%' }}>
                        <Info />
                    </div>
                    <div className='flex-grow-1 mt-2' style={{ flex: '30%' }}>
                        <Calculate />
                    </div>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col md={12}>
                    <Result />
                </Col>
            </Row>
        </Container>
    )
}
