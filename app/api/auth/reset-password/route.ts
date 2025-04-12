import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/library/mongoose";
import User from "@/models/user";

export async function POST(req: Request) {
  try {
    const { password, token } = await req.json();
    if (!token) {
      return NextResponse.json({ message: "Invalid or missing token" }, { status: 400 });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = decoded.userId;

    await connectToDatabase();

    const hashed = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(userId, { password: hashed });

    return NextResponse.json({ message: "Password reset successful" });

  } catch (err: any) {
    console.error("Reset password error:", err);
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
  }
}
