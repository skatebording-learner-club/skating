import React from 'react';
import { Card, Button } from 'react-bootstrap';



const TrickCard = ({trickName,description}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={`https://unsplash.it/350/140/?${Math.floor(Math.random(0, 100) * 100)}`} />
                <Card.Body>
                <Card.Title>{trickName}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default TrickCard;