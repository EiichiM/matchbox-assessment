"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function EventPage() {
  const [events, setEvents] = useState();

  const chargeEvents = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    chargeEvents();
  }, []);

  return (
    <>
      {events
        ? events.map((val, index) => (
            <div key={index}>
              <Link href={`events/${val.name.common}`}>{val.name.common}</Link>
            </div>
          ))
        : null}

    </>
  );
}

export default EventPage;
