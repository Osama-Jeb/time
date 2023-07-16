import React, { useEffect, useState } from "react";
import "./_clock.scss"


export const Clock = () => {
  const day = new Date();

  const [meridiem, setMeridiem] = useState(new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
  }))

  useEffect(() => {
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

  let regClock = [
    {
      place: <><span className="text-light">東<span className="text-danger">京.日</span>本</span></>,
      timeformat: "en-GB",
      zone: "Asia/Tokyo",
    },
    {
      place: "New York City, USA",
      timeformat: "en-GB",
      zone: "America/New_York",
    },
    {
      place: <><span className="saudi fw-bolder fs-3">المملكة العربية السعودية</span></>,
      timeformat: "ar-EG",
      zone: "Asia/Riyadh",
    },
    {
      place: "Sydney, Australia",
      timeformat: "en-GB",
      zone: "Australia/Sydney",
    },
  ]

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
                {
                  regClock.map((element) =>
                    <>
                      <div className="regionClock">
                        <h4>{element.place}</h4>
                        <h1>{new Intl.DateTimeFormat(element.timeformat, {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hourCycle: "h24",
                          timeZone: element.zone
                        }).format(day)}</h1>
                      </div>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          {/* <h4 className="casa"><span className="text-danger">Casa<span className="text-success">blanca, Mor</span>occo</span></h4> */}
          <h4>Casablanca, Morocco</h4>
          <h1 className="period">{meridiem.format(day)}</h1>
        </div>
        <div class="clock">
          <h1>{new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(day)}</h1>
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
