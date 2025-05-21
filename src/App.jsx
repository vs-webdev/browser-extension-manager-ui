import { useEffect, useState } from 'react'
import ExtensionsList from './components/ExtensionsList'
import './App.css'

function App() {
  const [cardData, setCardData] = useState([])
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((rawData) => {
        setCardData(rawData)
      })
  }, [])

  return (
    <>
      <ExtensionsList cardList={cardData}/>
    </>
  )
}

export default App
