import React from "react";
import { QUESTION_TEMPLATE } from "../../constants/common";
import { getFormattedQuestion } from "../../utils/getFormattedQuestion";
import "./Questionnaire.style.scss";
export const getAnswer = (operand1, operand2, operator) => {
  switch (operator) {
    case "+":
      return `${operand1 + operand2}`;
    case "-":
      return `${operand1 - operand2}`;
    case "*":
      return `${operand1 * operand2}`;
    case "/":
      return `${operand1 / operand2}`;
    default:
      return undefined;
  }
};
function Questionnaire(props) {
  const answer = getAnswer(props.randomX, props.randomY, props.operator);
  // const question =`What's the value of ${props.randomX} ${props.operator} ${props.randomY} ?`;
  const question = getFormattedQuestion({template: QUESTION_TEMPLATE.STANDARD_TEMPLATE, mappingObject: {
    operand1: props.randomX,
    operand2: props.randomY,
    operator: props.operator,
  }});
  return (
    <div className="ui-questionnaire">
      <div className="ui-questionnaire__question">
        {`Question: ${question}`}
      </div>
      <div className="ui-questionnaire__response">
        <label htmlFor="userResponse">Answer: </label>
        <input
          type="text"
          name="userResponse"
          id="userResponse"
          onChange={(event) => {
            event.preventDefault();
            props.handleUserResponse({
              question,
              userResponse: event.target.value,
              correctResponse: answer,
            });
          }}
        />
      </div>
    </div>
  );
}

export default Questionnaire;
