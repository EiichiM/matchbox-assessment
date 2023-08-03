import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";

import Event from "@/models/eventModel";

connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();

    // check if event already exists
      const event = await Event.findOne({ eventName: reqBody.eventName });
      if (event) {
        throw new Error("User already exists");
      }

    // create event

    const newEvent = new User(reqBody);
    const newEventResponse = await newEvent.save();

    return NextResponse.json({
      message: "Event Registered Successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}