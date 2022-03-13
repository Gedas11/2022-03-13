import {Card} from 'react-bootstrap'
import React from 'react'

const DogList = (props) => {
    return(
        <>
        {props.dogs.map(dog =>
            <Card style={{with:'14rem'}}>
                <Card.Header style={{height:'4rem', fontWeight:'bold'}} >{dog.title}</Card.Header>
            <Card.Body>
                <Card.Title>Veisle:{dog.Year}</Card.Title>
                <Card.Text>
                    <img className="img-fluid" src={dog.Poster} alt="poster"/>
                </Card.Text>
            </Card.Body>
            </Card>
            )}
        
        </>
    )
}

export default DogList