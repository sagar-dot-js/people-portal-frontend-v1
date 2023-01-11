import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

const HolidayCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default HolidayCalendar;
