import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getTodos } from '../actions/getTodosAsync.js'
import '../css/Form.css'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  handleTextChange(e){
      this.setState({text: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault()
    if(this.state.text !== ''){
      this.props.updateTracks(this.state.text)
      this.setState({
        text: ''
      })
    }
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
               value={this.state.text}
               onChange={this.handleTextChange.bind(this)}
        />
        <input type="submit" value="Send"/>
        <button onClick={this.props.getAsyncData}>Get async data</button>
      </form>
    )
  }
}

export default connect(
    null,
    dispatch => ({
      updateTracks: (description) => {
        const payload = {
          id: Date.now().toString(),
          description
        }
        dispatch({type: 'ADD_TODO', payload})
      },
      getAsyncData: () => {
        dispatch(getTodos())
      }
    })
)(Form)
