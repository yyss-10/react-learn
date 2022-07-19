import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function EditPage({ list, editListItem }) {
  const params = useParams()
  const navigate = useNavigate()
  const editIndex = Number(params.id)
  const editItem = list.find((item, index) => index === editIndex)
  const [tmpText, changeTmpText] = useState(editItem.title)

  const handleEditList = () => {
    editListItem(tmpText, editIndex)
    navigate('/')
  }

  return(
    <div className="form">
      <h2>{ editItem.title }を編集</h2>
      <input type="text" value={ tmpText } onChange={
        e => changeTmpText(e.currentTarget.value)
      } />
      <input type="button" value='編集' onClick={ handleEditList } />
      <input type="button" value='戻る' onClick={ () => navigate('/') } />
    </div>
  )
}