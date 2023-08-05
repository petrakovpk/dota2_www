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
        <Container className='h-100 mt-5'>
            <Row className='h-100'>
                <Col md={10}>
                    <TeamsSelector />
                </Col>
                <Col md={2} className='d-flex flex-column'>
                    <div className='d-flex flex-column flex-grow-1 border border-black rounded justify-content-center' style={{ flex: '70%' }}>
                        <Info />
                    </div>
                    <div className='flex-grow-1 mt-2' style={{ flex: '30%' }}>
                        <Calculate />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModelSelector />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Result />
                </Col>
            </Row>
        </Container>
    )
}