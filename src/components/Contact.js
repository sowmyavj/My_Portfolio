import React, { Component } from 'react';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github.png';

class Contact extends Component {
  render() {
    return (
        <div className="contact">
        <a href="https://www.linkedin.com/in/sowmya-vijayakumar-a72ab668/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn logo" className="img-circle logo"/></a>
        <a href="https://github.com/sowmyavj/" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github logo" className="img-circle logo"/></a>
        </div>
    )
  }
}
export default Contact;