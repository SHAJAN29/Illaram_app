// File: app/api/Affiliates/affiliate-register/route.ts

import { NextRequest, NextResponse } from "next/server";
import Affiliate from "@/models/Affiliate";
import { connectToDatabase } from "@/library/mongoose";
import { sendAffiliateWelcomeEmail } from "@/library/sendMail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, website, audience, category } = body;

    if (!name || !email || !audience || !category) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    await connectToDatabase();

    const newAffiliate = new Affiliate({
      name,
      email,
      website,
      audience,
      category,
      createdAt: new Date(),
      status: "pending",
    });

    await newAffiliate.save();
    await sendAffiliateWelcomeEmail(email, name);
    return NextResponse.json({ message: `Welcome to Illaram ${name}. Pls check your mail , We’ll connect with you shortly.`, }, { status: 200 });
  } catch (error) {
    console.error("Affiliate submission error:", error);
    return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
  }
}
