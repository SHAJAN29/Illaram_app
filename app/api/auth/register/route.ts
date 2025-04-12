// /app/api/auth/register/route.ts

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });


    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ message: "Registration failed" }, { status: 500 });
  }
}
