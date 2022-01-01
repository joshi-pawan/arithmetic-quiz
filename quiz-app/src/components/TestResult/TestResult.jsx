import { get, isEmpty, map, size } from "lodash";
import React from "react";
import "./testResult.style.scss";
import emptyPaper from "../../assets/emptyPaper.gif";
import timeUp from "../../assets/timeUp.gif";

const colorConfig = {
  true: "#04AA6D",
  false: "#FF0000",
};
function TestResult(props) {
  return (
    <div className="ui-test-result">
      <div className="ui-test-result__message">
        <h1>Test Result Section</h1>
        <br />
        {props.timeUp && (
          <div>
            <h3>Oops your time is up ..!! </h3>
            <img src={timeUp} style={{ height: "250px" }} alt="Time up" />
          </div>
        )}
        <h2>
          You've successfully completed the test. Based on your response
          following is the test result
        </h2>
        <br />
        <span style={{backgroundColor:'rgb(43, 19, 100)', color:'white', padding:'10px', borderRadius:'5px'}}>Score: {props.finalScore} out of {size(props.questions)}</span>
        <br />
        <h2>Response Sheet</h2>
        <br />
        <br />
      </div>

      {!isEmpty(get(props, "questions", [])) && (
        <div className="ui-test-result__resultSection">
          {map(get(props, "questions", []), (question, index) => {
            const isResponseCorrect =
              props.actual_answers[index] === props.user_answers[index];
            return (
              <div
                key={question}
                className="ui-test-result__resultSection__entry"
              >
                <span
                  style={
                    !isResponseCorrect
                      ? { backgroundColor: "red", color: "white" }
                      : { backgroundColor: "green", color: "white" }
                  }
                >{`${index + 1}. ${question}`}</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "9px",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      backgroundColor: colorConfig[isResponseCorrect],
                    }}
                  />{" "}
                  {`Your Answer: ${props.user_answers[index]}`}
                </span>
                <span>{`Correct Answer: ${props.actual_answers[index]}`}</span>
              </div>
            );
          })}
        </div>
      )}
      {isEmpty(get(props, "user_answers", [])) && (
        <div>
          <h3>Seems like you left the paper empty ..!! </h3>
          <img src={emptyPaper} style={{ height: "300px" }} alt="Empty paper" />
        </div>
      )}
      <div className="ui-test-result__actions">
        <button onClick={() => props.handleResetClick()}>Try again</button>
      </div>
    </div>
  );
}

export default TestResult;
