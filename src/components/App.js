import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../styles/styles.css';
import HomePage from './HomePage';
import Resume from './Resume';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="resume" exact path="/resume" component={Resume} />
        </div>
      </Router>
    )
  }
}
export default App;