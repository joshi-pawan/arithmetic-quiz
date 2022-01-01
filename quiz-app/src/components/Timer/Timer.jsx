import React from "react";
import { useTimer } from "react-timer-hook";
import './timer.style.scss'

function Timer(props) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const { seconds, minutes } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    onExpire: () => props.triggerTestEnd({isRunning:false}),
  });
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <div className="ui-timer">
      <span style={{ fontSize: "30px" }}>
        <span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>{" "}
      </span>
      <span style={{ fontSize: "16px", color:'red' }}>
        <span>Minutes</span>:<span>Seconds</span>{" "}
      </span>
    </div>
  );
}

export default Timer;
