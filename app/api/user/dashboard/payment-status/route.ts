// app/api/user/payment-status/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/library/mongoose';
import User from '@/models/user';

export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Extract the query parameters (e.g., username)
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");
    // const query = username
    // ? { username }
    // : email
    // ? { email }
    // : null;




    // Check if the username is provided
    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check the payment status; modify this check based on your payment data structure
    const hasPaid = user.payment && user.payment.status === 'success'; // If you have status in payment data
    console.log(hasPaid)
    return NextResponse.json({ hasPaid });
  } catch (error) {
    console.error("Error checking payment status:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
