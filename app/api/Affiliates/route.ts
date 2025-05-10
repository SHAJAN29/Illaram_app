// app/api/Affiliates/route.ts

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import Affiliate from "@/models/Affiliate";

export async function GET() {
  try {
    await connectToDatabase();
    const affiliates = await Affiliate.find().sort({ createdAt: -1 }); // latest first

    return NextResponse.json(affiliates, { status: 200 });
  } catch (error) {
    console.error("Error fetching affiliates:", error);
    return NextResponse.json({ message: "Server error fetching affiliates." }, { status: 500 });
  }
}
