import { useState } from 'react'

function DynamicForm() {
  const [teams, setTeams] = useState([
    { name: '', motto: '', wins: 0, losses: 0 },
  ])

  const handleAddTeam = () => {
    console.log('!')
    const newTeams = [...teams]

    newTeams.push({ name: '', motto: '', wins: 0, losses: 0 })

    setTeams(newTeams)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(teams)
  }

  const handleChange = (event, index) => {
    const { name, value } = event.target

    const updatedTeams = [...teams]
    
    
    updatedTeams[index][name] = value

    setTeams(updatedTeams)
  }

  const handleRemoveTeam = (index) => {
    const updatedTeams = [...teams]

    updatedTeams.splice(index, 1)

    setTeams(updatedTeams)
  }

  return (
    <>
      <h1>Team Sign Up</h1>
      <button onClick={handleAddTeam}>Add team</button>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <button>submit</button>
        <br />
        <br />

        {teams.map((team, index) => {
          return (
            <div key={index}>
              <input placeholder="team name" name='name' value={team.name} onChange={(event) => handleChange(event, index)} />

              <input placeholder="motto" name='motto' value={team.motto} onChange={(event) => handleChange(event, index)} />

              <input placeholder="wins" name='wins' value={team.wins} type="number" onChange={(event) => handleChange(event, index)} />

              <input placeholder="losses" name='losses' value={team.losses} type="number" onChange={(event) => handleChange(event, index)} />
              
              <button onClick={() => handleRemoveTeam(index)}>delete</button>
              <br />
              <br />
            </div>
          )
        })}
      </form>
    </>
  )
}

export default DynamicForm
