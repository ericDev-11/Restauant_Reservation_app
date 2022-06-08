import React from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";

export default function Form({
  reservation,
  setReservation,
  reservationsError,
  setReservationsError,
}) {
  const history = useHistory();

  const handleChange = ({ target }) => {
    setReservation({
      ...reservation,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newReservation();
    if (reservationsError === null) {
      history.push(`/dashboard?date=${reservation.reservation_date}`);
    }
  };

  function newReservation() {
    const ac = new AbortController();
    setReservationsError(null);
    createReservation(reservation, ac.signal).catch(setReservationsError);
    return () => ac.abort();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row my-3">
        <div className="col">
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            onChange={handleChange}
            value={reservation.first_name}
            className="form-control"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col">
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            onChange={handleChange}
            value={reservation.last_name}
            className="form-control"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col">
          <label htmlFor="mobile_number">Mobile Number</label>
          <input
            id="mobile_number"
            name="mobile_number"
            type="text"
            required
            placeholder="XXX-XXX-XXXX"
            onChange={handleChange}
            value={reservation.mobile_number}
            className="form-control"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <label htmlFor="reservation_date">Date</label>
          <input
            id="reservation_date"
            name="reservation_date"
            type="date"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            placeholder="YYYY-MM-DD"
            onChange={handleChange}
            value={reservation.reservation_date}
            className="form-control"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col">
          <label htmlFor="reservation_time">Time</label>
          <input
            id="reservation_time"
            name="reservation_time"
            type="time"
            required
            pattern="[0-9]{2}:[0-9]{2}"
            placeholder="HH:MM"
            onChange={handleChange}
            value={reservation.reservation_time}
            className="form-control"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col">
          <label htmlFor="people">Party Size</label>
          <input
            id="people"
            name="people"
            type="number"
            required
            onChange={handleChange}
            value={reservation.people}
            className="form-control"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="mr-auto">
        <button
          className="btn btn-secondary btn-lg mr-2"
          type="button"
          onClick={() => history.goBack()}
        >
          <span className="oi oi-x"> Cancel</span>
        </button>
        <button className="btn btn-dark btn-lg" type="submit">
          <span className="oi oi-plus"> Submit</span>
        </button>
      </div>
    </form>
  );
}
