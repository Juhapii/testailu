import React, { Component } from 'react';
/*import ReactDOM from 'react-dom';*/

import './App.css';
/*import 'font-awesome/css/font-awesome.css';*/

import {FooterComponent}  from './components/FooterComponent/FooterComponent';
import {PictureComponent} from './components/PictureComponent/PictureComponent'
import {PictureComponent2} from './components/PictureComponent/PictureComponentt2'
import {ProjectsComponent} from './components/ProjectsComponent/ProjectsComponent';
import {CVComponent} from './components/CVComponent/CVComponent';
import {SkillsComponent} from './components/CVComponent/SkillsComponent';
import {MainComponent} from './components/MainComponent/MainComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
/*import Burgermenu from './components/Hamburger/burgermenu';*/

class App extends Component {
  constructor(props){
    super(props);
    this.state={navBarShrink:""};
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    /*const domNode = ReactDOM.findDOMNode(this.navEl);*/
    const nbs = window.pageYOffset>100 ? "navbar-shrink" : "";
    this.setState({navBarShrink:nbs});
  }

  render() {
    const nbs = this.state ? this.state.navBarShrink : "";
    return (
      <div>
        <NavBarComponent navBarShrink = {nbs} />
        {/*<Burgermenu />*/}
        <MainComponent />
        <CVComponent />
        <PictureComponent2 />
        <ProjectsComponent />
        <PictureComponent />
        <SkillsComponent />
        <FooterComponent />
      </div> 
    );
  }
}

export default App;
