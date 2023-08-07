'use client'

import 'holderjs'

import {
    Container,
    Col,
    Row,
    Form,
    Image
} from 'react-bootstrap'

export const TeamsSelector = () => {

    return (
        <Container fluid="md" className='border border-black rounded h-100 p-3' style={{ backgroundColor: '#f8f9fa' }}>
            <Row>
                <p className="text-left" style={{ fontWeight: 'bold' }}>Выберите команды</p>
            </Row>
            <Row>
                <Col xs={12} sm={6} className='mt-2'>
                    <Form.Control type="text" placeholder="Team Radiant" />
                </Col>
                <Col xs={12} sm={6} className='mt-2'>
                    <Form.Control type="text" placeholder="Team Dire" />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col xs={12} sm={6}>
                    <Row>
                        <p className="text-center" style={{ fontWeight: 'bold' }}>Natus Vincere</p>
                    </Row>
                    <Row>
                        <Col xs={4} sm={3}>
                            <Image src="holder.js/100x100" rounded />
                        </Col>
                        <Col xs={4} sm={3}>
                            <ul className='no-bullets'>
                                <li>Rating: 1500</li>
                                <li>Rating: 1500</li>
                            </ul>
                        </Col>
                        <Col xs={4} sm={3}>
                            <ul className='no-bullets'>
                                <li>Rating: 1500</li>
                                <li>Rating: 1500</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={6}>
                    <Row>
                        <p className="text-center" style={{ fontWeight: 'bold' }}>Natus Vincere</p>
                    </Row>
                    <Row>
                        <Col xs={4} sm={3}>
                            <Image src="holder.js/100x100" rounded />
                        </Col>
                        <Col xs={4} sm={3}>
                            <ul className='no-bullets'>
                                <li>Rating: 1500</li>
                                <li>Rating: 1500</li>
                            </ul>
                        </Col>
                        <Col xs={4} sm={3}>
                            <ul className='no-bullets'>
                                <li>Rating: 1500</li>
                                <li>Rating: 1500</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>

                {/* <Col xs={3} sm={2} className='d-flex justify-content-center align-items-center'>
                    <Image src="holder.js/100x100" rounded />
                </Col> */}
                {/* <Col xs={8} sm={4}>
                    <Row>
                        <Col xs={12} sm={6}>
                            <ul>
                                <li>Rating: 1500</li>
                                <li>Rating: 1500</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6}>
                            <ul>
                                <li>Rating: 1500</li>
                                <li>Rating: 1500</li>
                            </ul>
                        </Col>

                    </Row>
                </Col> */}

                {/* <Col xs={4} sm={2} className='d-flex justify-content-center align-items-center mb-2'>
                    <Image src="holder.js/100x100" rounded />
                </Col>
                <Col xs={8} sm={4}>
                    <Row>
                        <p className="text-center" style={{ fontWeight: 'bold' }}>Natus Vincere</p>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <p>Rating: 1500</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p>Wins: 64</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <p>Matches: 1500</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p>Loses: 64</p>
                        </Col>
                    </Row>
                </Col> */}
            </Row >
        </Container >
    )
}
