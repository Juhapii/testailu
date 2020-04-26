/*import React, { Component } from 'react';*/
import React from 'react';
import './style.css';
import 'simple-line-icons/css/simple-line-icons.css';

export const ProjectsComponent = (props)=>{
  return <section className="projects bg-primary" id="projects">
    <div className="container">
      <div className="section-heading text-center">
        <h2>My projects</h2>
        <p className="text-muted">Different projects here? Or other Abilities?</p>
        <hr />
      </div>
      <div className="row">
        <div class="col">
          <div className="section-heading text-left">
            <h2>Ability? Project?</h2>
            <p className="text-muted">Tähän jotain inffoa projektista</p>
            <hr />
          </div>
        </div>
        <div class="col">
          <div className="section-heading text-left">
            <h2>Tähän esim kuva?</h2>
            <p className="text-muted">Tai esim harrastuksista...</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
};