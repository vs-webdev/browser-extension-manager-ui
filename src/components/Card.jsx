
const Card = ({extension, removeFunc, id, handleToggle}) => {

  return (
    <div className="card-container">
      <div className="card-content">
        <img src={extension.logo} />
        <div className="card-header">
          <h3 className="card-heading">{extension.name}</h3>
          <p className="card-desc">{extension.description}</p>
        </div>
      </div>

      <div className="card-btn">
        <button className="remove-btn" onClick={() => removeFunc(id)}>Remove</button>
        <div className={`toggle-btn ${extension.isActive ? 'isActive' : 'notActive'}`} onClick={() => handleToggle(id)}>
          <div className="knob" style={{left: `${extension.isActive ? '21px' : '3px'}`}}></div>
        </div>
      </div>
    </div>
  )
}

export default Card
