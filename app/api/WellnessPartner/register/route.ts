// pages/api/partner/register.ts
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import { connectToDatabase } from '@/library/mongoose';
import { WellnessPartner } from "@/models/WellnessPartner";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const { username, email, phone, password, location, serviceType } = body;

    if (!username || !email || !phone || !password || !location || !serviceType) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const existing = await WellnessPartner.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Email already registered" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPartner = new WellnessPartner({
      username,
      email,
      phone,
      password: hashedPassword,
      location,
      serviceType,
    });

    await newPartner.save();

    return NextResponse.json({ message: "Registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}