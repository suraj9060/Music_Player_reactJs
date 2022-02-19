import React from 'react'
import "./tab.css"

function Tabs() {
  return (
      <div className='tab-container'>
          <div className='tab-header flex'>
              <a className='active' href="#albam">Albams</a>
              <a className='' href="#songs">
                  Songs
              </a>
          </div>

          {/* Tab content */}
          <div className='tab-contents'>
              <div className='tab-content' id='albam'>
                  {/* Albams item */}
                  <div className='content-wrapper flex justify-sb m-20'>
                      <div className='content-item'>
                          <img />
                      </div>
                      <div className='content-item'>
                          <img />
                      </div>
                      <div className='content-item'>
                          <img />
                      </div>
                      <div className='content-item'>
                          <img />
                      </div>
                  </div>
              </div>
              <div className='tab-content' id='songs'>
                  Songs
              </div>

          </div>

    </div>
  )
}

export default Tabs