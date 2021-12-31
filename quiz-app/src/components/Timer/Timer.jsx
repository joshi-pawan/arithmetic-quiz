import React from "react";
import { useTimer } from "react-timer-hook";

function Timer(props) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    onExpire: () => props.triggerTestEnd,
  });
  return (
    <div className="ui-timer" style={{ fontSize: "30px" }}>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
        <span>⏱️ </span>
      </div>
    </div>
  );
}

export default Timer;
