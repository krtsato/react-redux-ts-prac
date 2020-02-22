import {TodosState, Todos, DispFilter, DispFilterLiteral} from "@redx/example/todoApp/types"

// ========== Domain Selector ==========
// todos
const todoListSel = (state: TodosState): Todos => state.todos

// get todo's id at the end of todos array
const latestIdSel = (state: TodosState): number => state.todos.slice(-1)[0].id

// ========== UI Selector ==========
// display filter
const dispFilterSel = (todos: Todos, dispFilter: DispFilter): Todos => {
  switch (dispFilter) {
    case DispFilterLiteral.showAll:
      return todos
    case DispFilterLiteral.showCompleted:
      return todos.filter(todo => todo.wasCompleted)
    case DispFilterLiteral.showActive:
      return todos.filter(todo => !todo.wasCompleted)
    default: {
      const _exhaustion: never = dispFilter
      throw new Error(`Unknown filter: ${dispFilter}`)
    }
  }
}

// ========== Referenced from outside the todo domain ==========
export const todosSelectors = {
  todoListSel,
  latestIdSel,
  dispFilterSel
}