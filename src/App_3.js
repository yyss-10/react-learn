import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import ListPage from './components/3/ListPage'
import AddPage from './components/3/AddPage'
import Header from './components/3/Header'
import DeletePage from './components/3/DeletePage'

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

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ListPage list={ list } />} />
        <Route path='/add' element={<AddPage addListItem={ addListItem }/>} />
        <Route path='/delete/:id' element={ <DeletePage list={ list } deleteListItem= { deleteListItem } /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;