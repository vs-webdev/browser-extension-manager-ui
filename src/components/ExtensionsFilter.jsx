
const ExtensionsFilter = ({filter, setFilter}) => {
  
  return (
    <div className="filter-head">
      <h2>Extensions List</h2>
      <ul className="filter-list">
        <li>
          <button className={`${filter === 'all' ? 'filter-btn filter-active' : 'filter-btn'}`} onClick={() => setFilter('all')}>All</button>
        </li>
        <li>
          <button className={`${filter === 'active' ? 'filter-btn filter-active' : 'filter-btn'}`} onClick={() => setFilter('active')}>Active</button>
        </li>
        <li>
          <button className={`${filter === 'inactive' ? 'filter-btn filter-active' : 'filter-btn'}`} onClick={() => setFilter('inactive')}>Inactive</button>
        </li>
      </ul>
    </div>
  )
}

export default ExtensionsFilter
