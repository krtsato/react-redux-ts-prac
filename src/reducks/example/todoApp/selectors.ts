import {Todos, DispFilterLiteral} from "@redx/example/todoApp/types"
import {Root} from "@comm/types"

// ========== Domain Selector ==========
// todos
const todoListSel = (state: Root.State): Todos => state.todos.manage

// get todo's id at the end of todos array
const latestIdSel = (state: Root.State): number =>
  state.todos.manage.length === 0 ? 0 : state.todos.manage.slice(-1)[0].id + 1

// ========== UI Selector ==========
// display filter
const dispFilterSel = (state: Root.State): Todos => {
  const {manage, dispFilter} = state.todos
  switch (dispFilter) {
    case DispFilterLiteral.showAll:
      return manage
    case DispFilterLiteral.showCompleted:
      return manage.filter(todo => todo.wasCompleted)
    case DispFilterLiteral.showActive:
      return manage.filter(todo => !todo.wasCompleted)
    default: {
      const _exhaustion: never = dispFilter
      throw new Error(`Unknown filter: ${dispFilter}`)
    }
  }
}

// ========== Referenced from outside the todo domain ==========
export const todosSelectors = {todoListSel, latestIdSel, dispFilterSel}
