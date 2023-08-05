'use client'

import 'holderjs'

import {
    Container,
    Col,
    Row,
    Form,
    Image,
    Table
} from 'react-bootstrap'

export const TeamsSelector = () => {

    return (
        <Container fluid="md" className='border border-black rounded h-100'>
            <Row><p className="text-right">Выберите команды</p></Row>
            <Row className='mt-2'>
                <Col sm={6}>
                    <Form.Control type="text" placeholder="Team Radiant" />
                </Col>
                <Col sm={6}>
                    <Form.Control type="text" placeholder="Team Dire" />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col sm={1}>
                    <Image src="holder.js/100x100" rounded />
                </Col>
                <Col sm={5}>
                    <p className="text-right text-center">Natus Vincere</p>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr>
                                <th>Rating</th>
                                <th>1500</th>
                            </tr>
                            <tr>
                                <th>Matches</th>
                                <th>1500</th>
                            </tr>
                            <tr>
                                <th>Wins</th>
                                <th>64</th>
                            </tr>
                            <tr>
                                <th>Loses</th>
                                <th>43</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                <Col sm={1}>
                    <Image src="holder.js/100x100" rounded />
                </Col>
                <Col sm={5}>
                    <p className="text-right text-center">Virtus Pro</p>
                    <Table striped size="sm">
                        <tbody>
                            <tr>
                                <th>Rating</th>
                                <th>1500</th>
                            </tr>
                            <tr>
                                <th>Matches</th>
                                <th>1500</th>
                            </tr>
                            <tr>
                                <th>Wins</th>
                                <th>64</th>
                            </tr>
                            <tr>
                                <th>Loses</th>
                                <th>43</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}