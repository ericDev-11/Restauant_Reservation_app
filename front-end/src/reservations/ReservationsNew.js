import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { createReservation } from "../utils/api";
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

  const history = useHistory();

  const [reservation, setReservation] = useState({});
  const [form, setForm] = useState({ ...initFormState });
  const [reservationsError, setReservationsError] = useState(null);

  useEffect(() => {
    if (!reservation) {
      return null;
    }
    async function newReservation() {
      const ac = new AbortController();
      setReservationsError(null);
      try {
        await createReservation(reservation, ac.signal);
        history.push(`/dashboard?date=${reservation.reservation_date}`);
      } catch (error) {
        setReservationsError(error);
      }
      return () => ac.abort();
    }
    newReservation();
  }, [reservation, history]);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setReservation({ ...form });
  };

  return (
    <main>
      <ErrorAlert error={reservationsError} />
      <Form
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
