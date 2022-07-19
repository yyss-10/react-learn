import { useState } from 'react';
import Header from './components/2-ensyu/Header';
import List from './components/2-ensyu/List';
import Form from './components/2-ensyu/Form';

function App() {
  const [lists, changeLists] = useState(
    [
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
    ]
  )

  const startEdit = (editIndex) => {
    const newList = lists.map((item, index) => {
      if(editIndex === index) {
        return {
          ...item,
          isEditing: true
        }
      } else {
        return item
      }
    })
    changeLists(newList)
  }

  const finishEdit = (editIndex) => {
    const newList = lists.map((item, index) => {
      if(editIndex === index) {
        return {
          ...item,
          isEditing: false
        }
      } else {
        return item
      }
    })
    console.log(newList, 'aaa')
    changeLists(newList)
  }

  return(
    <>
      <div className='App'>
        <Header />
        <List lists={ lists } changeLists={ changeLists } startEdit={ startEdit } finishEdit={ finishEdit } />
        <Form lists={ lists } changeLists={ changeLists } />
      </div>
    </>
  )
}

export default App;
