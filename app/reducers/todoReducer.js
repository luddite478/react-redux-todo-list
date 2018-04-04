const initialState = []
export default function playList(state = initialState, action){
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ]
    case 'DELETE_TODO':
      return state.filter((track, i) => i !== action.payload)
    case 'GET_ASYNC_TODOS':
      return [
        ...state,
        ...action.payload
      ]

    default:
      return state
  }
}
