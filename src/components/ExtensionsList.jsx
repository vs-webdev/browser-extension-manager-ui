import { useEffect, useState } from 'react'
import Card from './Card.jsx'

const ExtensionsList = ({extensions, setExtensions}) => {
  const [toggles, setToggles] = useState([])

  // useEffect(() => {
  //   const to = extensions.map(extension => extension.isActive)
  //   setToggles(to)
  // }, [toggles])

  const handleRemove = (id) => {
    const newExtensions = extensions.filter((extension) => id !== extension.id)
    setExtensions(newExtensions)
  }
  
  const handleToggle = (id) => {
    const newData = extensions.map(extension => {
      const newIsActive = !extension.isActive
      if (extension.id === id){
        return ({...extension, isActive:newIsActive})
      } else {
        return ({...extension})
      }
    })
    setExtensions(newData)
  }

  return (
    <div className="extensions-container">
      <ul className='extensions'>
        {extensions.map((extension) => 
          <li key={extension.id}>
            <Card extension={extension} 
              removeFunc={handleRemove} 
              id={extension.id} 
              handleToggle={handleToggle}
            />
          </li>
        )}
      </ul>
    </div>
  )
}

export default ExtensionsList
