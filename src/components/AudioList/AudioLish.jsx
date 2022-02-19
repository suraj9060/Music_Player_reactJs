import React from "react";
import { backIcon } from "../assets";
import "./AudioList.css";

function AudioLish( {onBackButtonPress}) {
  return (
    <div className="audio-ls m-20">
      {/* AudioLish */}
      <div className="audio-ls-header">
        <img onClick={onBackButtonPress} src={backIcon} alt="" />
      </div>

      <ul>
        <li className="audio-ls-container mlr-20 mtb-5">
          <div className="audio-ls-item flex">
            <div className="audio-img">
              <img src="" alt="" />
            </div>

            <div className="audio-info mtb-20">
              <p>song name kabhi door na jaya karo </p>
              <p>artiest name</p>
            </div>
                  </div>
                  
                  <div className="audio-ls-item flex">
            <div className="audio-img">
              <img src="" alt="" />
            </div>

            <div className="audio-info mtb-20">
              <p>song name kabhi door na jaya karo </p>
              <p>artiest name</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AudioLish;
