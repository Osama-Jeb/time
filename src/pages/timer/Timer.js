import "./_timer.scss"
import React, { useEffect, useState } from 'react';
import alarm from "../../assets/audio/digiAlarm.mp3"

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
    let sound = new Audio(alarm)

    const countDown = () => {
        setSeconds(seconds - 1)
        if (seconds === 0) {
            setSeconds(59);
            setMinutes(minutes - 1)
            if (minutes === 0) {
                setMinutes(59)
                setHours(hours - 1)
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    sound.play();
                    setStartStop("START")
                    setActive(false)
                    setHours(0)
                    setMinutes(0)
                    setSeconds(0)
                }
            }
        }
    }

    const [active, setActive] = useState(false);
    const [startStop, setStartStop] = useState("START")

    const timerStart = (e) => {
        if (active) {
            setActive(!active);
            setStartStop("START");
        } else {
            setActive(!active);
            setStartStop("PAUSE");
        }
        e.target.classList.toggle("pause");
        let selects = document.querySelectorAll("select");
        selects.forEach((element) => {
            element.classList.toggle("unclick")
        })
    }

    useEffect(() => {
        if (active) {
            setTimeout(() => {
                countDown();
            }, 1000);
        }
    })

    const timeReset = (event) => {
        sound.pause();
        sound.currentTime = 0; // Rewind to the beginning

        setTimeout(() => {
            setActive(false)
            setStartStop("START")
            setHours(0)
            setMinutes(0)
            setSeconds(0)
            let selects = document.querySelectorAll("select");
            selects.forEach((element) => {
                element.classList.remove("unclick")
            })
            event.target.previousElementSibling.classList.remove("pause")
        }, 900);
    }
    return (
        <>
            <div className="timer">
                <div className="position-absolute bottom-0 end-0">
                    <p className="text-danger">Don't be frightened, there's an alarm sound.</p>
                </div>
                <div className="timerHolder">
                    <h1>{hours.toString().padStart(2, "0")} :
                        {minutes.toString().padStart(2, "0")} :
                        {seconds.toString().padStart(2, "0")}</h1>
                </div>
                <div className="selections">
                    <div className="controls d-flex justify-content-center align-items-center">
                        <button className="startBtn" onClick={(e) => {
                            timerStart(e)
                        }}>{startStop}</button>
                        <button className="resetBtn" onClick={timeReset}>RESET</button>
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
