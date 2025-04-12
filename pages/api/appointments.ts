import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/library/mongoose";
import mongoose from "mongoose";
import Appointments from "@/models/Appointments";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  console.log("📡 API hit")


  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {

    console.log("🔌 Connecting to DB...");

    await connectToDatabase();

    const { name, email, phone, service, message } = req.body;

    const newAppointment = await Appointments.create({
      name,
      email,
      phone,
      service,
      message,
    });

    return res.status(201).json({ success: true, data: newAppointment });
  } catch (error) {
    console.error("Error saving appointment:", error);
    return res.status(500).json({ success: false, error: "Server Error" });
  }
}
