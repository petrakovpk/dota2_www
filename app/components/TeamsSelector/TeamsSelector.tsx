'use client'

import 'holderjs'

import {
    useState,
    useEffect
} from 'react';

import {
    useSelector,
    useDispatch
} from '@/lib/redux'

import type {
    Team,
    TeamGoldData
} from '@/lib/redux'

import { 
    calculateSlice
 } from '@/lib/redux';

import {
    Container,
    Col,
    Row,
    Form,
    Image,
    Button
} from 'react-bootstrap'

import {
    useCombobox
} from 'downshift';

export const TeamsSelector = () => {
    const dispatch = useDispatch();

    const localURL = 'http://127.0.0.1:7070';
    const prodURL = 'http://194.67.103.134:32769';
    const baseURL = localURL;

    const [isOpen, setIsOpen] = useState(true);
    const toggleClass = isOpen ? '' : 'd-none d-sm-flex';

    const [itemsRadiant, setItemsRadiant] = useState<Team[]>([]);
    const [itemsDire, setItemsDire] = useState<Team[]>([]);

    const [radiantTeam, setRadiantTeam] = useState<Team | null>(null);
    const [direTeam, setDireTeam] = useState<Team | null>(null);

    const [radiantTeamGoldData, setRadiantTeamGoldData] = useState<TeamGoldData | null>(null);
    const [direTeamGoldData, setDireTeamGoldData] = useState<TeamGoldData | null>(null);

    const [inputValueRadiant, setInputValueRadiant] = useState('');
    const [inputValueDire, setInputValueDire] = useState('');

    const [searchTimeoutRadiant, setSearchTimeoutRadiant] = useState<NodeJS.Timeout | null>(null);
    const [searchTimeoutDire, setSearchTimeoutDire] = useState<NodeJS.Timeout | null>(null);

    const [isRadiantLoading, setIsRadiantLoading] = useState(false);
    const [isDireLoading, setIsDireLoading] = useState(false);

    let radiantTeamIsSelected = false;
    let direTeamIsSelected = false;

    useEffect(() => {
        console.log('Fetching data...');
        fetch(baseURL + '/api/v1.0/teams/get_teams?limit=10')
            .then(response => response.json())
            .then(data => {
                console.log('Data received:', data);
                setItemsRadiant(data);
                setItemsDire(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const {
        isOpen: isOpenRadiant,
        getToggleButtonProps: getToggleButtonPropsRadiant,
        getLabelProps: getLabelPropsRadiant,
        getMenuProps: getMenuPropsRadiant,
        getInputProps: getInputPropsRadiant,
        getItemProps: getItemPropsRadiant,
        highlightedIndex: highlightedIndexRadiant,
        selectedItem: selectedItemRadiant
    } = useCombobox({
        items: itemsRadiant,
        inputValue: inputValueRadiant,

        onSelectedItemChange: ({ selectedItem }) => {
            setRadiantTeam(selectedItem ? selectedItem : null);
            setInputValueRadiant(selectedItem ? selectedItem.name : '');
            dispatch(calculateSlice.actions.setRadiantTeam(selectedItem ? selectedItem : null));

            radiantTeamIsSelected = true;
            fetch(baseURL + '/api/v1.0/teams_gold_data/get_team_gold_data?team_id=' + selectedItem?.team_id)
                .then(response => response.json())
                .then(data => {
                    console.log('Data received:', data);
                    setRadiantTeamGoldData(data);
                })
                .catch(error => {
                    console.error('Error:', error)
                    setRadiantTeamGoldData(null);
                });
        },

        onInputValueChange: ({ inputValue }) => {
            setInputValueRadiant(inputValue || '');
            if (searchTimeoutRadiant) clearTimeout(searchTimeoutRadiant);
            if (radiantTeamIsSelected) {
                radiantTeamIsSelected = false;
                return;
            }
            if (inputValue) {
                setIsRadiantLoading(true); // Начало загрузки
                setSearchTimeoutRadiant(setTimeout(() => {
                    fetch(baseURL + `/api/v1.0/teams/find_team?team_name=${inputValue}&limit=5`)
                        .then(response => response.json())
                        .then(data => {
                            console.log('Data received:', data);
                            setItemsRadiant(data);
                            setIsRadiantLoading(false); // Конец загрузки
                        })
                        .catch(error => {
                            console.error('Error:', error)
                            setIsRadiantLoading(false); // Конец загрузки
                        });
                }, 500));
            } else {
                setIsRadiantLoading(true); // Начало загрузки
                fetch(baseURL + '/api/v1.0/teams/get_teams?limit=10')
                    .then(response => response.json())
                    .then(data => {
                        console.log('Data received:', data);
                        setItemsRadiant(data);
                        setIsRadiantLoading(false); // Конец загрузки
                    })
                    .catch(error => {
                        console.error('Error:', error)
                        setIsRadiantLoading(false); // Конец загрузки
                    });
            }
        },
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
        selectedItem: selectedItemDire
    } = useCombobox({
        items: itemsDire,
        inputValue: inputValueDire,

        onSelectedItemChange: ({ selectedItem }) => {
            setDireTeam(selectedItem ? selectedItem : null);
            setInputValueDire(selectedItem ? selectedItem.name : '');
            dispatch(calculateSlice.actions.setDireTeam(selectedItem ? selectedItem : null));
            direTeamIsSelected = true;
            fetch(baseURL + '/api/v1.0/teams_gold_data/get_team_gold_data?team_id=' + selectedItem?.team_id)
                .then(response => response.json())
                .then(data => {
                    console.log('Data received:', data);
                    setDireTeamGoldData(data);
                })
                .catch(error => {
                    console.error('Error:', error)
                    setDireTeamGoldData(null);
                });
        },

        onInputValueChange: ({ inputValue }) => {
            setInputValueDire(inputValue || '');
            if (searchTimeoutDire) clearTimeout(searchTimeoutDire);
            if (direTeamIsSelected) {
                direTeamIsSelected = false;
                return;
            }
            if (inputValue) {
                setIsDireLoading(true); // Начало загрузки
                setSearchTimeoutDire(setTimeout(() => {
                    fetch(baseURL + `/api/v1.0/teams/find_team?team_name=${inputValue}&limit=5`)
                        .then(response => response.json())
                        .then(data => {
                            console.log('Data received:', data);
                            setItemsDire(data);
                            setIsDireLoading(false); // Конец загрузки
                        })
                        .catch(error => {
                            console.error('Error:', error)
                            setIsDireLoading(false); // Конец загрузки
                        });
                }, 500));
            } else {
                setIsDireLoading(true); // Начало загрузки
                fetch(baseURL + '/api/v1.0/teams/get_teams?limit=10')
                    .then(response => response.json())
                    .then(data => {
                        console.log('Data received:', data);
                        setItemsDire(data);
                        setIsDireLoading(false); // Конец загрузки
                    })
                    .catch(error => {
                        console.error('Error:', error)
                        setIsDireLoading(false); // Конец загрузки
                    });
            }
        },
        itemToString: (item) => (item ? item.name : ''),

    });

    return (
        <Container fluid="md" className='border border-black rounded h-100 p-3' style={{ backgroundColor: '#f8f9fa' }}>
            <Row>
                <Col xs={7} className="d-flex align-items-center">
                    <p style={{ fontWeight: 'bold' }}>Выберите команды</p>
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
                <Col xs={12} sm={6} className='mt-2'>
                    <Form.Control
                        type="text"
                        placeholder="Team Radiant"
                        value={inputValueRadiant}
                        {...getInputPropsRadiant()}
                    />
                    <ul {...getMenuPropsRadiant()} style={{ position: 'absolute', zIndex: 1000, backgroundColor: 'white', listStyle: 'none', padding: 0 }}>
                        {isRadiantLoading && <div>Loading...</div>}
                        {isOpenRadiant ?
                            itemsRadiant
                                .map((item, index) => (
                                    <li
                                        key={`${item}${index}`}
                                        {...getItemPropsRadiant({
                                            item,
                                            index,
                                            style: {
                                                backgroundColor:
                                                    highlightedIndexRadiant === index ? '#f7f7f7' : '#f8f9fa',
                                                fontWeight: selectedItemRadiant === item ? 'bold' : 'normal',
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                padding: '10px',
                                                borderBottom: '1px solid #ddd',
                                            },
                                        })}
                                    >
                                        <img src={item.logo_url} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '10px' }} />
                                        <div>
                                            <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                                            <div style={{ fontSize: '0.8em' }}>Rating: {item.rating}</div>
                                        </div>
                                    </li>
                                )) : null}
                    </ul>
                </Col>
                <Col xs={12} sm={6} className='mt-2'>
                    <Form.Control
                        type="text"
                        placeholder="Team Dire"
                        value={inputValueDire}
                        {...getInputPropsDire()}
                    />
                    <ul {...getMenuPropsDire()} style={{ position: 'absolute', zIndex: 1000, backgroundColor: 'white', listStyle: 'none', padding: 0 }}>
                        {isDireLoading && <div>Loading...</div>}
                        {isOpenDire ?
                            itemsDire
                                .map((item, index) => (
                                    <li
                                        key={`${item}${index}`}
                                        {...getItemPropsDire({
                                            item,
                                            index,
                                            style: {
                                                backgroundColor:
                                                    highlightedIndexDire === index ? '#f7f7f7' : '#f8f9fa',
                                                fontWeight: selectedItemDire === item ? 'bold' : 'normal',
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                padding: '10px',
                                                borderBottom: '1px solid #ddd',
                                            },
                                        })}
                                    >
                                        <img src={item.logo_url} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '10px' }} />
                                        <div>
                                            <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                                            <div style={{ fontSize: '0.8em' }}>Rating: {item.rating}</div>
                                        </div>
                                    </li>
                                )) : null}
                    </ul>
                </Col>
            </Row>
            <Row className={toggleClass + " mt-2"}>
                <Col xs={12} sm={6}>
                    <Row className='mb-2'>
                        <p className="text-center" style={{ fontWeight: 'bold' }}>
                            {radiantTeam && <a href={`https://www.opendota.com/teams/${radiantTeam.team_id}`} target="_blank" rel="noopener noreferrer">{radiantTeam.name}</a>}
                        </p>
                    </Row>
                    <Row>
                        <Col xs={4} sm={3} >
                            {radiantTeam && <Image src={radiantTeam.logo_url} width={100} rounded />}
                        </Col>
                        <Col xs={4} sm={3}>
                            {radiantTeam && <ul className='no-bullets'>
                                <li>Rating: {radiantTeam?.rating}</li>
                                <li>Wins: {radiantTeam?.wins}</li>
                                <li>Loses: {radiantTeam?.losses}</li>
                            </ul>}
                        </Col>
                        <Col xs={12} sm={6}>
                            <ul className='no-bullets'>
                                <li>{radiantTeamGoldData?.parameter_1}</li>
                                <li>{radiantTeamGoldData?.parameter_2}</li>
                                <li>{radiantTeamGoldData?.parameter_3}</li>
                                <li>{radiantTeamGoldData?.parameter_4}</li>
                                <li>{radiantTeamGoldData?.parameter_5}</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={6}>
                    <Row className='mb-2'>
                        <p className="text-center" style={{ fontWeight: 'bold' }}>
                            {direTeam && <a href={`https://www.opendota.com/teams/${direTeam.team_id}`} target="_blank" rel="noopener noreferrer">{direTeam.name}</a>}
                        </p>
                    </Row>
                    <Row>
                        <Col xs={4} sm={3} >
                            {direTeam && <Image src={direTeam.logo_url} width={100} rounded />}
                        </Col>
                        <Col xs={4} sm={3}>
                            {direTeam && <ul className='no-bullets'>
                                <li>Rating: {direTeam?.rating}</li>
                                <li>Wins: {direTeam?.wins}</li>
                                <li>Loses: {direTeam?.losses}</li>
                            </ul>}
                        </Col>
                        <Col xs={12} sm={6}>
                            <ul className='no-bullets'>
                                <li>{direTeamGoldData?.parameter_1}</li>
                                <li>{direTeamGoldData?.parameter_2}</li>
                                <li>{direTeamGoldData?.parameter_3}</li>
                                <li>{direTeamGoldData?.parameter_4}</li>
                                <li>{direTeamGoldData?.parameter_5}</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}
