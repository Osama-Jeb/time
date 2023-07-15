import React, { useEffect, useState } from "react";
import "./_chronometer.scss"


export const Chronometer = () => {
  const [seconds, setSeconds] = useState(0);
  const [millis, setMillis] = useState(0);
  const [isStarted, setIsStarted] = useState(false)
  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        if (millis == 99) {
          setMillis(0)
          setSeconds(seconds + 1)
        } else {
          setMillis(millis + 1)
        }
      }, 10);
    }
  }, [isStarted, millis])

  // Brought to you by our sponsor: StackOverflow
  const result = new Date(seconds * 1000).toISOString().slice(11, 19) + ":" + millis.toString().padStart(2, "0");

  const [startStop, setStartStop] = useState("START");
  const startChrono = (event) => {
    if (isStarted) {
      setIsStarted(!isStarted);
      setStartStop("START");
    } else {
      setIsStarted(!isStarted);
      setStartStop("PAUSE");
    }
    event.target.classList.toggle("pause")
  }

  const resetChrono = () => {
    setIsStarted(false);
    setTimeout(() => {
      setSeconds(0);
      setMillis(0);
      setStartStop("START");
    }, 11);
  }

  return (
    <>
      <div className="chrono">
        <div className="chronoTimer">
          <h1>{result}</h1>
        </div>
        <div className="chronoBtns">
          <button className="startBtn pause btn rounded-pill" onClick={startChrono}>{startStop}</button>
          <button className="resetBtn btn rounded-pill" onClick={resetChrono}>RESET</button>
        </div>
      </div>
    </>
  );
};
