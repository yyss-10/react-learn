import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { PATH } from '../../config'

export default function DeletePage() {
  const [todo, changeTodo] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${PATH}todo/${params.id}`).then(res => {
      changeTodo(res.data)
    })
  },[])

  const handleDelete = () => {
    axios.delete(`${PATH}todo/${params.id}`).then(() => {
      navigate('/')
    })
  }

  if(!todo) return null

  return(
    <div className="form">
      <h2>{ todo.title }を削除</h2>
      <input type="button" value='削除' onClick={ handleDelete } />
    </div>
  )
}