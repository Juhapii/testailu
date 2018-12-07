import React, { Component } from 'react';
import './style.css';
/*bg-primary text-center => tulee App.css tiedostosta, sielta voidaan vaihtaa erilaisia visuaalisia tietoja*/
 export const AppDownloadComponent = (props)=>{
  return <section className="download bg-primary text-center" id="download">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="section-heading">Vanhaa hyvää tami-ipsumii</h2>
          <p>Aamun kuntokoulu ohi, raskaalta tuntui; eilinen ja.-tappio painoi; never, ever GIVE UP my friend!!! Saako Mårts jatkaa???- ihmettelen jos ei tule vaihdoksia!! Nyt formulaa ; huipputiimi maikkarilla; Oskari, Eki, Mika, Timo-SIMPLY GREAT!! Hieno kiekkoilta; kaksi hyvin valmistettua joukkuetta; Rämö häikäisevä ja 1-3!! Vapaa sunnuntai näkyi suoritusten laadussa-parani loppua kohti!! TUTO IS BACK!!! Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!!</p>
        </div>
      </div>
    </div>
  </section>
};