import Card from './Card.jsx'

const ExtensionsList = ({extensions, setExtensions, filteredExtensions}) => {

  const handleRemove = (id) => {
    const newExtensions = extensions.filter((extension) => id !== extension.id)
    setExtensions(newExtensions)
  }
  
  const handleToggle = (id) => {
    const newData = extensions.map(extension => {
      return extension.id === id ? {...extension, isActive: !extension.isActive} : extension
    })
    setExtensions(newData)
  }

  return (
    <div className="extensions-container">
      <ul className='extensions'>
        {filteredExtensions.map((extension) => 
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
