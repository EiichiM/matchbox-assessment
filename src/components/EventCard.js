"use client";
import React from "react";
import Image from "next/image";

function EventCard({ user }) {
  return (
    <>
      <div className="event-card-width bg-gray-600 border border-gray-500 rounded-lg shadow">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src="/banner-1.png"
            alt="Banner Event"
            width={450}
            height={150}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <div className="flex justify-between">
              <h5 className="mb-2 text-lg tracking-tight text-white">
                Public Event
              </h5>
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                />
              </svg>
            </div>
          </a>
          <p className=" py-3 font-normal text-gray-400">
            Here are the biggest enterprise
          </p>
        </div>
      </div>
    </>
  );
}

export default EventCard;
