import {Reducer, combineReducers} from "redux"
import {Todos, ManageAction, DispFilter, DispFilterAction, ActionTypes, DispFilterLiteral} from "./types"

// ========== Domain Reducers ==========
// todos
const manageRed: Reducer<Todos, ManageAction> = (state = [], action): Todos => {
  switch (action.type) {
    case ActionTypes.addTodo:
      return [...state, action.payload]
    case ActionTypes.tglTodo:
      return state.map(todo =>
        todo.id === action.payload.id ? {...todo, wasCompleted: !todo.wasCompleted} : todo
      )
    case ActionTypes.delTodo:
      return state.filter(todo => todo.id !== action.payload.id)
    default: {
      const _exhaustion: never = action
      return state
    }
  }
}

// ========== UI Reducers ==========
// display filter
const dispFilterRed: Reducer<DispFilter, DispFilterAction> = (
  state = DispFilterLiteral.showAll,
  action
): DispFilter => {
  switch (action.type) {
    case ActionTypes.setDispFilter:
      return action.payload.dispFilter
    default: {
      // If you add a action, release the following union-check comment
      // const _exhaustion: never = action
      return state
    }
  }
}

// ========== Referenced from the store ==========
export const todosReducers = combineReducers({
  manage: manageRed,
  dispFilter: dispFilterRed
})
