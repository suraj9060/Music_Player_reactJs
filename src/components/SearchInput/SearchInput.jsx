import React from 'react'
import { searchIconGrey } from '../assets'
import "./searchinput.css"

function SearchInput() {
  return (
      <div className='search-input-container flex'>
          <img src={searchIconGrey} alt="" />
          <input type="text"  placeholder='find your music'/>
    </div>
  )
}

export default SearchInput