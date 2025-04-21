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
      to: email, // coustomer's mail recipient
      subject: "Welcome to Illaram Healthcare – Your Journey Begins",
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; background-color: #0f766e; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <div style="background: #4F46E5; color: white; padding: 20px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px;">Welcome to Illaram Healthcare</h1>
            </div>
            <div style="padding: 30px; color: #333;">
              <p style="font-size: 18px;">Hey <strong>${name}</strong>,</p>
              <p style="font-size: 16px; line-height: 1.6;">
                You’ve just made one of the most powerful decisions of your life — to prioritize <strong>yourself</strong>.
              </p>
              <p style="font-size: 16px; line-height: 1.6;">
                At Illaram Healthcare, we're here to guide you towards becoming the most <strong>beautiful, confident, and empowered</strong> version of yourself — physically, mentally, and emotionally.
              </p>
              <p style="font-size: 16px; line-height: 1.6;">
                Be ready to stand in front of the mirror and witness your transformation. Because the best version of you is already within — we’re just helping it shine through🤞.
              </p>
              <p style="margin-top: 30px; font-size: 16px;">💜 With love,<br>Team Illaram</p>
            </div>
            <div style="background: #f3f4f6; text-align: center; padding: 15px; font-size: 14px; color: #666;">
              You're receiving this email because you booked an appointment with us.<br />
              © ${new Date().getFullYear()} Illaram Healthcare. All rights reserved.
            </div>
          </div>
        </div>
      `,
    });
    

    console.log("📧 Email message sent");


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notification Error:', error);
    return NextResponse.json({ success: false, error: 'Notification failed' }, { status: 500 });
  }
}





// await transporter.sendMail({
//   from: "Illaram Healthcare" <${process.env.EMAIL_USERNAME}>,
//   to: email, // customer's email
//   subject: 'Illaram Appointment Confirmation',
//   html: <p>Hey ${name}, your appointment is confirmed!<br>Our CRM will call you soon 😊...</p>,
// }); i want to send a marketing card says welcome to illaram healthcare and u made a good desicion in your life  be ready to present your beautiful version infront of your self like that
