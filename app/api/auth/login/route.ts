import { NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, role } = body;

    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ No user found");
      return NextResponse.json({ message: "No user found" }, { status: 401 });
    }

    if (user.role !== role) {
      console.log("❌ Role mismatch");
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("❌ Password mismatch");
      return NextResponse.json({ message: "Password mismatch" }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return NextResponse.json({ token, role: user.role }, { status: 200 });

  } catch (err) {
    console.error("Login error", err);
    return NextResponse.json({ message: "Login failed" }, { status: 500 });
  }
}
