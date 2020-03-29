import React, { Component } from 'react';
import './App.css';
import Header from '../Components/Header.jsx';
import Content from '../Components/Content.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
