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
            finalScore: undefined,
            maxRange: undefined,
            selectedOperator: undefined,
            hasTimerStarted: false
          };
          this.handleTestStart = this.handleTestStart.bind(this);
    }
    handleTestStart({maxRange, operator}){
        this.setState({
            ...this.state,
            operator:operator,
            maxRange: maxRange,
            hasTimerStarted:true
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
                    this.state.hasTimerStarted && <TestTracker/>
                }
            </div>
        )
    }
}

export default Section
