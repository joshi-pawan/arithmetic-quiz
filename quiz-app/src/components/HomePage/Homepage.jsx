import React, { Component } from "react";
import { get, map } from "lodash";
import Section from "../Section/Section";
import "./homepage.style.scss";
export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operators: ["+", "-", "*", "/"],
      sections: [
        {
          title: "Arithmetic Section 1",
          questions: [],
          actual_answers: [],
          user_answers: [],
          finalScore: undefined,
          maxRange: undefined,
          selectedOperator: undefined,
        },
        {
          title: "Arithmetic Section 2",
          questions: [],
          actual_answers: [],
          user_answers: [],
          finalScore: undefined,
          maxRange: undefined,
          selectedOperator: undefined,
        },
      ],
    };
  }
  render() {
    return (
      <div className="ui-homepage">
        {map(get(this.state, "sections", []), (section, index) => (
          <Section operators={this.state.operators} {...section} key={index} />
        ))}
      </div>
    );
  }
}

export default Homepage;
