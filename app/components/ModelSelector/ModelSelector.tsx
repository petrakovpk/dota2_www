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


export const ModelSelector = () => {

    return (
        <Container fluid="md" className='border border-black rounded mt-2'>
            <Row>
                <Col md={4}>
                    <Row mt-4>
                        <p className="text-right">Выберите модель</p>
                    </Row>
                    <Row mt-4>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Выберите модель
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Model 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Model 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Model 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>
                    <Row className='mt-2'>
                        <p>
                            Это супер-пепур модель очень мощная
                        </p>
                    </Row>
                </Col>
                <Col md={4}>
                    2
                </Col>
                <Col md={4}>
                    3
                </Col>
            </Row>
        </Container>
    )
}