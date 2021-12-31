import React, { Component } from 'react'
import {get, map} from 'lodash'
import Section from '../Section/Section';
import './homepage.style.scss'
export class Homepage extends Component {
    constructor(props){
        super(props);

        this.state = {
            sections: [
                {   
                    title: 'Arithmetic Section 1',
                    questions:[],
                    actual_answers:[],
                    user_answers:[],
                    finalScore: undefined
                },
                {
                    title: 'Arithmetic Section 2',
                    questions:[],
                    actual_answers:[],
                    user_answers:[],
                    finalScore: undefined
                }
            ]
        }
    }
    render() {
        return (
            <div className='ui-homepage'>
                {
                    map(get(this.state, 'sections',[]), (section,index) => <Section {...section} key={index}/> )
                }
            </div>
        )
    }
}

export default Homepage
