import { NextResponse } from "next/server";
import Event from "@/models/eventModel";
import { connectDB } from "@/config/dbConfig";
connectDB();

export async function GET(request) {
  try {
    const reqBody = await request.json();

    // check if user already exists
    const event = await Event.findOne({ event: reqBody.eventName });
    if (!event) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json({
      message: "Event get request accessed successfully",
      data: event,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
