//there needs to be a handle change function above wherever this component ends up
import {useNavigate} from 'react-router-dom'


export default function NewPlayer (props) {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    props.onSubmit(e)
    navigate("/players")
  }

  return (
    <div>
      <h1>New Player Form</h1>
      <h4>Please enter their information below...</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="playerName"
          placeholder="Player Name"
          value={props.playerName}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="image"
          placeholder="Player Image url"
          value={props.image}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="age"
          placeholder="Player Age"
          value={props.age}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="nationality"
          placeholder="Player Nationality"
          value={props.nationality}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="height"
          placeholder="Player Height"
          value={props.height}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="club"
          placeholder="Player Club"
          value={props.club}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="league"
          placeholder="Player League"
          value={props.league}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="skills"
          placeholder="Player Skills"
          value={props.skills}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
      <br></br>
      <br></br>
      {/* <div>
        <button onClick={props.returnPage}>Back</button>
        <button onClick={props.incrementPage} disabled={formComplete}>Next</button>
      </div> */}
    </div>
  )
}