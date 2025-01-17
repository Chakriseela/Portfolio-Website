import './index.css'

const Skills = props => {
  const {skillDetails} = props
  const {imgURL, skillName} = skillDetails
  return (
    <div className="icon-card">
      <img className="icon-img" src={imgURL} alt={skillName} />
      <h2 className="icon-name">{skillName}</h2>
    </div>
  )
}

export default Skills
