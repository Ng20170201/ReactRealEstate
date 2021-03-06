import React, {useState} from 'react'

import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/infoData';
import Contact from './components/pages/contact';

import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';

function App() {

  const [isOpen,setIsOpen]= useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
  
  <Router>
  
    <GlobalStyle />
   <Navbar toggle={toggle}/>
   <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData} />
  <InfoSection {...InfoData} />
  <Switch>
         
          <Route path='/contact' component={Contact}/>

        </Switch>
  </Router>
    </>
  );
}

export default App;
