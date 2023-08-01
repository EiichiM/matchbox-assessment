"use client";
import React from "react";

function EventCard({ user }) {
  return (
    <div key={user.id}>
      <h1>{user.name}</h1>
      <span>
        {user.address.city}, {user.address.street}
      </span>
    </div>
  );
}

export default EventCard;
