import { useState } from 'react'
import useTodo from '../../hooks/useTodo'
import { useNavigate } from 'react-router-dom'

export default function AddPage() {
  const { isAdding, addTodo } = useTodo
  const [tmpText, changeTmpText] = useState('')
  const navigate = useNavigate()

  const handleAddList = async () => {
    if(!tmpText) return
    await addTodo(tmpText)
    navigate('/')
  }

  return(
    <div className='form'>
      <label htmlFor="text">追加：</label>
      <input type="text" id='text' value={ tmpText } disabled={isAdding} onChange={
        e => changeTmpText(e.currentTarget.value)
      } />
      <input type="button" value='追加' onClick={ handleAddList } />
    </div>
  )
}