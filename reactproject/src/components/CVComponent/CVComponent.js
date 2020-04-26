/*import React, { Component } from 'react';*/
import React from 'react';
import './style.css';

/*bg-primary text-center => tulee App.css tiedostosta, sielta voidaan vaihtaa erilaisia visuaalisia tietoja*/
 export const CVComponent = (props)=>{
  return <section className="CVpage bg-primary" id="CVpage">
    <div className="container">
      <div class="row justify-content-center mb-5">
        <div class="col-12 md-auto">
          <div className="section-heading justify-content-md-center text-center">
            <h2 class="font-weight-bold">About me</h2>
            <p>Graduated from Aalto University School of Electrical Engineering in 2019. My major is Electrical power and Energy Engineering. Technology enthusiastic, self-driven, hard-working.</p>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div className="section-heading text-left">
            <p></p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-4">
          <div className="section-heading text left">
            <h3 class="text-left font-weight-bold">Education</h3>
          </div>
        </div>
        <div class="col-8">
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">Aalto Univercity</p>
            <p class="text-left">2013 - 2019</p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="text-left font-weight-bold">Masters degree: Automation and electrical engineering. </p>
            <p class="text-left mt-2">My studies included electrical power distribution, electric and energy markets, building electricity etc. I was also very interested in programming. Masters thesis: Development and implementation of database-driven marine power system design software. </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">Aalto Univercity</p>
            <p class="text-left">2013 - 2016</p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="text-left font-weight-bold">Bachelor of Technology.</p> 
            <p class="text-left mt-2"> Electrical engineering. Included basics of electrical engineering and the utilization of different tools (mathlab, simulink, coding..). Bachelors thesis: Ultrasonic motors.</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col">
          <div className="section-heading text left">
            <h3 class="text-left font-weight-bold">Work experience</h3>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="text-left">2.5.2019 -</p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">ABB Oy Marine & Ports </p>
            <p class="text-left"><p class= "font-italic">Project engineer</p> My worktitle is a Project engineer and I mainly work as a Lead engineer for vessel projects. In addition, I am product owner for engineering process development project. In work, I have learned a lot about how engineering projects are scheduled, commisioned and how project challenges are encounterd and completed. </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="text-left">1.11.2018 – 30.4.2019</p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">ABB Oy Marine & Ports </p>
            <p class="text-left"><p class= "font-italic">Thesis worker</p> Thesis: Development and implementation of database-driven marine power system design software. My thesis was mainly developing design process of the system integration design of vessels power system. After my thesis I continued the development as a product owner for the development project.</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="text-left">7.5.2018 – 30.4.2019</p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">ABB Oy Marine & Ports </p>
            <p class="text-left"><p class= "font-italic">Project engineer trainee</p> System integration design in various vessel projects and utilizing mostly Eplan as my main design software. At first I was working as a summer worker and then part-time.</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="text-left">15.1.2018 -28.1.2018 </p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">Aalto University</p>
            <p class="text-left"><p class= "font-italic">Aalto Univercity Snapchat</p> I worked as a university "snapchatter" for two weeks for thousands of followers, including university students and highschool students. </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="text-left">2.5.2016 -31.8.2017</p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">ABB Oy, Drives</p>
            <p class="text-left"><p class= "font-italic">Trainee</p>Office work with drives in a product informarion management -team. I was working there two summers and part-time between. I learned important knowledge how to work in a group and I got my first touch to technology company. At my work SAP, Excel and VBA was my main tools. </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="text-left">1.9.2015-4.9.2015</p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">Aalto University</p>
            <p class="text-left"><p class= "font-italic">Orientation week assitant</p>Orientation week computer excercises for new students.</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-4">
          <div className="section-heading text left">
            <p class="text-left">Summers 2012-2015</p>
          </div>
        </div>
        <div class="col-8">
          <div className="section-heading text left">
            <p class="font-weight-bold text-left">Wurth Oy, Riihimäki</p>
            <p class="text-left"><p class= "font-italic">Warehouse worker</p>Various different warehouse tasks, including collecting products for deliveries, packing deliveries and working in chemical warehouse.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
};