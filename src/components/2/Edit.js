import { useState } from "react"

export default function Edit({ changeMyText, myText, finishEdit }) {
  const [tmpText, changeTmpText] = useState(myText)
  return(
    <>
      <input type="text" value={tmpText} onChange={
        e => changeTmpText(e.currentTarget.value)
      } />
      <button type="buttton" onClick={
        () => {
          changeMyText(tmpText)
          finishEdit()
        }
      }>change</button>
      <button type="button" onClick={
        () => {
          changeTmpText(myText)
          finishEdit()
        }
      }>chancel</button>
    </>
  )
}