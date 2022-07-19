// Ajax：https://qiita.com/hisamura333/items/e3ea6ae549eb09b7efb9
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import ListPage from './components/5/ListPage'
import AddPage from './components/5/AddPage'
import Header from './components/5/Header'
import DeletePage from './components/5/DeletePage'
import EditPage from './components/5/EditPage'

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='/add' element={<AddPage />} />
        <Route path='/delete/:id' element={ <DeletePage /> } />
        <Route path='/edit/:id' element={ <EditPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;