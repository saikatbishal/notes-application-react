import React from 'react'
import {MdSearch} from 'react-icons/md'
const Search = ({searchNotes}) => {
  return (
    <div className='search'>
      <MdSearch className = "search-icons" size="1.3em"/>
      <input onChange={(event)=>searchNotes(event.target.value)}type ="text" placeholder='Search' onClick={searchNotes}/>
    </div>
  )
}

export default Search