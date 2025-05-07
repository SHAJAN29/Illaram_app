import { connectToDatabase } from '@/library/mongoose';
import Doctor from '@/models/Doctor';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { userId, password } = await req.json();

    await connectToDatabase();

    const doctor = await Doctor.findOne({ userId });

    console.log(doctor, 'doctor found');
    if (!doctor) {
      return NextResponse.json({ message: 'Doctor not found' }, { status: 404 });
    }

    if (!doctor.active) {
      return NextResponse.json({ message: 'Account inactive' }, { status: 403 });
    }

    const isMatch = await bcrypt.compare(password, doctor.passwordHash);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { doctorId: doctor._id, role: doctor.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    return NextResponse.json({
      token,
      role: doctor.role,
      userId: doctor.userId,
      name: doctor.name
    });
  } catch (error) {
    console.error('[LOGIN ERROR]', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
};
