const mockApiData = [
  {
    id: 1,
    description: 'todo1'
  },
  {
    id: 2,
    description: 'todo2'
  },
  {
    id: 3,
    description: 'todo3'
  },
  {
    id: 4,
    description: 'todo4'
  }
]

export const getTodos = () => dispatch => {
    setTimeout(() => {
      dispatch({type: 'GET_ASYNC_TODOS', payload: mockApiData})
    }, 2000)
}
