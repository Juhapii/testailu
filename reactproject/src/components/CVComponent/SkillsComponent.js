import React from 'react';
import './style.css';

 export const SkillsComponent = (props)=>{
  return <section className="CVpage bg-primary" id="CVpage">
    <div className="container">
      <div class="row justify-content-center mt-5">
          <div class="col-12">
            <div className="section-heading text-left">
              <h2 class="text-left font-weight-bold">Licenses</h2>
            </div>
          </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div className="section-heading text left">
            <h4 class="text-left">Electrical safety (Sähkötyöturvallisuus -kortti)</h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div className="section-heading text-left">
            <h4 class="text-left">Hot work safety (Tulityökortti)</h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div className="section-heading text-left">
            <h4 class="text-left">Occupational safety (Työturvallisuus -kortti)</h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div className="section-heading text-left">
            <h4 class="text-left">Live electric work (Jännitetyö 1kV -kortti)</h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div className="section-heading text-left">
            <h4 class="text-left">First-aid 1 course (Ensiapu 1)</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
};