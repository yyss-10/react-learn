import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PATH } from '../../config'
import { useSelector, useDispatch } from 'react-redux'
import {
  addTodoAction,
  successAddTodoAction
} from './../../actions'

export default function AddPage() {
  const isAdding = useSelector((state) => state.isAdding)
  const [tmpText, changeTmpText] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddList = () => {
    if(!tmpText) return
    dispatch(addTodoAction())
    axios.post(`${PATH}todo`, {
      title: tmpText,
      checked: false
    }).then(() => {
      dispatch(successAddTodoAction())
      navigate('/')
    })
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