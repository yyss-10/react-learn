import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PATH } from '../../config'

export default function ListPage() {
  const [todoList, changeTodoList] = useState([])

  useEffect(() => {
    axios.get(`${PATH}todos`).then(res => {
      changeTodoList(res.data)
    })
  },[])

  const handleChecked = (doneItem) => {
    axios.put(`${PATH}todo/${doneItem.id}`, {
      ...doneItem,
      checked: !doneItem.checked
    }).then(() => {
      window.location.reload()
    })
  }

  return(
    <>
      <ul className='list'>
        { todoList.map((item, i) => (
          <li
            className={ item.checked ? 'checked' : ''}
            key={i}
          ><input type='button' value='done' onClick={ () => handleChecked(item) } />{ item.title } <Link to={`/delete/${item.id}`}>Delete</Link><Link to={`/edit/${item.id}`}>Edit</Link></li>
        )) }
      </ul>
      <Link to='/add'>Add Item</Link>
    </>
  )
}