import { useParams, useNavigate } from "react-router-dom"

export default function DeletePage({ list, deleteListItem }) {
  const params = useParams()
  const navigate = useNavigate()
  const deleteIndex = Number(params.id)
  const deleteItem = list.find((item, index) => index === deleteIndex)

  const handleDelete = () => {
    deleteListItem(deleteIndex)
    navigate('/')
  }
  return(
    <div className="form">
      <h2>{ deleteItem.title }を削除</h2>
      <input type="button" value='削除' onClick={ handleDelete } />
    </div>
  )
}