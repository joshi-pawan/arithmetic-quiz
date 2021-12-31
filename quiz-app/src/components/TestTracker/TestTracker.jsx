import React, { Component } from "react";
import Questionnaire, { getAnswer } from "../Questionnaire/Questionnaire";
import Timer from "../Timer/Timer";

export class TestTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasTestEnded: false,
      userResponse: undefined,
      correctResponse: undefined,
      randomX: Math.floor(Math.random() * this.props.maxRange),
      randomY: Math.floor(Math.random() * this.props.maxRange),
    };

    this.triggerTestEnd = this.triggerTestEnd.bind(this);
    this.handleUserResponse = this.handleUserResponse.bind(this);
  }

  triggerTestEnd() {
    this.setState({ hasTestEnded: true });
  }
  // handle when user actually enters something
  handleUserResponse({ userResponse, correctResponse }) {
    this.setState({
      userResponse: userResponse,
      correctResponse: correctResponse,
    });
  }
  render() {
    return (
      <div className="ui-test-tracker">
        <Timer triggerTestEnd={this.triggerTestEnd} />
        <Questionnaire
          randomX={this.state.randomX}
          randomY={this.state.randomY}
          operator={this.props.selectedOperator}
          handleUserResponse={this.handleUserResponse}
        />
        <div className="ui-test-tracker__actionsBar">
          <button
            onClick={() => {
                // safe check when user keeps clicking next without updating text in input
              this.props.handleNextClick({userResponse:this.state.userResponse, correctResponse: getAnswer(this.state.randomX, this.state.randomY, this.props.selectedOperator)});
              this.setState({
                randomX: Math.floor(Math.random() * this.props.maxRange),
                randomY: Math.floor(Math.random() * this.props.maxRange),
              });
            }}
          >
            Next
          </button>
          <button onClick={this.triggerTestEnd}>End Test</button>
        </div>
      </div>
    );
  }
}

export default TestTracker;
