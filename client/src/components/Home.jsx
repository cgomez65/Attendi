import React, { Component } from 'react';
import Main from './Main'



class Home extends Component{
  render(){
    return(
      <div className = 'home'>
        <div >
          <h1>Welcome</h1> 
          <h2>take a part in our Survey</h2>
          <br />
          <br />
          <Main />
        </div>
      </div>
    )
  }
}


export default Home