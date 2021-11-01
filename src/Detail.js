import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './Detail.scss'
import {Nav} from 'react-bootstrap'
import {connect } from 'react-redux'

function Detail(props){


    useEffect( ()=>{ 
      let timer = setTimeout( ()=>{ 
      setAlert(false)
    },2000)

      return ()=>{
        clearTimeout(timer)
      }
    },[])

    let[Alert, setAlert] = useState(true)
    let { id } = useParams()
    let history = useHistory()
    let [Tap, setTap] = useState(0)
    let findItems = props.shoes.find(x => x.id == id)

    return (
        <div className="container">
          <div className="my-alert">
            {
              Alert === true
            ? (<div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p></div>)
            : null
            }

          </div>
        <div className="row">
          <div className="col-md-6">
            <img src={"/shoes/shoes"+(id) +".jpg" } width="100%" ></img>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{findItems.title}</h4>
            <p>{findItems.content}</p>
            <p>{findItems.price}</p>

            <Info inven={props.inven}></Info>

            <button className="btn btn-danger" onClick={ ()=>{ 
              props.setinven([0,0,0])
              props.dispatch({type:'항목추가', payload : {id:findItems.id, name:findItems.title, quan:1} })
              history.push('/cart')
              }}>주문하기</button>
              
            <button onClick={ ()=>{ history.goBack() }} className="btn btn-danger">뒤로가기</button> 
          </div>
        </div>

            {/* Tap */}
            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0" >
              <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={()=>{ setTap(0)}}>Option 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{ setTap(1)}}>Option 2</Nav.Link>
              </Nav.Item>
            </Nav>

          <TabContent Tap={Tap}></TabContent>


      </div>
    )
  }

  function Info(props){
    return(
      <p>재고 : {props.inven[0]}</p>
    )
  }

  function TabContent(props){
    if(props.Tap === 0){
      return <div>상품 정보1</div>
    }
    else if( props.Tap === 1){
      return <div>상품 정보2</div>
    }
  }


  function NewState(state){
    return{
        state : state.reducer,
        alert : state.reducer2
    }
}




export default connect(NewState)(Detail)