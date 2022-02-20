import React from "react";
import { baseUrl } from "../../config";
import { backIcon } from "../assets";
import "./AudioList.css";

function AudioLish({ onBackButtonPress, audioList }) {
  
  console.log(audioList)

  return (
    <div className="audio-ls m-20">
      {/* AudioLish */}
      <div onClick={onBackButtonPress} className="audio-ls-header">
        <img src={backIcon} alt="" />
      </div>

      <ul>
        {audioList.length &&
          audioList.map((item, index) => (
            <li key={index} className="audio-ls-container">
              <div className="audio-ls-item flex align-center">
                <div className="audio-img">
                  <img src={`${baseUrl}/${item.avatar}`} alt="img" />
                </div>

                <div className="audio-info mtb-10">
                  <p>{item.title} </p>
                  <p>{item.artist}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AudioLish;
