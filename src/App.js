import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import resumeData from './resumeData'



function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1');
  ReactGA.pageview('/');
} 

initializeReactGA();

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: resumeData
    };
    console.log(`Thank you very much in your interest! \nI'm excited to speak with you directly about the possibility of joining your team.
    \nmarkmcclatchy@gmail.com`)
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }
  
  

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume} portfolio={this.state.resumeData.portfolio} />
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
