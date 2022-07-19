import { useState } from "react"

export default function Edit({ lists, index, changeLists, finishEdit }) {
  const [tmpText, changeTmpText] = useState(lists[index].title)

  return(
    <>
      <input type="text" value={tmpText} onChange={
        e => changeTmpText(e.currentTarget.value)
      } />
      <button type="button" onClick={
        () => {
          const newa = lists.map((item, i) => {
            if(index === i) {
              return {
                ...item,
                isEditing: false,
                title: tmpText
              }
            } else {
              return item
            }
          })
          changeLists(newa)
        }
      }>change</button>
      <button type="button" onClick={
        () => {
          finishEdit(index)
        }
      }>chancel</button>
    </>
  )
}