import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import useTodo from "../../hooks/useTodo"

export default function EditPage() {
  const params = useParams()
  const navigate = useNavigate()
  const { todo, fetchTodo, isFetchTodo, isEditing, editTodo } = useTodo()
  const [tmpText, changeTmpText] = useState('')

  useEffect(() => {
    fetchTodo(params.id)
  },[])

  useEffect(() => {
    if(!todo) return
    changeTmpText(todo.title)
  }, [todo])

  const handleEditList = async () => {
    await editTodo(params.id, tmpText)
    navigate('/')
  }

  if(!todo || isFetchTodo) return null

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