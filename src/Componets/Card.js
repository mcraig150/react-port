import React, { Component } from "react";
import "./Card.css";
import Capture from './Capture.PNG'

export class Card extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <div>
          <div className="Project">
            <h3>{this.props.project.name}</h3>
            <p className="Project__text">{this.props.project.text}</p>
            <a className="Project__link" href={this.props.project.link}>
              Project Link
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
