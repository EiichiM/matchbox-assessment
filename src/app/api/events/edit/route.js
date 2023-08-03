import { NextResponse } from "next/server";
import Event from "@/models/eventModel";
import { connectDB } from "@/config/dbConfig";
connectDB();

export async function PUT(request) {
  try {
    const { eventName, eventType, imageBanner, clients } = await request.json();
    const eventid = request.url.split("events/")[1];
    updateEvent(eventid, eventName, eventType, imageBanner, clients);

    return NextResponse.json(
      {
        message: "OK",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
