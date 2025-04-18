import { NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import User from "@/models/user";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "15m",
    });

    const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Illaram Healthcare" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reset your password",
      html: `
        <p>Hello ${user.name || "user"},</p>
        <p>Click the button below to reset your password:</p>
        <a href="${resetLink}" style="padding: 10px 20px; background: #14b8a6; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
        <p>This link will expire in 15 minutes.</p>
      `,
    });

    return NextResponse.json({ message: "Reset email sent!" }, { status: 200 });
  } catch (err) {
    console.error("Forgot password error:", err);
    return NextResponse.json(
      { message: "Failed to send reset email" },
      { status: 500 }
    );
  }
}
