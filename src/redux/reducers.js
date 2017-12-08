import { combineReducers } from 'redux'

// function multiTracks(state = {}, action) {
//   switch (action.type) {
//     case ADD_MULTITRACK:
//       const id = uuidv4();
//       return Object.assign({}, ...state,
//         {
//           id: {
//             id: id,
//             attributes: 'stuff'
//           }
//         }
//       )
//     default:
//       return state;
//   }
// }

initialState = {
  isArmed: false
}

const multiTracks = (state = initialState, action) => {
  switch (action.type) {
    case 'ARM_TRACK_TOGGLE':
      return {
        ...state,
        isArmed: !state.isArmed
      }

    // ### After it's hooked up i can maybe use this to toggle:
    // case 'TOGGLE_TODO':
    // return state.map(todo =>
    //   (todo.id === action.id)
    //     ? {...todo, completed: !todo.completed}
    //     : todo
    // )

    default:
      return state;
  }
}

// const mapStateToProps = state => {
//   return {
//     multiTracks: multiTracks(state.todos, state.visibilityFilter)
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// const reducer = combineReducers({
//   multiTracks
// })

export default multiTracks