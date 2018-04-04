import React, { Component } from 'react'
import Form from './components/Form.js'
import List from './components/List.js'
import './App.css'

class App extends Component {
  render() {
    return (
          <div className="App">
            <h1>REACT-REDUX TODO LIST</h1>
            <Form />
            <List />
          </div>
    );
  }
}

export default App
