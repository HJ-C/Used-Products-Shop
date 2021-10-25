import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {Navbar, Container, Nav, Card, Button} from 'react-bootstrap'
import Data from './data'
import { Link, Route, Switch} from 'react-router-dom'
import Detail from './Detail'


function App() {

  let [shoes, setshoes] = useState(Data)


function Card1(props) {
  return (
    <div className="col-md-4">
    <img src = {"https://codingapple1.github.io/shop/shoes" + (props.i+1) +".jpg"} width="100%"></img>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content} & {props.shoes.price}</p>
  </div>
  )
}



  return (

    <div className="App">
{/* NavBar */}
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand> Shop </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link> <Link to='/'> Home </Link></Nav.Link>
      <Nav.Link> <Link to='/Detail'> Detail </Link></Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>




{/* 라우터 */}
    <Switch>
    <Route exact path = '/'>
      {/* CARD */}
      <Card className="background" style={{ width: '100%', height : '400px' }}>
        <Card.Img variant="top" src="" />
        <Card.Body className="txt">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button className="btn" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

        {/* 이미지 상품 */}
      <div className="container">
        <div className="row">
          {
            shoes.map( (a,i)=>{ return <Card1 shoes={shoes[i]} i={i}></Card1> })
          }
        </div>
      </div>

    </Route>


    <Route path = '/detail'>
      <Detail></Detail>
    </Route>
    
    <Route path='/:id'>
      <div>새로만든 라우트 입니다.</div>
    </Route>
    </Switch>


    </div>
  );
}


export default App;
