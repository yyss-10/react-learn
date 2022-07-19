import logo from './logo.svg'
import MyH1 from './components/1/MyH1';
import MyH2 from './components/1/MyH2';

// function MyH1() {
//   return(
//     <h1>Hello, World!</h1>
//   )
// }

// function MyH2() {
//   return(
//     <h2>texttext</h2>
//   )
// }

function App() {
  const items = ['りんご','みかん','ばなな']
  const flag = true
  const props = {
    id: 'bar',
    className: 'foo',
    title: 'aaa'
  }
  const className = 'red'
  const text = '今の時間は'
  const time = Date.now()
  return (
    <>
      <MyH1 />
      <MyH2 />
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      {/* 即時関数：https://qiita.com/katsukii/items/cfe9fd968ba0db603b1e */}
      { flag && <h1>h1</h1> }
      { flag ? <h1>h1</h1> : <h2>h2</h2> }
      {/* スプレッド構文：https://qiita.com/akisx/items/682a4283c13fe336c547 */}
      <h1 {...props}>Hello, World!</h1>
      <div className={className}>
        {text}{time}/{1+2+3}
      </div>
      <h1 style={{color: 'red', fontSize: '12px'}}>Hello, World!</h1>
      <input type="radio" name="radio1" value="1" defaultChecked='checked' />
      <input type="radio" name="radio1" value="2" />
      <input type="text" defaultValue="foo" />
      <h1 tabIndex="1">Hello, World!</h1>
      <label htmlFor="foo">text</label>
      <input type="text" id="foo" />
      <img src={logo} alt="" />
      {/* コメントアウト */}
      <h1
        className="foo"
        // title="bar"
        id="aiueo"
      >Hello, world!</h1>
      <h2>texttext</h2>
    </>
  );
}

export default App;
