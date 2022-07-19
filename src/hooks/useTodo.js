import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import {
  fetchTodoListAction,
  successFetchTodoList,
  toggleTodoAction,
  addTodoAction,
  successAddTodoAction,
  fetchTodoAction,
  successFetchTodo,
  deleteTodoAction,
  successDeleteTodo,
  editTodoAction,
  successEditTodo
} from '../actions'

import { PATH } from '../config'
import { useCallback } from 'react'

function useTodo() {
  const todoList = useSelector((state) => state.todoList)
  const isFetchTodoList = useSelector((state) => state.isFetchTodoList)
  const isAdding = useSelector((state) => state.isAdding)
  const dispatch = useDispatch()
  const isDeleting = useSelector((state) => state.isDeleting)
  const isFetchTodo = useSelector((state) => state.isFetchTodo)
  const todo = useSelector((state) => state.todo)
  const isEditing = useSelector((state) => state.isEditing)

  // データ取得
  const fetchTodoList = useCallback(() => {
    dispatch(fetchTodoListAction())
    axios.get(`${PATH}todos`).then(res => {
      dispatch(successFetchTodoList(res.data))
    })
  }, [dispatch])

  // データ更新
  const toggleTodo = (doneItem) => {
    axios.put(`${PATH}todo/${doneItem.id}`, {
      ...doneItem,
      checked: !doneItem.checked
    }).then(() => {
      dispatch(toggleTodoAction(doneItem.id))
    })
  }

  // データ追加
  const addTodo = (tmpText) => {
    dispatch(addTodoAction())
    return axios.post(`${PATH}todo`, {
      title: tmpText,
      checked: false
    }).then(() => {
      dispatch(successAddTodoAction())
    })
  }

  const fetchTodo = (id) => {
    dispatch(fetchTodoAction())
    axios.get(`${PATH}todo/${id}`).then(res => {
      dispatch(successFetchTodo(res.data))
    })
  }

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction())
    return axios.delete(`${PATH}todo/${id}`).then(() => {
      dispatch(successDeleteTodo())
    })
  }

  const editTodo = (id, tmpText) => {
    dispatch(editTodoAction())
    return axios.put(`${PATH}todo/${id}`, {
      ...todo,
      title: tmpText,
    }).then(() => {
      dispatch(successEditTodo())
    })
  }

  return {
    todoList,
    isFetchTodoList,
    fetchTodoList,
    toggleTodo,
    isAdding,
    addTodo,
    todo,
    isDeleting,
    isFetchTodo,
    fetchTodo,
    deleteTodo,
    isEditing,
    editTodo
  }
}

export default useTodo