import { isUndefined, map } from "lodash";
import React, { Component } from "react";
import "./testSetup.style.scss";
import quiz from "../../assets/giphy.gif";
const operatorToWord = {
  "+": "Addition",
  "-": "Subtraction",
  "*": "Multiplication",
  "/": "Division",
};
export class TestSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxRange: 10,
      operator: "+",
    };
  }
  render() {
    return (
      <div className="ui-test-setup">
        <div>
          <img
            src={quiz}
            alt="Computer man"
            style={{ width: "600px", height: "350px" }}
          ></img>
        </div>
        <form className="ui-test-setup__form">
          <div className="ui-test-setup__form__container">
            <div className="ui-test-setup__form__container__range">
              <label htmlFor="points">Select the range of numbers:</label>
              <input
                type="range"
                id="points"
                name="points"
                value={this.state.maxRange}
                min="1"
                max="100"
                step="1"
                onChange={(event) =>
                  this.setState({
                    ...this.state,
                    maxRange: event.target.value,
                  })
                }
              />
              <span>{this.state.maxRange}</span>
            </div>
            <p>Select the arithmetic operation to practice</p>
            <div className="ui-test-setup__form__container__operator">
              {map(this.props.operators, (operator) => (
                <div key={operatorToWord[operator]}>
                  <input
                    type="radio"
                    id={operator}
                    name="operator"
                    checked={operator === this.state.operator ? true : false}
                    value={operator}
                    onChange={(event) =>
                      this.setState({
                        ...this.state,
                        operator: event.target.value,
                      })
                    }
                  />
                  <label htmlFor="html">{`${operatorToWord[operator]} (${operator})`}</label>
                  <br />
                </div>
              ))}
            </div>
            <div className="ui-test-setup__form__container__instructions">

              <div className="ui-test-setup__form__container__instructions__note">
                <ul>
                  Note :
                  <li>
                    Once started a timer will begin for 10 minutes which can't
                    be paused.
                  </li>
                  <li>At the end of test you'll get the result.</li>
                </ul>
              </div >
              <div>Please press continue to start the test.</div>
            </div>
            <div className="ui-test-setup__form__container__actions">
              <input
                type="submit"
                value="Continue"
                onClick={(event) => {
                  event.preventDefault();
                  if (!isUndefined(this.state.operator)) {
                    this.props.handleTestStart({
                      maxRange: this.state.maxRange,
                      operator: this.state.operator,
                    });
                  }
                }}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TestSetup;
