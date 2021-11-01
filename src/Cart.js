import React from 'react'
import {Table} from 'react-bootstrap'
import {connect, useSelector, useDispatch} from 'react-redux'

function Cart(props){


    return(
      <div>
        <Table responsive="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
            </tr>
            </thead>
            <tbody>
            {
                props.state.map( (a,i)=>{ 
                    return(
                        <tr key={i}>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>{a.quan}</td>
                            <td>
                                <button onClick={()=>{ props.dispatch({type:'수량증가', data : a.id })  }}>+</button>
                                <button onClick={()=>{ props.dispatch({type:'수량감소', data : a.id }) }}>-</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>

        { props.state.alert === true
        ?   <div className="my-alert">
            <p>지금 사시면 20% sale</p>
            <button onClick={ ()=>{props.dispatch({type:'닫기'}) }}>닫기</button>
            </div>
        : null
        }

    </div>
    )
}

function NewState(state){
    return{
        state : state.reducer,
        alert : state.reducer2
    }
}

export default connect(NewState)(Cart)
