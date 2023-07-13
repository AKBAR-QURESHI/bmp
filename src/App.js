
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Client from './components/Client';
import Service from './components/service';
import {BrowserRouter} from 'react-router-dom';
import Testinomial from './components/Testinomial';
import Faq from './components/Faq';
import Contact from './components/Contact';
import About2 from './About2';
import Footer from './Footer';






function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <About/>
        <About2/>
        <Client/>
        <Service/>
        <Testinomial/>
        <Faq/>
        <Contact/>
        <Footer/>
       </BrowserRouter>
        
    </div>
  
  );
}

export default App;
