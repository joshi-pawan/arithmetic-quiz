import { size } from "lodash";
import React, { Component } from "react";
import TestResult from "../TestResult/TestResult";
import TestSetup from "../TestSetup/TestSetup";
import TestTracker from "../TestTracker/TestTracker";
import "./section.style.scss";

const initialState = {
  questions: [],
  actual_answers: [],
  user_answers: [],
  finalScore: 0,
  maxRange: undefined,
  selectedOperator: undefined,
  hasTimerStarted: false,
  maxQuestion: 5,
  hasTestTimeEnded: false,
};
export class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `Arithmetic Section ${this.props.sectionCount}`,
      ...initialState,
    };
    this.handleTestStart = this.handleTestStart.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.triggerTestEnd = this.triggerTestEnd.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }
  triggerTestEnd({isRunning=true}) {
    this.setState({ hasTestTimeEnded: true, isRunning });
  }
  handleTestStart({ maxRange, operator }) {
    this.setState({
      ...this.state,
      selectedOperator: operator,
      maxRange: maxRange,
      hasTimerStarted: true,
    });
  }
  handleNextClick({ question, userResponse, correctResponse }) {
    this.setState({
      ...this.state,
      actual_answers: [...this.state.actual_answers, correctResponse],
      user_answers: [...this.state.user_answers, userResponse],
      questions: [...this.state.questions, question],
      finalScore:
        userResponse === correctResponse
          ? this.state.finalScore + 1
          : this.state.finalScore,
      hasTestTimeEnded:
        size([...this.state.actual_answers, correctResponse]) <
        this.state.maxQuestion
          ? false
          : true,
    });
  }
  handleResetClick() {
    this.setState({
      ...this.state,
      ...initialState,
    });
  }
  render() {
    return (
      <div className="ui-section">
        <h2 className="ui-section__title">{this.state.title}</h2>
        {!this.state.hasTimerStarted && (
          <TestSetup
            handleTestStart={this.handleTestStart}
            operators={this.props.operators}
          />
        )}
        {this.state.hasTimerStarted &&
          !this.state.hasTestTimeEnded &&
          this.state.maxQuestion > this.state.user_answers.length && (
            <TestTracker
              selectedOperator={this.state.selectedOperator}
              maxRange={this.state.maxRange}
              handleNextClick={this.handleNextClick}
              hasTestTimeEnded={this.state.hasTestTimeEnded}
              triggerTestEnd={this.triggerTestEnd}
            />
          )}
        {this.state.hasTestTimeEnded &&
          this.state.maxQuestion >= size(this.state.user_answers) && (
            <TestResult
              handleResetClick={this.handleResetClick}
              questions={this.state.questions}
              actual_answers={this.state.actual_answers}
              user_answers={this.state.user_answers}
              finalScore={this.state.finalScore}
              timeUp = {!this.state.isRunning}
            />
          )}
      </div>
    );
  }
}

export default Section;
