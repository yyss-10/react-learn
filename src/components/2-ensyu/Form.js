import { useState } from "react"

export default function Form({ lists, changeLists }) {
  const [listText, changeListText] = useState('ダミー')
  return(
    <div className="form">
      <label htmlFor="text">追加：</label>
      <input type="text" id="text" value={listText} onChange={
        e => changeListText(e.currentTarget.value)
      } />
      <input type="button" value="追加" onClick={
        () => {
          changeLists(
            [
              ...lists,
              {
                title: listText,
                checked: false
              }
            ]
          )
        }
      }/>
    </div>
  )
}