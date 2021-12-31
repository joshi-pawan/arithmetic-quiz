import React, { Component } from 'react'
import Timer from '../Timer/Timer'

export class TestTracker extends Component {
    constructor(props){
        super(props);

        this.state={
            hasTestEnded: false
        };

        this.triggerTestEnd = this.triggerTestEnd.bind(this);
    }

    triggerTestEnd(){
        this.setState({hasTestEnded:true})
    }
    render() {
       
        return (
            <div>
                <Timer triggerTestEnd={this.triggerTestEnd}/>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default TestTracker
