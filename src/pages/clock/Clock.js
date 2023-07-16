import React, { useEffect, useState } from "react";
import "./_clock.scss"


export const Clock = () => {
  const day = new Date();
  const [clock, setClock] = useState(new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }))

  const [meridiem, setMeridiem] = useState(new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
  }))

  useEffect(() => {
    setClock(new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }))
    setMeridiem(new Intl.DateTimeFormat("en-GB", {
      dateStyle: "short",
    }))
  }, [day])

  let week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let weekDay = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
  })

  const [expandBtn, setexpandBtn] = useState("Show")
  const expand = (event) => {
    event.target.classList.toggle("w-100")
    event.target.parentElement.parentElement.classList.toggle("expand")
    setexpandBtn(expandBtn == "Show" ? "Hide" : "Show")
  }

  const test = clock.format(day).split(":")
  return (
    <>
      <div className="clockContainer">
        <div className="sidebar-container">
          <div className="sidebar">
            <div className="worldClocks">
              <button id="expandButton" onClick={(event) => {
                expand(event)
              }}>
                {expandBtn}
              </button>
              <div className={expandBtn == "Hide" ? "" : "d-none"}>

                <div className="regionClock">
                  <h3><span className="text-light">Tok<span className="text-danger">yo, ja</span>pan</span> 
                 </h3>
                  <h1>{+test[0] + 8 >= 24 ? test[0] = 0 : +test[0] + 8} : {test[1]} : {test[2]}</h1>
                </div>

                <div className="regionClock">
                  <h4><span className="text-danger">New York</span> <span className="text-light"> City,</span> <span className="text-primary">USA</span></h4>
                  <h1>{+test[0] - 5 >= 24 ? test[0] = 0 : +test[0] - 5} : {test[1]} : {test[2]}</h1>
                </div>

                <div className="regionClock">
                  <h4><span className="text-danger">Los</span> <span className="text-light"> Angeles,</span> <span className="text-primary">USA</span></h4>
                  <h1>{+test[0] - 3 >= 24 ? test[0] = 0 : +test[0] - 3} : {test[1]} : {test[2]}</h1>
                </div>

                <div className="regionClock">
                  <h4>Sydney, Australia</h4>
                  <h1>{+test[0] + 9 >= 24 ? test[0] = 0 : +test[0] + 9} : {test[1]} : {test[2]}</h1>
                </div>


              </div>
            </div>
          </div>
        </div>
        <h1 className="period">{meridiem.format(day)}</h1>
        <div class="clock">
          <h1>{clock.format(day)}</h1>
        </div>
        <div className="days d-flex align-items-center justify-content-center gap-4">
          {
            week.map((element) =>
              element === weekDay.format(day) ?
                <p className="weekday">{element}</p>
                :
                <p>{element}</p>
            )
          }
        </div>
      </div>
    </>
  );
};
