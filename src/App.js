import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Chronometer } from "./pages/chronometer/Chronometer";
import { Navigation } from "./layouts/Navigation";
import { Clock } from "./pages/clock/Clock";
import { Timer } from "./pages/timer/Timer";
import { Alarm } from "./pages/alarm/Alarm";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Clock />} />
        <Route path="/chronometer" element={<Chronometer />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/alarm" element={<Alarm />} />
      </Routes>
    </>
  );
};
