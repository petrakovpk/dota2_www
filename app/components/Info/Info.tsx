'use client'

import { Container } from "react-bootstrap"

export const Info = () => {

    return (
        <Container fluid="md" className='border border-black rounded h-100 p-3' style={{ backgroundColor: '#f8f9fa' }}>
            <p className='text-center'>Dota 2 Laboratory</p>
            <p className='text-center'>Version 1.0</p>
            <p className='text-center'>Данные обновлены  12.07.2023</p>
        </Container>
    )
}
