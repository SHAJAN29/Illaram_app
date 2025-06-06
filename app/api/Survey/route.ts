// app/api/Survey/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/library/mongoose';
import SurveyResponse from '@/models/SurveyResponse';

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Parse the JSON body
    const body = await request.json();

console.log('Received survey response:', body);

    // Create a new document in the collection
    const response = await SurveyResponse.create(body);

    console.log('Saved survey response:', response);
    // Return a success response
    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('Error saving survey response:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
export async function GET(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Fetch all survey responses
    const responses = await SurveyResponse.find({});

    // Return the responses
    return NextResponse.json({ success: true, data: responses });
  } catch (error) {
    console.error('Error fetching survey responses:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}