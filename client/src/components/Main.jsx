import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Survey from '../components/Survey'


class Quiz extends Component {

  render(){
    return(
      
      <div>
           <button ><Link to="/Survey">Take Survey!</Link></button>
           
      </div>
     
    )
  }
}


export default Quiz