import React, { Component } from 'react'
import './section.style.scss'
export class Section extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className='ui-section'>
                <div className='ui-section__title'>{this.props.title}</div>

            </div>
        )
    }
}

export default Section
