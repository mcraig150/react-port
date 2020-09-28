import React, { Component } from "react";
import Header from "../Componets/Header";
import resume from "../assets/Matthew Craig Resume.pdf";
import './Contact.css'
export class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="contact">
          <ul className='contact__text'>
            <li>
              Email:
              <a href="mailto:mcraig150@gmail.com">Mcraig150@gmail.com</a>
            </li>
            <li>Phone: 860 712 2858</li>
            <li>
              gitHub:
              <a href="https://github.com/mcraig150">Mcraig150</a>
            </li>
            <li>
              Linkedin:
              <a href="https://www.linkedin.com/in/matthew-craig-7a7aa01a8/">
                Matthew Craig
              </a>
            </li>
            <li>
              <a href={resume} s>
                Click here for my resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
