export default function Search (props) {
  return (
    <div>
      <form onSubmit={props.onClick}>
        <input type='text' name="search" placeholder="Search" value={props.search} onChange={props.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}