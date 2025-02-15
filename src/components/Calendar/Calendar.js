import React from "react";
import "./Calendar.scss";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar__header">
        <h3>October 2020</h3>
        <div className="calendar__nav">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
      <div className="calendar__days">
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>
      <div className="calendar__dates">
        {/* Заполните дни и даты */}
        <div className="calendar__date">1</div>
        <div className="calendar__date">2</div>
        {/* Добавьте остальные даты */}
      </div>
      <div className="calendar__events">
        <div className="calendar__event">8 AM - Breakfast</div>
        <div className="calendar__event">10 AM - Travel to venue</div>
        <div className="calendar__event">10:30 AM - Ceremony</div>
      </div>
    </div>
  );
};

export default Calendar;
