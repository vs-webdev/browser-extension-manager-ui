import { useEffect, useState } from 'react'
import ExtensionsList from './components/ExtensionsList'
import uuid from 'react-uuid'
import './App.css'

function App() {
  const [extensions, setExtensions] = useState([])

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((rawData) => {
        const extensionsWithId = rawData.map((data) => {
          const id = uuid()
          return {
            ...data,
            id
          }
        })
        setExtensions(extensionsWithId)
      })
  }, [])

  return (
    <>
      <ExtensionsList extensions={extensions} setExtensions={setExtensions}/>
    </>
  )
}

export default App
