
import './App.css';
import React, {useState} from 'react'
import {Navbar, Container, Nav, Card, Button} from 'react-bootstrap'
import Data from './data'
import { Link, Route, Switch, useHistory} from 'react-router-dom'
import Detail from './Detail'
import axios from 'axios'
import Cart from './Cart'


function App() {

  let [shoes, setshoes] = useState(Data)
  let [inven, setinven] = useState([1,1,1])
  let history = useHistory()

function Card1(props) {
  return (
    <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.i)}}>
    <img src = {"/shoes/shoes" + (props.i+1) +".jpg"} width="100%"></img>
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
      <Nav.Link as={Link} to='/'> Home</Nav.Link>
      <Nav.Link as = {Link} to='/Detail'> Detail</Nav.Link>
      <Nav.Link as = {Link} to ='/Cart'> Cart</Nav.Link>
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


{/* json서버 생성 gist.github https://gist.githubusercontent.com/HJ-C/269c10929a3a6e3c8f421b6a7d7fd281/raw/1785b90820fd314ab1b3201f260298682c1652f8/gistfile1.txt */}

          <button className="btn btn-primary" onClick={ ()=>{
            axios.get('https://gist.githubusercontent.com/HJ-C/269c10929a3a6e3c8f421b6a7d7fd281/raw/1785b90820fd314ab1b3201f260298682c1652f8/gistfile1.txt')
            .then((result)=>{{setshoes([...shoes, ...result.data])}})
            .catch(()=> {})
          }}>더보기</button>

      </div>

    </Route>


    <Route path='/Detail/:id'>
      <Detail shoes={shoes} inven={inven} setinven={setinven}></Detail>
    </Route>
    
    <Route path='/Cart'>
      <Cart></Cart>
    </Route>

    </Switch>
    
    
    </div>

    
  );
}


export default App;
