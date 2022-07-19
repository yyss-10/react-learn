import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useTodo from '../../hooks/useTodo'


export default function ListPage() {
  const { todoList, isFetchTodoList, fetchTodoList, toggleTodo } = useTodo()

  useEffect(() => {
    fetchTodoList()
  },[fetchTodoList])

  const handleChecked = (doneItem) => {
    toggleTodo(doneItem)
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