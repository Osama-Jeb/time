import "./_timer.scss"
import React, { useState } from 'react';

export const Timer = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    let myHourArr = Array(24).fill("Hour", 0, 24);
    let myMinArr = Array(60).fill("Minute", 0, 60);
    let mySecArr = Array(60).fill("Second", 0, 60);

    let selection = [{ name: "Hour", arr: myHourArr }, { name: "Minute", arr: myMinArr }, { name: "Second", arr: mySecArr }]

    const settingVal = (event) => {
        if (parseInt(event.target.value) >= 0) {
            switch (event.target.name) {
                case "Hour":
                    setHours(event.target.value)
                    break;
                case "Minute":
                    setMinutes(event.target.value)
                    break;
                case "Second":
                    setSeconds(event.target.value)
                    break;
                default:
                    break;
            }
        }
    }
    return (
        <>
            <div className="timer">
                <h1>{hours.toString().padStart(2, "0")} :
                    {minutes.toString().padStart(2, "0")} :
                    {seconds.toString().padStart(2, "0")}</h1>
                <div className="selections">
                    <div className="controls d-flex justify-content-center align-items-center">
                        <button>Start</button>
                        <button>Reset</button>
                    </div>
                    {
                        selection.map((element, index) =>
                            <select key={index} name={element.name} id=""
                                onClick={(e) => {
                                    settingVal(e)
                                }}>
                                <option disabled selected>{element.name}</option>
                                {
                                    element.arr.map((el, i) =>
                                        <option key={i} value={i}>{i.toString().padStart(2, "0")}</option>
                                    )
                                }
                            </select>
                        )
                    }
                </div>
            </div>
        </>
    );
}
