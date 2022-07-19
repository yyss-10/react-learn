import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import useTodo from "../../hooks/useTodo"

export default function DeletePage() {
  const params = useParams()
  const navigate = useNavigate()
  const { todo, isDeleting, isFetchTodo, fetchTodo, deleteTodo } = useTodo()

  useEffect(() => {
    fetchTodo(params.id)
  },[])

  const handleDelete = async () => {
    await deleteTodo(params.id)
    navigate('/')
  }

  if(!todo || isFetchTodo) return null

  return(
    <div className="form">
      <h2>{ todo.title }を削除</h2>
      <input type="button" value='削除' disabled={isDeleting} onClick={ handleDelete } />
    </div>
  )
}