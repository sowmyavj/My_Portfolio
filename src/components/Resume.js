import React, { Component } from "react";
import resume from '../docs/Sowmya_Vijayakumar_resume.pdf';
import { PDFReader } from 'react-read-pdf';
export default class Resume extends Component{
  render(){
    return <div style={{overflow:'scroll'}}>
            <PDFReader url={resume}/>
           </div>
  }
}