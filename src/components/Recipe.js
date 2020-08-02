import React from 'react'
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Recipe({name}) {
    return (
        <div className='row'>
          {name.map((name,i) => (
          <div key={i} className='col-md-3'>
            <Card style={{ width: '21rem',flex: 1 }} >
            <Card.Img variant="top" style={{ height: '13rem'}} src={name.thumbnail} onError={(e)=>{e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80"}}/>
            <Card.Body>
                <Card.Title>{name.title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <a href={name.href} target="__blank"><Button variant="primary">See Recipe</Button></a>
            </Card.Body>
            </Card>    
          </div>
          ))}
        </div>
      );
}

export default Recipe