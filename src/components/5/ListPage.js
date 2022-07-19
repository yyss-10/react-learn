import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PATH } from '../../config'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchTodoListAction,
  successFetchTodoList,
  toggleTodoAction
} from './../../actions'

export default function ListPage() {
  const todoList = useSelector((state) => state.todoList)
  const isFetchTodoList = useSelector((state) => state.isFetchTodoList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoListAction())
    axios.get(`${PATH}todos`).then(res => {
      dispatch(successFetchTodoList(res.data))
    })
  },[])

  const handleChecked = (doneItem) => {
    axios.put(`${PATH}todo/${doneItem.id}`, {
      ...doneItem,
      checked: !doneItem.checked
    }).then(() => {
      dispatch(toggleTodoAction(doneItem.id))
    })
  }

  if(isFetchTodoList) return <p>...loading</p>

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