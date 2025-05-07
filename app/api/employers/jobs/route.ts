import { connectToDatabase } from "@/library/mongoose";
import JobApplication from "@/models/JobApplication";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// POST: Submit a job application
export const config = {
  runtime: "nodejs", // Ensure you're in the Node.js runtime
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File;

    if (!name || !email || !phone || !message || !resume) {
      return NextResponse.json({ success: false, error: "All fields are required." }, { status: 400 });
    }

    // Save the file to /public/uploads
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, resume.name);
    fs.writeFileSync(filePath, buffer);

    await connectToDatabase();

    const job = await JobApplication.create({
      name,
      email,
      phone,
      message,
      resume: `/uploads/${resume.name}`, // Save path to DB
    });

    return NextResponse.json({ success: true, message: "Application submitted successfully!", job }, { status: 201 });
  } catch (err) {
    console.error("Submission error:", err);
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}


// app/api/employers/jobs/route.ts or pages/api/employers/jobs.ts (Next.js 13/14 vs 12/older)


// GET route to fetch all job applications

export async function GET() {
  try {
    await connectToDatabase();
    const jobs = await JobApplication.find().sort({ createdAt: -1 });
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}