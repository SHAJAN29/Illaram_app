// File: app/api/Affiliates/affiliate-register/route.ts

import { NextRequest, NextResponse } from "next/server";
import Affiliate from "@/models/Affiliate";
import { connectToDatabase } from "@/library/mongoose";
import { sendAffiliateWelcomeEmail } from "@/library/sendMail";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const whatsappFrom = "whatsapp:+14155238886"; // Or your Twilio-approved WhatsApp number

const client = twilio(accountSid, authToken);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, mobile, email, website, audience, category } = body;

    if (!name || !mobile || !email || !audience || !category) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    await connectToDatabase();

    const newAffiliate = new Affiliate({
      name,
      mobile,
      email,
      website,
      audience,
      category,
      createdAt: new Date(),
      status: "pending",
    });

    await newAffiliate.save();

    // ✅ Send Welcome Email
    await sendAffiliateWelcomeEmail(email, name);

    // ✅ Send WhatsApp Notification
    await client.messages.create({
      from: whatsappFrom,
      to: `whatsapp:+91${mobile}`,
      body: `🎉 Hi ${name}, welcome to Illaram! Thanks for registering as an affiliate. We’ll connect with you shortly. 💚`,
    });

    console.log("Affiliate registration successful:", newAffiliate);

    return NextResponse.json({
      message: `Welcome to Illaram ${name}. Please check your mail. We’ll connect with you shortly.`,
    }, { status: 200 });

  } catch (error) {
    console.error("Affiliate submission error:", error);
    return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
  }
}
