import React, { Component } from 'react';
// RHL only for front end development
// import { hot } from 'react-hot-loader';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

class Survey extends Component{
  constructor(props){
    super();
    this.state = {
      questions : {},
      Qnumber: 1
    }
  }
  componentWillMount(){
  axios.post('https://tkfn9ciovh.execute-api.us-west-1.amazonaws.com/qa/api/surveys/synchronization')
.then((res) => {
  console.log(res.data.questions)
})
.catch((err)=>{
  console.log(err);
})

  }

  render(){
    return(
      <div className= 'home'>
        <h1>{ this.state.Qnumber } : question 1</h1>
        <h2>Your answer: <input type="text" name="inputbox">{ this.state.questions }</input></h2>
        <button ></button>
      </div>
    )
  }
}

export default Survey