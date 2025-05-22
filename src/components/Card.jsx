
const Card = ({extension, removeFunc, id, handleToggle}) => {

  return (
    <div className="card-container">
      <div className="card-content">
        <img src={extension.logo} />
        <div>
          <h3>{extension.name}</h3>
          <p>{extension.description}</p>
        </div>
      </div>

      <div className="card-btn">
        <button onClick={() => removeFunc(id)}>Remove</button>
        <div className={`toggle-btn`} onClick={() => handleToggle(id)}>
          <div className={`knob ${extension.isActive ? 'isActive' : 'notActive'}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Card
