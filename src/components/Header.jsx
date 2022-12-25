import React from 'react'

const Header = ({changeMode}) => {
  return (
    <div className='header'>
      <h1>📜Notes</h1>
      <button className="save" onClick={changeMode}>Toggle Mode</button>
    </div>
  )
}

export default Header