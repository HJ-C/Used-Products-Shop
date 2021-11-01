import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { combineReducers, createStore } from 'redux';

let initAlert = true

function reducer2(state = initAlert, action){
  if(action.type === '닫기'){
    return false
  } else {
    return state
  }
}


let initCart = [
  { id: 0, name:'신발1', quan:3},
  { id: 1, name:'신발2', quan:2}
]

function reducer(state= initCart, action){

  if (action.type === '항목추가'){

    let copy = [...state]
    copy.push(action.payload)
    return copy

  }

  else if(action.type === '수량증가'){



  } else if (action.type === '수량감소'){
    let copy = [...initCart]
    copy[action.data].quan--
    return copy
  } else {
    return state
  }
  
}

let store = createStore(combineReducers({reducer,reducer2}))




ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
