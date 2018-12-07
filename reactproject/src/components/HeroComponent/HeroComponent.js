import React, { Component } from 'react';
import './style.css';
import '../../device-mockups/device-mockups.css'
import panda1 from '../../Panda.png';
/*import panda from './img/panda.png'*/

export const HeroComponent = (props)=>{
  return <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Testing my new joyful homepage :D</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Tähän joku nappula :D</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device">
              {/*<div className="screen">*/}
                <img src={panda1} className="img-fluid" alt="" />
              </div>
              <div className="button">
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
};