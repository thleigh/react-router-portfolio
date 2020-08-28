import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Components/Home'
import Blog from './Components/Blog'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Projects from './Components/Projects'


function App() {

  const projects = [
    {title: "upnext", link:""},
    {title: "galaga", link:""}
  ]

  return (
    <Router>
    <div className="App">

      <nav className="navBar">
        <Link to="/">Go Back to Home</Link> {' '}
        <Link to="/about">About Me</Link>{' '}
        <Link to="/portfolio">Portfolio</Link>{' '}
        <Link to="/blog">Blog</Link>{' '}
      </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />

      <Route path="/portfolio" render={(props) => <Portfolio {...props} projects={projects}/>}/>

      <Route exact path="/portfolio/:id" render={props => {
        return <Projects {...props} projects={projects}/>}
        }/>

      <Route path="/blog" component={Blog}/>

    </div>
    </Router>
  );
}

export default App;
