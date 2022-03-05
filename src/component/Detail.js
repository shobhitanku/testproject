import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const Detail = ({ data }) => {
    const [openForm, setOpenForm] = useState(false);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);

    const onSubmit = () => {
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
    };
    var doc = new DOMParser().parseFromString(data.summary, 'text/xml');

    return (
        <>
            <Card className='text-center'>
                <Card.Header>Show Details</Card.Header>
                <Card.Body>
                    <img
                        alt='img'
                        variant='top'
                        height='200'
                        width='20%'
                        src={data.image && data.image.original}
                    />
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{doc.firstChild.innerHTML}</Card.Text>
                    <Button
                        onClick={() => setOpenForm((prev) => !prev)}
                        variant='primary'
                    >
                        {!openForm ? 'Continue Booking Ticket' : 'Close Form'}
                    </Button>
                </Card.Body>
                <Card.Footer className='text-muted'>
                    Premiered : {data.premiered}
                </Card.Footer>
            </Card>
            <Row style={{ width: '70%', margin: '2rem auto 2rem auto' }}>
                {openForm === true ? (
                    <Form onSubmit={() => onSubmit()}>
                        <Form.Group
                            as={Row}
                            className='mb-3'
                            controlId='formPlaintextEmail'
                        >
                            <Form.Label column sm='2'>
                                Movie Name
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control
                                    disabled
                                    defaultValue={data.name}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className='mb-3'
                            controlId='formPlaintextPassword'
                        >
                            <Form.Label column sm='2'>
                                Language
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control
                                    disabled
                                    defaultValue={data.language}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className='mb-3'
                            controlId='formPlaintextPassword'
                        >
                            <Form.Label column sm='2'>
                                Average Runtime
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control
                                    disabled
                                    defaultValue={`${data.averageRuntime} mins`}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group
                            onChange={(e) => setName(e.target.value)}
                            as={Row}
                            className='mb-3'
                            controlId='formPlaintextPassword'
                        >
                            <Form.Label column sm='2'>
                                Your Name
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control />
                            </Col>
                        </Form.Group>
                        <Form.Group
                            onChange={(e) => setEmail(e.target.value)}
                            as={Row}
                            className='mb-3'
                            controlId='formPlaintextPassword'
                        >
                            <Form.Label column sm='2'>
                                Your Email
                            </Form.Label>
                            <Col sm='10'>
                                <Form.Control />
                            </Col>
                        </Form.Group>
                        <Button
                            style={{
                                margin: '2rem 2rem 0 21rem',
                                padding: '8px 4rem',
                            }}
                            variant='primary'
                            type='submit'
                        >
                            Book Now
                        </Button>
                    </Form>
                ) : null}
            </Row>
        </>
    );
};

export default Detail;
