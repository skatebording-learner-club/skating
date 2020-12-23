import React from 'react';
import { Card, Button } from 'react-bootstrap';



const TrickCard = ({trickName,description,photo}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={photo} />
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