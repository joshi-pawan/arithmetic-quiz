import React, { Component } from "react";
import Questionnaire, { getAnswer } from "../Questionnaire/Questionnaire";
import Timer from "../Timer/Timer";
import clock from '../../assets/clock.gif'
import think from '../../assets/think.gif'
import './testTracker.style.scss'
import { getFormattedQuestion } from "../../utils/getFormattedQuestion";
import { QUESTION_TEMPLATE } from "../../constants/common";
import { isUndefined } from "lodash";
export class TestTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userResponse: undefined,
      correctResponse: undefined,
      question: undefined,
      randomX: Math.floor(Math.random() * this.props.maxRange),
      randomY: Math.floor(Math.random() * this.props.maxRange),
    };

    this.handleUserResponse = this.handleUserResponse.bind(this);
  }

  // handle when user actually enters something
  handleUserResponse({ question='', userResponse='', correctResponse='' }) {
    this.setState({
      question: question,
      userResponse: userResponse,
      correctResponse: correctResponse,
    });
  }
  render() {
    return (
      <div className="ui-test-tracker">
          <div className="ui-test-tracker__timer">
              <img src={clock} alt="Clock gif"/>
              <Timer triggerTestEnd={this.props.triggerTestEnd} />
          </div>
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
              this.props.handleNextClick({
                question: getFormattedQuestion({template: QUESTION_TEMPLATE.STANDARD_TEMPLATE, mappingObject: {
                    operand1: this.state.randomX,
                    operand2: this.state.randomY,
                    operator: this.props.selectedOperator,
                  }}),
                userResponse: isUndefined(this.state.userResponse)? 'Unanswered': this.state.userResponse,
                correctResponse: getAnswer(
                  this.state.randomX,
                  this.state.randomY,
                  this.props.selectedOperator
                ),
              });
              this.setState({
                randomX: Math.floor(Math.random() * this.props.maxRange),
                randomY: Math.floor(Math.random() * this.props.maxRange),
              });
            }}
          >
            Next
          </button>
          <button onClick={this.props.triggerTestEnd}>End Test</button>
        </div>
        <img src={think} alt='boy guessing' style={{height:'200px', marginTop:'20px'}}/>
      </div>
    );
  }
}

export default TestTracker;
