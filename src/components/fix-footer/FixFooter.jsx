import React from "react";
import { useState } from "react";
import { closeIcon, homeIcon, nextIcon, playBlackIcon, playGreyIcon, prevIcon, userIcon } from "../assets";
import "./fixFooter.css";

function FixFooter() {
  const [slideUp, setSlideUp] = useState(false);
  return (
    <div className={`fix-footer ${slideUp ? "active" : ""}`}>
      {/* FixFooter */}
      <div onClick={() => setSlideUp(!slideUp)} className="slide-up-btn"></div>
      <div className="d-visilibity"></div>

          {
              slideUp && (
                  <div className="audio-player-lg">
                      <div className="audio-cover-lg-img">
                          <img />
                      </div>
                      <div>
                          <h2>song name here</h2>
                          <h3>artiest name here</h3>
                      </div>
                      <div className="audio-player-progress">
                          <input
                              type="range"
                              min={'0'}
                              max={'100'}
                          />
                      </div>
                      <div className="audio-controls flex">
                          <button>
                              <img src={prevIcon} alt="img" />
                          </button>
                          <div className="play-Pause-btn">
                              <button>
                              <img src={playBlackIcon} alt="img" />
                              </button>
                          </div>
                          <button>
                              <img src={nextIcon}  alt="img"/>
                          </button>
                      </div>


                  </div>
              )
          }


      {!slideUp && (
        <>
          <div className="mini-player flex justify-sb align-center">
            <div className="flex mainContainer align-center">
              <div className="artist-cover-img">
                <img />
              </div>
              <div className="mini-player-info mtb-10">
                <p>song name olss olaa</p>
                <p> artist name </p>
              </div>
            </div>
            <div className="mini-player-control flex">
              <button>
                <img src={playGreyIcon} alt="" />
              </button>
              <button>
                <img src={closeIcon} alt="" />
              </button>
            </div>
          </div>
          {/* Nevagation Menu */}

          <div className="navigation-menu flex justify-evenly">
            <a href="">
              <div>
                <img src={homeIcon} />
              </div>
              <div>
                <span>Home</span>
              </div>
            </a>
            <a href="">
              <div>
                {" "}
                <img src={userIcon} alt="" />
              </div>
              <div>
                {" "}
                <span>Profile</span>
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default FixFooter;
