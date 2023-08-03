"use client";
import React from "react";
import EventCard from "@/components/EventCard";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { EventEdit } from "./EventEdit";

// async function getEvent() {
//   try {
//     const response = await axios.get(
//       `${process.env.domain}/api/events/getEvent`
//     );
//     return response.data.data;
//   } catch (error) {
//     return null;
//   }
// }

export default function EventsSection() {
  let router = useRouter();
  console.log(router);
  return (
    <>
      <div className="home-card-events">
        <div>
          <div className="flex justify-center p-5">
            <div className="w-11/10">
              <div className="flex flex-grow flex-wrap justify-around">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                {/* {events.map((event) => (
                      <div key={event.id} className="aspect-1 overflow-hidden">
                        <Link href={`/photo/${event.id}`}>
                          <EventCard />
                        </Link>
                      </div>
                    ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
        onClose={() => {
          router.push("/");
        }}
      >
        <EventEdit />
      </Modal> */}
    </>
  );
}
