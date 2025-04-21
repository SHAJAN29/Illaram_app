// app/api/admin/users/route.ts
import { NextResponse } from "next/server";
import {connectToDatabase} from "@/library/mongoose";
import User from "@/models/user";

export async function GET() {
  try {
    await connectToDatabase();

    const users = await User.find().lean();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
