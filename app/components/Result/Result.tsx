'use client'

import {
    Button,
    Container,
    Col,
    Row,
    Form,
    Dropdown,
    Table
} from 'react-bootstrap'


export const Result = () => {

    return (
        <Container fluid="md" className='border border-black rounded mt-2'>
            <Row>
                <Col md={4}>
                    <Row mt-4>
                        <p className="text-right">Результат анализа</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}