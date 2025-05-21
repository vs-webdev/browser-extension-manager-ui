import Card from './Card.jsx'
import uuid from 'react-uuid'

const ExtensionsList = ({cardList}) => {
  return (
    <div className="extension-list-container">
      <ul className='extension-list'>
        {cardList.map((cardContent, index) => 
          <li key={uuid()}>
            <Card content={cardContent}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ExtensionsList
