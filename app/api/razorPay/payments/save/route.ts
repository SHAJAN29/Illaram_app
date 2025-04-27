import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/library/mongoose';
import User from '@/models/user';

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the incoming request body
    const body = await req.json();

    console.log("Request Body:", body); 
    const { username, email, payment } = body;


    // Validate that all required fields are present
    if (!username || !payment) {
      return NextResponse.json({ error: 'Username, email, and payment data are required' }, { status: 400 });
    }

    // Validate the payment data structure
    const { paymentId, orderId, amount, status } = payment;
    if (!paymentId || !orderId || !amount || !status) {
      return NextResponse.json({ error: 'Payment data is incomplete' }, { status: 400 });
    }
    const userEmail = email || '';  
    // Query to find the user by username
    const query = { username };

    console.log(query)

    // Update the user's payment information
    const updatedUser = await User.findOneAndUpdate(
      query,
      { $set: { payment } },
      { new: true } // Return the updated user document
    );

    // If no user is found, return a 404 error
    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return the updated user data as a response
    return NextResponse.json({ success: true, user: updatedUser });

  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: 'Failed to update user data' }, { status: 500 });
  }
}
