import React from 'react'
import { searchIcon } from '../assets'

function Header() {
  return (
      <div className='header flex justify-sb'>
          <div>
              <img src="https://webscript.info/webscript-logo.png" alt="w" />
          </div>
          <div>
              <img src={searchIcon} alt="" />
          </div>
    </div>
  )
}

export default Header