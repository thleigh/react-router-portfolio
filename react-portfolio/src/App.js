import React from 'react';
import './App.css';
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Go Back to Home</Link> {' '}
        <Link to="/about">About Me</Link>{' '}
        <Link to="/Projects">Projects</Link>{' '}
        <Link to="/Blog">Blog</Link>{' '}
      </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/projects/:id" component={Projects}/>
      <Route path="/blog" component={Blog}/>
    </div>
  );
}

export default App;
