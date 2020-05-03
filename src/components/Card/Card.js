import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import {Loader} from '../Loader/Loader';
import NumberFormat from 'react-number-format';

export const Cards = ({cases,deaths,recovered, loading, time}) => {
  
  if(loading){
    return <Loader/>
  }
    return (
      <CardDeck >
       <Card className='text-center' >
        <Card.Body>
          <Card.Title style={{color:'orange', fontWeight:'bold',fontSize:'26px'}}>Cases</Card.Title>
          <Card.Text>
           <NumberFormat value={cases} displayType={'text'}
           thousandSeparator={true}/>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'#9AC3F3'}}  >
 
          <small className="text-muted">
            <span style={{color:'darkBlue', fontSize:'16px'}}>
              Last updated: <b>{time}</b> </span></small>
        </Card.Footer>
      </Card>
      <Card className='text-center'>
       <Card.Body>
          <Card.Title style={{color:'orange', fontWeight:'bold',fontSize:'26px'}}>Recovered</Card.Title>
          <Card.Text>
          <NumberFormat value={recovered} displayType={'text'}
           thousandSeparator={true}/>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'#9AC5B0'}}>
          <small className="text-muted">
             <span style={{color:'darkGreen', fontSize:'16px'}}>
               Last updated: <b>{time}</b></span></small>
        </Card.Footer>
      </Card>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title style={{color:'orange', fontWeight:'bold',fontSize:'26px'}}>Deaths</Card.Title>
          <Card.Text>
          <NumberFormat value={deaths} displayType={'text'}
           thousandSeparator={true}/>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'#F7ADB7'}}>
          <small className="text-muted">
            <span style={{color:'darkRed', fontSize:'16px'}}>
               Last updated: <b>{time}</b></span></small>
        </Card.Footer>
      </Card>
    </CardDeck>
    )
}
