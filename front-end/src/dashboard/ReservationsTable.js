import React from "react";

export default function ReservationsTable({ reservations }) {
  return (
    <table
      className="table table-dark table-striped mb-0"
      style={{ width: "100%", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">People</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <tr key={reservation.reservation_id}>
            <th scope="row">{reservation.reservation_id}</th>
            <td>
              {reservation.first_name}&nbsp;{reservation.last_name}
            </td>
            <td>{reservation.mobile_number}</td>
            <td>{reservation.reservation_date}</td>
            <td>{reservation.reservation_time}</td>
            <td>{reservation.people}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
