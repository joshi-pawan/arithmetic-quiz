import React from 'react'

export const getAnswer = (operand1, operand2, operator)=>{
switch (operator){
    case '+':
        return `${operand1 + operand2}`;
    case '-':
        return `${operand1 - operand2}`;
    case '*':
        return `${operand1 * operand2}`;
    case '/':
        return `${operand1 / operand2}`;
    default:
        return undefined;
}
};
function Questionnaire(props) {
    const answer = getAnswer(props.randomX, props.randomY, props.operator);
    return (
        <div className='ui-questionnaire'>
             <div className='ui-questionnaire__question'>
                    {
                        `What's the value of ${props.randomX} ${props.operator} ${props.randomY} ?`
                    }
                </div>
                <div className='ui-questionnaire__response'>
                    <label htmlFor='userResponse'>Answer: </label>
                    <input type='text' name='userResponse' id='userResponse' onChange={event=> {
                        event.preventDefault();
                        props.handleUserResponse({userResponse: event.target.value, correctResponse: answer})
                    }}/>
                </div>
        </div>
    )
}

export default Questionnaire
