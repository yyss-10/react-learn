import { useState } from 'react'
import Edit from './components/2/Edit'

// function Button({ increment }) {
//   return(
//     <button type='button' onClick={
//       () => increment()
//     }>increment</button>
//   )
// }

// function ChildComponent({ myText }) {
//   return(
//     <h1>{ myText }</h1>
//   )
// }

function App() {
  const [isEditing, changeEditing] = useState(false)
  const [myText, changeMyText] = useState('')
  // const [myNo, changeMyNo] = useState(0)
  // const increment = () => {
  //   changeMyNo(myNo + 1)
  // }
  // const [isEditing, changeEditing] = useState(false)
  // const [tmpText, changeTmpText] = useState('')
  // const [myText, changeMyText] = useState('')
  // const [myNo, changeMyNo] = useState(0)
  // const handleClick = () => { console.log('ok'); }
  const finishEdit = () => {
    changeEditing(false)
  }

  return(
    <>
      <div className='App'>
        { !isEditing ?
          <p onClick={
            () => changeEditing(true)
          }>「{ myText }」</p>
          :
          <Edit
            changeMyText={changeMyText}
            myText={myText}
            finishEdit={finishEdit}
          />
        }
      </div>
      {/* { myNo }
      <Button increment={increment} /> */}
      {/* <ChildComponent myText='ABCD' />
      <ChildComponent myText='abcd' /> */}
      {/* <div className='App'>
        { !isEditing ?
          <p onClick={() => changeEditing(true)}>「{myText}」</p>
          :
          <>
            <input type="text" value={tmpText} onChange={
              e =>
                changeTmpText(e.currentTarget.value)
            } />
            <button type='button' onClick={
              () => {
                changeMyText(tmpText)
                changeEditing(false)
              }
            }>change</button>
            <button type='button' onClick={
              () => {
                changeTmpText(myText)
                changeEditing(false)
              }
            }>chancel</button>
          </>
        }
      </div> */}
      {/* <div className='App'>
        {myNo}
        <button type='button' onClick={() =>
          changeMyNo(myNo+1)
        }>increment</button>
      </div>
      <br />
      <div onClick={handleClick}>click（関数呼び出し）</div>
      <div onClick={() => console.log('ok')}>click</div> */}
    </>
  )
}

export default App;
