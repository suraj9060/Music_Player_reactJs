import React from "react";
import { useState } from "react";
import "./tab.css";
import {baseUrl} from "../../config"


function Tabs({ tabData, onItemSelect }) {
  const [touched, setTouched] = useState(false);
  const [active, setActive] = useState("");

  return (
    <div className="tab-container">
      {/* tab header */}
      <div className="tab-header flex">
        {/* <a className='active' href="#albam">Albams</a>
              <a className='' href="#songs">
                  Songs
              </a> */}

        {tabData &&
          Object.keys(tabData).map((tab, index) => (
            <a
              key={index}
              className={`${
                touched
                  ? active === tab
                    ? "active"
                    : ""
                  : tabData[tab].isActive
                  ? "active"
                  : ""
              }
                          `}
              href={`#${tab}`}
              onClick={() => {
                setTouched(true);
                setActive(tab);
              }}
            >
              {tabData[tab].label}
            </a>
          ))}
      </div>

      {/* Tab content */}
      <div className="tab-contents">
        {tabData &&
          Object.keys(tabData).map((tab, index) => (
            <div key={index} className="tab-content" id={`${tab}`}>
              <div className="content-wrapper flex justify-sb m-20">
                {tabData[tab].items.map((item, _index) => (
                  <div onClick={()=> onItemSelect(tab,item.key)} key={_index} className="content-item m-20 rel">
                    <div className="d-visilibity z-0"></div>
                    <img
                      src={`${baseUrl}/music/${item.key}/${item.key}.jpg`}
                      alt=""
                    />
                    <div className="flex justify-center align-center content-label">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Tabs;
