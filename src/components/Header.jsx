
const Header = ({theme, setTheme}) => {
  return (
    <div className='header-container'>
      <div>
        <img src="./assets/images/logo.svg" alt="" />
      </div>
      <div className="theme-container" onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>
        <img src={`${theme === 'light' ? './assets/images/icon-moon.svg' : './assets/images/icon-sun.svg'}`} alt="" />
      </div>
    </div>
  )
}

export default Header
