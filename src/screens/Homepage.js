import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../component/Cards';
import { Badge, Col, Container, Row } from 'react-bootstrap';

const Homepage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => setData(res.data));
    }, []);

    return (
        <Container
            className='bg-dark'
            style={{
                margin: '0 0 0 0',
                maxWidth: '100%',
                padding: '2rem 9% 2rem 10%',
            }}
        >
            <h1>
                <Badge bg='secondary' className='mt-2'>
                    Shows
                </Badge>
            </h1>
            <Row>
                {data &&
                    data.map((dta) => (
                        <Col className='mt-5'>
                            <Cards data={dta.show} />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default Homepage;
