import React from 'react';
import { Card, Button } from 'react-bootstrap';


// src={`https://unsplash.it/350/140/?${Math.floor(Math.random(0, 100) * 100)}`}
const TrickCard = ({ trickName,photo,video,description}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>Card Title: {trickName}</Card.Title>
                    <Card.Text >
                    {description}
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default TrickCard;