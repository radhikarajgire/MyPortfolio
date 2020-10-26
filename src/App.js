import React from 'react';
import Sidebar from "./components/Sidebar.js";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import Projects from './components/Projects.js';
import Resume from './components/Resume';
import About from './components/About';

function App() {
  return (
    <Router>
    <div className="App">
      <div className ="container app_container">
         <div className ="row app_row">
        <div className ="col-lg-3"> 
       
        <Sidebar />
     
       </div>
      <div className ="col-lg-9 app_mainbar">
      <Navbar />
      
      <Switch>
      <Route exact path ="/">
        <About/>
      </Route>
      <Route path ="/resume">
        <Resume/>
      </Route>
      <Route path ="/projects" component={Projects}>
        <Projects/>
      </Route>
      <Route>
        <Redirect to ='/'/>
      </Route>
      </Switch>
     
      </div>
    </div>
        </div>

      </div>
      </Router>
     
  );
}

export default App;
