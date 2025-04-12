import { NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Email not found" }, { status: 404 });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );

    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

    // Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      to: user.email,
      subject: "Reset Your Password",
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. Link expires in 15 mins.</p>`,
    });

    return NextResponse.json({ message: "Reset link sent to your email" });

  } catch (err) {
    console.error("Forgot password error:", err);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
