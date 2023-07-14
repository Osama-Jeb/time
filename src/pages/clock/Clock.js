import React, { useEffect, useState } from "react";


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

  return (
    <>
      <div class="clockContainer">
        <h1 className="period">{meridiem.format(day)}</h1>
        <h1 class="clock">{clock.format(day)}</h1>
        <div className="days d-flex align-items-center gap-4">
          {
            week.map((element) =>
              element == weekDay.format(day) ?
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
