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
                  <h1>{clock.format(day)}</h1>
                </div>

                <div className="regionClock">
                  <h1>{clock.format(day)}</h1>
                </div>

                <div className="regionClock">
                  <h1>{clock.format(day)}</h1>
                </div>

                <div className="regionClock">
                  <h1>{clock.format(day)}</h1>
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
