import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import ListPage from './components/3-ensyu/ListPage'
import AddPage from './components/3-ensyu/AddPage'
import Header from './components/3-ensyu/Header'
import DeletePage from './components/3-ensyu/DeletePage'
import EditPage from './components/3-ensyu/EditPage'

function App() {
  const [list, changeList] = useState([
    {
      title: 'Reactのインストール',
      checked: true,
      isEditing: false
    },
    {
      title: 'JSXを学ぶ',
      checked: true,
      isEditing: false
    },
    {
      title: 'コンポーネントの分離',
      checked: false
    },
    {
      title: '演習',
      checked: false,
      isEditing: false
    }
  ])

  const addListItem = (title) => {
    const newList = [
      ...list,
      {
        title: title,
        checked: false
      }
    ]
    changeList(newList)
  }

  const deleteListItem = (deleteIndex) => {
    const newList = list.filter((item, index) => index !== deleteIndex)
    changeList(newList)
  }

  const editListItem = (editTitle, editIndex) => {
    const newList = list.map((item, index) => {
      if(index === editIndex) {
        return {
          ...item,
          title: editTitle
        }
      } else {
        return item
      }
    })
    changeList(newList)
  }

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ListPage list={ list } />} />
        <Route path='/add' element={<AddPage addListItem={ addListItem }/>} />
        <Route path='/delete/:id' element={ <DeletePage list={ list } deleteListItem= { deleteListItem } /> } />
        <Route path='/edit/:id' element={ <EditPage list={ list } editListItem= { editListItem }  /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;