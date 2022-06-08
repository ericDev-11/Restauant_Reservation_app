import React from "react";
import { Link } from "react-router-dom";
import { previous, today, next } from "../utils/date-time";

export default function DateButtons({ date, setDate }) {
  const handlePreviousClick = () => setDate(previous(date));
  const handleTodayClick = () => setDate(today());
  const handleNextClick = () => setDate(next(date));

  return (
    <div className="btn-group mb-2">
      <button
        className="btn btn-dark btn-sm"
        type="button"
        onClick={handlePreviousClick}
      >
        <Link
          to={"?date=" + previous(date)}
          style={{ textDecoration: "none", color: "white" }}
        >
          <span className="oi oi-caret-left"></span>
          &nbsp;&nbsp;Previous
        </Link>
      </button>
      <button
        className="btn btn-dark btn-sm"
        type="button"
        onClick={handleTodayClick}
      >
        <Link
          to={"?date=" + today()}
          style={{ textDecoration: "none", color: "white" }}
        >
          Today
        </Link>
      </button>
      <button
        className="btn btn-dark btn-sm"
        type="button"
        onClick={handleNextClick}
      >
        <Link
          to={"?date=" + next(date)}
          style={{ textDecoration: "none", color: "white" }}
        >
          Next&nbsp;&nbsp;
          <span className="oi oi-caret-right"></span>
        </Link>
      </button>
    </div>
  );
}
