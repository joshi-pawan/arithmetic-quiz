import React, { Component } from 'react'
import TestSetup from '../TestSetup/TestSetup';
import TestTracker from '../TestTracker/TestTracker';
import './section.style.scss'
export class Section extends Component {
    constructor(props){
        super(props);
        this.state={
            title: `Arithmetic Section ${this.props.sectionCount}`,
            questions: [],
            actual_answers: [],
            user_answers: [],
            finalScore: 0,
            maxRange: undefined,
            selectedOperator: undefined,
            hasTimerStarted: false
          };
          this.handleTestStart = this.handleTestStart.bind(this);
          this.handleNextClick = this.handleNextClick.bind(this);
    }
    handleTestStart({maxRange, operator}){
        this.setState({
            ...this.state,
            selectedOperator:operator,
            maxRange: maxRange,
            hasTimerStarted:true
        })
    }
    handleNextClick({userResponse, correctResponse}){

        this.setState({
            ...this.state,
            actual_answers: [...this.state.actual_answers, correctResponse],
            user_answers: [...this.state.user_answers, userResponse],
            finalScore: userResponse===correctResponse? this.state.finalScore+1: this.state.finalScore
        })
    }
    render() {
        return (
            <div className='ui-section'>
                <div className='ui-section__title'>{this.state.title}</div>
                {
                    !this.state.hasTimerStarted && <TestSetup handleTestStart={this.handleTestStart} operators={this.props.operators}/>
                }
                {
                    this.state.hasTimerStarted && <TestTracker selectedOperator={this.state.selectedOperator} maxRange={this.state.maxRange} handleNextClick={this.handleNextClick}/>
                }
            </div>
        )
    }
}

export default Section
