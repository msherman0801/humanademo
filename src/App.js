import React from 'react';
import logo from './logo.svg';
import "jquery/dist/jquery.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/main/MainContainer'
import Main from './components/main/MainContainer'
import MyPlans from './components/user/plans/MyPlans'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
        <Route exact path="/" component={Main}/>
        <Route exact path="/myplans" component={MyPlans}/>
    </Router>
    </div>
  );
}

export default App;
