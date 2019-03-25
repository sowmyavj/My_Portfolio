import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import Contact from './Contact';

class HomePage extends Component {
  render() {
    const technologies = ['JavaScript', 'ReactJS', 'Redux', 'Bootstrap', 'HTML5', 'CSS', 'Babel', 'Webpack', 'Redis', 'Postgresql', 'MongoDB'];

    return (
      <div className="homePage">
        <ProfilePicture/>
        <h2 className="display-4">Hi, I am Sowmya</h2>
        <p className="lead">I am a front-end developer. ReactJS made me fall in love with web development.</p>
        <p className="lead">I am currently looking for opportunities in frontend development. I have over six years of experience
            in software development.
        </p>
        <hr className="my-4"/>
        <ul id="horizontal-list">
            {technologies.map(item => <li>{item}</li>)}
        </ul>
        <Contact/>
      </div>
    )
  }
}
export default HomePage;