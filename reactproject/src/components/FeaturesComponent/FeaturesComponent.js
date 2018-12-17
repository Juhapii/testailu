import React, { Component } from 'react';
import './style.css';
import 'simple-line-icons/css/simple-line-icons.css';
import demoScreen1 from '../../demo-screen-1.jpg';

export const FeaturesComponent = (props)=>{
  return <section className="features" id="features">
    <div className="container">
      <div className="section-heading text-center">
        <h2>Features, Joyfull, Masterfull</h2>
        <p className="text-muted">Greatness, Success, Perfectfull</p>
        <hr />
      </div>
      <div className="row">
        <div className="col-lg-4 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src={demoScreen1} className="img-fluid" alt="" />
                </div>
                <div className="button">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-screen-smartphone text-primary"></i>
                  <h3>Testi1</h3>
                  <p className="text-muted">Tekstiiii</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-camera text-primary"></i>
                  <h3>Testi5</h3>
                  <p className="text-muted">Tekstiiii :D</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-present text-primary"></i>
                  <h3>Testi2</h3>
                  <p className="text-muted">:DD</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-lock-open text-primary"></i>
                  <h3>Testi3</h3>
                  <p className="text-muted">?????</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};