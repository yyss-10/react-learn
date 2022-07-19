export const fetchTodoListAction = () => ({
  type: "FETCH_TODO_LIST"
})

export const successFetchTodoList = (payload) => ({
  type: "SUCCESS_FETCH_TODO_LIST",
  payload
})

export const toggleTodoAction = (payload) => ({
  type: "TOGGLE_TODO",
  payload
})

export const addTodoAction = () => ({
  type: "ADD_TODO_ACTION"
})

export const successAddTodoAction = () => ({
  type: "SUCCESS_ADD_TODO_ACTION"
})

export const fetchTodoAction = () => ({
  type: "FETCH_TODO"
})

export const successFetchTodo = (payload) => ({
  type: "SUCCESS_FETCH_TODO",
  payload
})

export const deleteTodoAction = () => ({
  type: "DELETE_TODO"
})

export const successDeleteTodo = () => ({
  type: "SUCCESS_DELETE_TODO"
})

export const editTodoAction = () => ({
  type: "EDIT_TODO"
})

export const successEditTodo = () => ({
  type: "SUCCESS_EDIT_TODO"
})