import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/library/mongoose';
import User from '@/models/user';
import { verifyUserToken } from '@/library/auth';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = await context;
  const { id } = await params;
  console.log(id)

  if (!id) {
    return NextResponse.json({ message: "User ID is required" }, { status: 400 });
  }

  const authHeader = req.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyUserToken(token);
    console.log("Authenticated user:", decoded);

    await connectToDatabase();

    const user = await User.findOne({ username: id }).lean();

    if (!user) {
      return NextResponse.json({ message: `User with username ${id} not found` }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("Error:", error);

    if (error?.message === "jwt malformed") {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
    }

    return NextResponse.json({ message: "Error fetching user data", error: error.message }, { status: 500 });
  }
}
