import { connectToDatabase } from "@/library/mongoose";
import JobApplication from "@/models/JobApplication";

export async function POST(req: { json: () => any; }) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const job = await JobApplication.create(body);
    return new Response(JSON.stringify(job), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to submit" }), { status: 500 });
  }
}
