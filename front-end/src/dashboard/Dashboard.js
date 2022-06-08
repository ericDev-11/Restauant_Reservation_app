import React, { useEffect, useState } from "react";
import useQuery from "../utils/useQuery";
import { listReservations } from "../utils/api";
import { today } from "../utils/date-time";
import ErrorAlert from "../layout/ErrorAlert";
import DateButtons from "./DateButtons";
import ReservationsTable from "./ReservationsTable";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard() {
  const query = useQuery();

  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [date, setDate] = useState(query.get("date") || today());

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const ac = new AbortController();
    setReservationsError(null);
    listReservations({ date }, ac.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => ac.abort();
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for {date}</h4>
      </div>
      <ErrorAlert error={reservationsError} />
      <DateButtons date={date} setDate={setDate} />
      <ReservationsTable reservations={reservations} />
    </main>
  );
}

export default Dashboard;
