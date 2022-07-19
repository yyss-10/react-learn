import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { PATH } from '../../config'
import { useSelector, useDispatch } from "react-redux"
import {
  fetchTodo,
  successFetchTodo,
  deleteTodo,
  successDeleteTodo
} from '../../actions'

export default function DeletePage() {
  const isDeleting = useSelector((state) => state.isDeleting)
  const todo = useSelector((state) => state.todo)
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodo())
    axios.get(`${PATH}todo/${params.id}`).then(res => {
      dispatch(successFetchTodo(res.data))
    })
  },[])

  const handleDelete = () => {
    dispatch(deleteTodo())
    axios.delete(`${PATH}todo/${params.id}`).then(() => {
      dispatch(successDeleteTodo())
      navigate('/')
    })
  }

  if(!todo) return null

  return(
    <div className="form">
      <h2>{ todo.title }を削除</h2>
      <input type="button" value='削除' disabled={isDeleting} onClick={ handleDelete } />
    </div>
  )
}