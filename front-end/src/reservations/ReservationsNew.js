import React, { useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import Form from "./Form";

export default function ReservationsNew() {
  const initFormState = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: "",
  };

  const [reservation, setReservation] = useState({ ...initFormState });
  const [reservationsError, setReservationsError] = useState(null);

  return (
    <main>
      <ErrorAlert error={reservationsError} />
      <Form
        reservation={reservation}
        setReservation={setReservation}
        reservationsError={reservationsError}
        setReservationsError={setReservationsError}
      />
    </main>
  );
}
