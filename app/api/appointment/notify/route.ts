import { NextResponse } from 'next/server';
import twilio from 'twilio';
import nodemailer from 'nodemailer';
import Appointment from '@/models/Appointments'; // Adjust the path based on your project structure
import { connectToDatabase } from "@/library/mongoose"; // Adjust the path based on your project structure


export async function POST(req: Request) {
  try {


    if (req.method !== "POST") {
      return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
    }
    console.log("🔌 Connecting to DB...") ;


    await connectToDatabase();

    const { name, email, phone, service, appointmentDate, appointmentTime } = await req.json();

    // Save appointment to MongoDB
    const newAppointment = new Appointment({
      name,
      email,
      phone,
      service,
      appointmentDate,
      appointmentTime,
    });

    await newAppointment.save();


    // ✅ Send WhatsApp
    const client = twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);
const now = new Date();
const formattedDateTime = now.toLocaleString('en-IN', {

  timeZone: 'Asia/Kolkata',
  hour12: true,
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});



    await client.messages.create({
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+918778919303',
      body: `🗓️ New Booking Alert!\n📅 Booked On: ${formattedDateTime}\n👤 Name: ${name}\n📞 Phone: ${phone}\n💼 Service: ${service}\n 😊 KINDLY FOLLOW UP 🤞`,
    });
console.log("📩 WhatsApp message sent");
    // ✅ Send Email
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in', // or smtp.zoho.com (for global), use `.in` for India
      port: 465,
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USERNAME || '', // e.g., yourname@illaramhealthcare.com
        pass: process.env.EMAIL_PASSWORD || '', // your Zoho mail app password
      },
    });
    
    await transporter.sendMail({
      from: `"Illaram Healthcare" <${process.env.EMAIL_USERNAME}>`,
      to: email, // customer's email
      subject: 'Illaram Appointment Confirmation',
      html: `<p>Hey ${name}, your appointment is confirmed!<br>Our CRM will call you soon 😊...</p>`,
    });




    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notification Error:', error);
    return NextResponse.json({ success: false, error: 'Notification failed' }, { status: 500 });
  }
}





