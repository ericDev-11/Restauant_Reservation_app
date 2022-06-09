import React from "react";
import { useHistory } from "react-router-dom";

export default function Form({ form, handleChange, handleSubmit }) {
  const history = useHistory();

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
            value={form.first_name}
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
            value={form.last_name}
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
            value={form.mobile_number}
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
            value={form.reservation_date}
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
            value={form.reservation_time}
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
            value={form.people}
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
