import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './Detail.scss'

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
            <img src={"https://codingapple1.github.io/shop/shoes"+ (id) + ".jpg" } width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button onClick={ ()=>{ history.goBack() }} className="btn btn-danger">뒤로가기</button> 
          </div>
        </div>
      </div>
    )
  }

  export default Detail