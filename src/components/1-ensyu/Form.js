export default function Form() {
  return(
    <div className="form">
      <label htmlFor="text">追加：</label>
      <input type="text" id="text" defaultValue="ダミー" />
      <input type="button" value="追加" />
    </div>
  )
}