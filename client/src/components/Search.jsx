export default function Search (props) {
  return (
    <div>
      <form onSubmit={props.onClick}>
        <input type='text' name="search" placeholder="Search Player" value={props.search} onChange={props.handleChange} className='search-bar'/>
        <button type='submit' className='search-submit'>Submit</button>
      </form>
    </div>
  )
}