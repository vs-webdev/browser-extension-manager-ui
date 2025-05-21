import { useState } from "react"

const Card = ({content}) => {
  const [toggles, setToggle] = useState([])
  
  return (
    <div className="card-container">
      <div className="card-content">
        <img src={content.logo} />
        <div>
          <h3>{content.name}</h3>
          <p>{content.description}</p>
        </div>
      </div>

      <div className="card-btn">
        <button>Remove</button>
        <div className="toggle-btn" ><div className="knob"></div></div>
      </div>
    </div>
  )
}

export default Card
