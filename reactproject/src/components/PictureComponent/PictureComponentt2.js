/*import React, { Component } from 'react';*/
import React from 'react';

import './style.css';

/*const divStyle =  {
  backgroundImage: url("../../pictures/Joutsenet.jpg"),
};
*/


export const PictureComponent2 = (props)=>{
  return <section className="pic2">
    <div className="container">
      <h2>Just a picture here<br />And a button.</h2>
      <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger" button onclick="" >Button.</a>
      {/*<button onclick={divStyle}>Change color</button>*/}
      <input type="button"
        value="Pattern1"
        onclick= "background-image: url('../../pictures/Joutsenet.jpg'); background-repeat: no-repeat;">
      </input>
    </div>
  </section>
};