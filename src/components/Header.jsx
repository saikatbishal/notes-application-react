import React from 'react'

const Header = ({changeMode}) => {
  return (
    <div className='header'>        
      <h1>
        <svg viewBox="0 0 7 9" width="40" height="40">
        <path d="M1,6 C1,3 6,3 6,6" /></svg>
        📜Notes
      </h1>
      
     
      <button className="save" onClick={changeMode}>Toggle Mode</button>
    </div>
  )
}

export default Header