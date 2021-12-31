import { isUndefined, map } from "lodash";
import React, { Component } from "react";
import "./testSetup.style.scss";
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
            <div className="ui-test-setup__form__container__operator">
              <p>Select the arithmetic operation to practice</p>
              {map(this.props.operators, (operator) => (
                <span key={operatorToWord[operator]}>
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
                </span>
              ))}
            </div>
            <div className="ui-test-setup__form__container__instructions">
              <pre>
                Please press continue to start the test.
                <br />
                Note:
                <br />
                1. Once started a timer will begin for 10 minutes which can't be
                paused.
                <br />
                2. At the end of test you'll get the result.
              </pre>
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
