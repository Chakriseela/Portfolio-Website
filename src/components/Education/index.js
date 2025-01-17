import './index.css'

const Education = props => {
  const {} = props

  return (
    <div className="EduContainer">
      <div className="EduCard">
        <img
          className="Eduimg"
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/education-badge-4037919-3433572.png?f=webp&w=512"
        />
        <div>
          <h1 className="eduYear">2019-2021</h1>
          <h1 className="eduStandard">Intermediate (11th to 12th)</h1>
          <h1 className="eduClg">Sasi Junior College</h1>
          <h1 className="eduLocation">Vizag, Andhra Pradesh</h1>
        </div>
      </div>
      <div className="EduCard">
        <img
          className="Eduimg"
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/education-badge-4037919-3433572.png?f=webp&w=512"
        />
        <div>
          <h1 className="eduYear">2021-2025</h1>
          <h1 className="eduStandard">
            B.Tech Artificial Intelligence and Machine Learning
          </h1>
          <h1 className="eduClg">Lovely Professional University</h1>
          <h1 className="eduLocation">Punjab, Jalandhar</h1>
        </div>
      </div>
    </div>
  )
}

export default Education
