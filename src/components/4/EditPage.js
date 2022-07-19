import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { PATH } from "../../config"

export default function EditPage() {
  const [todo, changeTodo] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const [tmpText, changeTmpText] = useState('')

  useEffect(() => {
    axios.get(`${PATH}todo/${params.id}`).then(res => {
      changeTmpText(res.data.title)
      changeTodo(res.data)
    })
  },[])

  const handleEditList = () => {
    axios.put(`${PATH}todo/${params.id}`, {
      ...todo,
      title: tmpText,
    }).then(() => {
      navigate('/')
    })
  }

  if(!todo) return null

  return(
    <div className="form">
      <h2>{ todo.title }を編集</h2>
      <input type="text" value={ tmpText } onChange={
        e => changeTmpText(e.currentTarget.value)
      } />
      <input type="button" value='編集' onClick={ handleEditList } />
      <input type="button" value='戻る' onClick={ () => navigate('/') } />
    </div>
  )
}