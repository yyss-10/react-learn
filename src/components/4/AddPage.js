import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PATH } from '../../config'

export default function AddPage() {
  const [tmpText, changeTmpText] = useState('')
  const navigate = useNavigate()

  const handleAddList = () => {
    if(!tmpText) return
    axios.post(`${PATH}todo`, {
      title: tmpText,
      checked: false
    }).then(() => {
      navigate('/')
    })
  }

  return(
    <div className='form'>
      <label htmlFor="text">追加：</label>
      <input type="text" id='text' value={ tmpText } onChange={
        e => changeTmpText(e.currentTarget.value)
      } />
      <input type="button" value='追加' onClick={ handleAddList } />
    </div>
  )
}