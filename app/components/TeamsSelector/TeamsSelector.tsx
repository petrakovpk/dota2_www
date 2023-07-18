'use client'

/* Core */
import { useState } from 'react'

/* Instruments */
import {
    counterSlice,
    useSelector,
    useDispatch
} from '@/lib/redux'
import styles from './teams_selector.module.css'

import {
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    Form
} from 'react-bootstrap';

import { useCombobox } from 'downshift';

const items = [
    { id: 1, name: 'Team Liquid', logo: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2163.png', rating: 1200 },
    { id: 2, name: 'OG', logo: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2586976.png', rating: 1300 },
    { id: 3, name: 'Evil Geniuses', logo: 'https://steamusercontent-a.akamaihd.net/ugc/1983302387907692940/BAA861E234E1BA39D75DF4CB814A5B76D020BED7/', rating: 1250 },
    { id: 4, name: 'Natus Vincere', logo: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/36.png', rating: 1200 },
    { id: 5, name: 'Virtus Pro', logo: 'https://steamusercontent-a.akamaihd.net/ugc/1796396122320355023/2E833B3744ECB93AD9FF3797C0309B4ADB54AD2E/', rating: 1200 },
]

export const TeamsSelector = () => {
    const dispatch = useDispatch()
    const [radiantTeamId, setRadiantTeamId] = useState<number | null>(null);
    const [direTeamId, setDireTeamId] = useState<number | null>(null);

    const [inputValueRadiant, setInputValueRadiant] = useState('');
    const [inputValueDire, setInputValueDire] = useState('');

    const [selectedModel, setSelectedModel] = useState('Stacked Ensamble');


    const {
        isOpen: isOpenRadiant,
        getToggleButtonProps: getToggleButtonPropsRadiant,
        getLabelProps: getLabelPropsRadiant,
        getMenuProps: getMenuPropsRadiant,
        getInputProps: getInputPropsRadiant,
        getItemProps: getItemPropsRadiant,
        highlightedIndex: highlightedIndexRadiant,
        selectedItem: selectedItemRadiant,
    } = useCombobox({
        items,
        inputValue: inputValueRadiant,
        onSelectedItemChange: ({ selectedItem }) => {
            setRadiantTeamId(selectedItem ? selectedItem.id : null);
            setInputValueRadiant(selectedItem ? selectedItem.name : '');
        },
        onInputValueChange: ({ inputValue }) => setInputValueRadiant(inputValue || ''),
        itemToString: (item) => (item ? item.name : ''),
    });

    const {
        isOpen: isOpenDire,
        getToggleButtonProps: getToggleButtonPropsDire,
        getLabelProps: getLabelPropsDire,
        getMenuProps: getMenuPropsDire,
        getInputProps: getInputPropsDire,
        getItemProps: getItemPropsDire,
        highlightedIndex: highlightedIndexDire,
        selectedItem: selectedItemDire,
    } = useCombobox({
        items,
        inputValue: inputValueDire,
        onSelectedItemChange: ({ selectedItem }) => {
            setDireTeamId(selectedItem ? selectedItem.id : null);
            setInputValueDire(selectedItem ? selectedItem.name : '');
        },
        onInputValueChange: ({ inputValue }) => setInputValueDire(inputValue || ''),
        itemToString: (item) => (item ? item.name : ''),
    });


    return (
        <div>
            <Container fluid="md">
                <Row className='justify-content-md-center mt-3'>
                    <p className='text-center'>Выберите команды</p>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col md="auto">
                        <div style={{ position: 'relative' }}>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">Команда Radiant</InputGroup.Text>
                                <Form.Control
                                    placeholder="Virtus Pro"
                                    value={inputValueRadiant}
                                    {...getInputPropsRadiant()}
                                />
                            </InputGroup>
                            <ul {...getMenuPropsRadiant()} style={{ position: 'absolute', zIndex: 1000, backgroundColor: 'white', width: '100%', listStyle: 'none', padding: 0 }}>
                                {isOpenRadiant
                                    ? items
                                        .filter(item => !inputValueRadiant || item.name.includes(inputValueRadiant))
                                        .map((item, index) => (
                                            <li
                                                {...getItemPropsRadiant({
                                                    key: item.name,
                                                    index,
                                                    item,
                                                    style: {
                                                        backgroundColor:
                                                            highlightedIndexRadiant === index ? '#f7f7f7' : 'white',
                                                        fontWeight: selectedItemRadiant === item ? 'bold' : 'normal',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        cursor: 'pointer',
                                                        padding: '10px',
                                                        borderBottom: '1px solid #ddd',
                                                    },
                                                })}
                                            >
                                                <img src={item.logo} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '10px' }} />
                                                <div>
                                                    <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                                                    <div style={{ fontSize: '0.8em' }}>Rating: {item.rating}</div>
                                                </div>
                                            </li>
                                        ))
                                    : null}
                            </ul>
                        </div>
                    </Col>
                    <Col md="auto">
                        <div style={{ position: 'relative' }}>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">Команда Dire</InputGroup.Text>
                                <Form.Control
                                    placeholder="Virtus Pro"
                                    value={inputValueDire}
                                    {...getInputPropsDire()}
                                />
                            </InputGroup>
                            <ul {...getMenuPropsDire()} style={{ position: 'absolute', zIndex: 1000, backgroundColor: 'white', width: '100%', listStyle: 'none', padding: 0 }}>
                                {isOpenDire
                                    ? items
                                        .filter(item => !inputValueDire || item.name.includes(inputValueDire))
                                        .map((item, index) => (
                                            <li
                                                {...getItemPropsDire({
                                                    key: item.name,
                                                    index,
                                                    item,
                                                    style: {
                                                        backgroundColor:
                                                            highlightedIndexDire === index ? '#f7f7f7' : 'white',
                                                        fontWeight: selectedItemDire === item ? 'bold' : 'normal',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        cursor: 'pointer',
                                                        padding: '10px',
                                                        borderBottom: '1px solid #ddd',
                                                    },
                                                })}
                                            >
                                                <img src={item.logo} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '10px' }} />
                                                <div>
                                                    <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                                                    <div style={{ fontSize: '0.8em' }}>Rating: {item.rating}</div>
                                                </div>
                                            </li>
                                        ))
                                    : null}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-md-center mt-4'>
                    <p className='text-center'>Выберите модель</p>
                </Row>

                <Row className='justify-content-md-center'>
                    <Col md="auto">
                        <Button
                            variant={selectedModel === 'Stacked Ensamble' ? 'primary' : 'secondary'}
                            onClick={() => setSelectedModel('Stacked Ensamble')}
                        >
                            Stacked Ensamble
                        </Button>
                    </Col>
                    <Col md="auto">
                        <Button
                            variant={selectedModel === 'Gradient Boosting' ? 'primary' : 'secondary'}
                            onClick={() => setSelectedModel('Gradient Boosting')}
                        >
                            Gradient Boosting
                        </Button>
                    </Col>
                    <Col md="auto">
                        <Button
                            variant={selectedModel === 'Deep Learning' ? 'primary' : 'secondary'}
                            onClick={() => setSelectedModel('Deep Learning')}
                        >
                            Deep Learning
                        </Button>
                    </Col>
                </Row>

                <Row className='justify-content-md-center mt-4'>
                    <p className='text-center'>Результат:</p>
                </Row>

                <Row className='justify-content-md-center mt-4'>
                    <Col md="auto">
                        <Button variant="secondary" onClick={() => console.log(selectedModel)}>
                            Запустить расчет
                        </Button>
                    </Col>
                </Row>

                <Row className='justify-content-md-center mt-4'>
                    <Col md="auto">
                        Команда <b>Virtus Pro</b> (рейтинг 1760) победит команду <b>Natus Vincere</b> (рейтинг 1430) с вероятностью <b>57%</b>
                    </Col>
                </Row>

                <Row className='justify-content-md-center mt-4'>
                    <Col md="auto">
                       Как это работает
                    </Col>
                </Row>

    
            </Container>
        </div >
    )
}
