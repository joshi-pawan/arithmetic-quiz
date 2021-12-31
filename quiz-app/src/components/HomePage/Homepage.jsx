import React, { Component } from "react";
import { get, map } from "lodash";
import Section from "../Section/Section";
import "./homepage.style.scss";
export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operators: ["+", "-", "*", "/"],
    };
  }
  render() {
    return (
      <div className="ui-homepage">
        {map([ ...Array( 2 ).keys() ], item => (
          <Section operators={this.state.operators} key={item} sectionCount={item+1} />
        ))}
      </div>
    );
  }
}

export default Homepage;
