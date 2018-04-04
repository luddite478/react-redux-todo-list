import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../css/List.css'

class List extends Component {
    deleteTrack(i){
      this.props.deleteTrackInStore(i)
    }
    render(){
      return (
        <ul>
          {this.props.todos.map((todo,i) =>
            <li key={i}>{todo.description}
              <span onClick={this.deleteTrack.bind(this, i)}><strong> X</strong></span>
            </li>
          )}
        </ul>
      )
    }
}

const storeToProps = (state) => ({todos: state.todos})
export default connect(
  storeToProps,
  dispatch => ({
    deleteTrackInStore: (i) => {
      dispatch({type: 'DELETE_TODO', payload: i})
    }
  })
)(List)
