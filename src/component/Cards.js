import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Cards = ({ data }) => {
    const navigate = useNavigate();
    return (
        <Card
            style={{ width: '18rem', cursor: 'pointer' }}
            onClick={() => navigate(`/booking/${data.id}`)}
        >
            <Card.Img
                variant='top'
                height='200'
                src={data.image && data.image.original}
            />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
            </Card.Body>
            <ListGroup className='list-group-flush'>
                <ListGroupItem>
                    Average Runtime : {data.averageRuntime}
                </ListGroupItem>
                <ListGroupItem>Language : {data.language}</ListGroupItem>
                <ListGroupItem>
                    Rating : {data.rating && data.rating.average}
                </ListGroupItem>
                <ListGroupItem>Premiered : {data.premiered}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant='success'>Book Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Cards;
