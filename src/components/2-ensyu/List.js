import React from "react";
import Edit from './Edit';

export default function List({ lists, changeLists, startEdit, finishEdit }) {
  return(
    <>
      <ul>
        { lists.map((item, i) =>
          <React.Fragment key={i}>
            {!item.isEditing ?
              <li
                className={ item.checked ? 'checked' : '' }
                onClick={
                  () => {
                    startEdit(i)
                  }
                }
              >{item.title}</li>
              :
              <li>
                <Edit
                  lists={ lists }
                  index={ i }
                  changeLists={ changeLists }
                  finishEdit={ finishEdit }
                />
              </li>
            }
          </React.Fragment>
        )}
      </ul>
    </>
  )
}