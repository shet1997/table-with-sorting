import React, { Component } from 'react';
import Ranking from './Ranking';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
require('typeface-noto-sans');



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
         <Ranking />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
