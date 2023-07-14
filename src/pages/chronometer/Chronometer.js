import React, { useEffect, useState } from "react";
import "./_chronometer.scss"


export const Chronometer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false)
  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        setSeconds(seconds + 1)
      }, 1000);
    }
  })

  const date = new Date(null);
  date.setSeconds(seconds); // specify value for SECONDS here
  const result = date.toISOString().slice(11, 19);

  //! Same as the above 3 lines but shorter
  // new Date(SECONDS * 1000).toISOString().slice(11, 19);

  const [startStop, setStartStop] = useState("START");
  const startChrono = () => {
    if (isStarted) {
      setIsStarted(!isStarted);
      setStartStop("START");
    } else {
      setIsStarted(!isStarted);
      setStartStop("STOP");
    }
  }

  const resetChrono = () => {
    setIsStarted(false);
    setTimeout(() => {
      setSeconds(0);
      setStartStop("START");
    }, 800);
  }
  return (
    <>
      <div className="chrono">
        <div className="chronoBtns">
          <button className="startBtn" onClick={startChrono}>{startStop}</button>
          <button className="resetBtn" onClick={resetChrono}>RESET</button>
        </div>
        <h1 className="chronoTimer">{result}</h1>
      </div>
    </>
  );
};
