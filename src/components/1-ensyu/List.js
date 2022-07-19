export default function List() {
  const lists = [
    {
      title: 'Reactのインストール',
      checked: true
    },
    {
      title: 'JSXを学ぶ',
      checked: true
    },
    {
      title: 'コンポーネントの分離',
      checked: false
    },
    {
      title: '演習',
      checked: false
    }
  ]
  return(
    <ul>
      { lists.map((list, i) =>
        <li
          key={i}
          className={ list.checked && 'checked' }
        >{list.title}</li>
      )}
    </ul>
  )
}