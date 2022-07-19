import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { PATH } from "../../config"
import { useSelector, useDispatch } from "react-redux"
import {
  fetchTodo,
  successFetchTodo,
  editTodo,
  successEditTodo
} from '../../actions'

export default function EditPage() {
  const todo = useSelector((state) => state.todo)
  const isEditing = useSelector((state) => state.isEditing)
  const params = useParams()
  const navigate = useNavigate()
  const [tmpText, changeTmpText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodo())
    axios.get(`${PATH}todo/${params.id}`).then(res => {
      changeTmpText(res.data.title)
      dispatch(successFetchTodo(res.data))
    })
  },[])

  const handleEditList = () => {
    dispatch(editTodo())
    axios.put(`${PATH}todo/${params.id}`, {
      ...todo,
      title: tmpText,
    }).then(() => {
      dispatch(successEditTodo())
      navigate('/')
    })
  }

  if(!todo) return null

  return(
    <div className="form">
      <h2>{ todo.title }を編集</h2>
      <input type="text" value={ tmpText } disabled={ isEditing } onChange={
        e => changeTmpText(e.currentTarget.value)
      } />
      <input type="button" value='編集' disabled={ isEditing } onClick={ handleEditList } />
      {/* <input type="button" value='戻る' disabled={ isEditing } onClick={ () => navigate('/') } /> */}
    </div>
  )
}