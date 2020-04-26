/*import React, { Component } from 'react';*/
import React from 'react';
import './style.css';
/*import panda1 from '../../Panda.png';*/
/*import panda1 from '../../pictures/Italy_1.png';*/
/*import panda from './img/panda.png'*/

export const MainComponent = (props)=>{
  return <header className="main">
    <div className="container h-100">
      <div class="row h-100 justify-content-center">
        <div class="col-10 my-auto">
          <div className="header-content justify-content-md-center text-center">
            <h1 class="font-weight-bold">Juha Piipponen</h1>
            <a>"Note: This homepage is my hobby project and at the moment it works as my CV page. Hope you still like it!"</a>
          </div>
        </div>
      </div>
    </div>
  </header>
};