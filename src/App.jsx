import { useEffect, useState } from 'react'
import ExtensionsList from './components/ExtensionsList'
import ExtensionsFilter from './components/ExtensionsFilter'
import uuid from 'react-uuid'
import './App.css'

function App() {
  const [extensions, setExtensions] = useState([])
  const [filter, setFilter] = useState('all')
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((rawData) => {
        const extensionsWithId = rawData.map((data) => {
          const id = uuid()
          return {...data, id}
        })
        setExtensions(extensionsWithId)
      })
    }, [])
    
    const filteredExtensions = extensions.filter(extension => {
      if (filter === 'active') return extension.isActive;
      if (filter === 'inactive') return !extension.isActive;
      return true;
    })

  return (
    <>
      <ExtensionsFilter setFilter={setFilter}/>
      <ExtensionsList extensions={extensions} filteredExtensions={filteredExtensions} setExtensions={setExtensions}/>
    </>
  )
}

export default App