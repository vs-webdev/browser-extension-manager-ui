
const ExtensionsFilter = ({setFilter}) => {
  return (
    <div className="filter-head">
      <h2>Extensions List</h2>
      <ul className="filter-list">
        <li>
          <button onClick={() => setFilter('all')}>All</button>
        </li>
        <li>
          <button onClick={() => setFilter('active')}>Active</button>
        </li>
        <li>
          <button onClick={() => setFilter('inactive')}>Inactive</button>
        </li>
      </ul>
    </div>
  )
}

export default ExtensionsFilter
