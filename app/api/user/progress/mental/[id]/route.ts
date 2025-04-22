import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose"; // Your MongoDB connector
import User from "@/models/user"; // Your User model


// back-end for user GET method for show or fetch the physical assasment data ...



export async function GET(
  req: NextRequest
 
) {
  const params  = req.nextUrl.searchParams;
  const userId = params.get('id');
 
  console.log(userId)
console.log(userId)

  if (!userId) {
    return NextResponse.json({ message: "User ID is required" }, { status: 400 });
  }

  try {
    await connectToDatabase(); // Make sure you're connected to DB

    const user = await User.findOne({ username: userId }); // or { _id: userId } if using ObjectId

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const step = user.step || 0; // adjust based on your schema
    return NextResponse.json({ step }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user progress:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}








// back-end for admin POST method for update or create the PhysicalAssessment data


// // /pages/api/progress/[id].ts

export async function POST(
  req: NextRequest,

) {
  const params  = req.nextUrl.searchParams;
  const id = params.get('id');
 
  console.log(id)
  try {
   
   
    const body = await req.json(); // contains the physical data

    if (!id) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate(
      { username: id }, // or use _id if preferred
      {
        $set: {
          physicalAssessmentData: {
            height: body.height,
            weight: body.weight,
            bmi: body.bmi,
            notes: body.notes,
            bloodgroup: body.bloodgroup
          }
        }
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Physical assessment data updated",
      data: updatedUser.physicalAssessmentData
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}


// Dummy DB fetch for example
// async function fetchPhysicalAssessmentFromDB(userId: string) {
//   return {
//     height: "175cm",
//     weight: "70kg",
//     bmi: "22.9",
//     notes: "Healthy body metrics",
//     userId,
//   };
// }


// users=[{
//   {"_id":{"$oid":"6803444722d3cfd653da1494"},"username":"moses_shajan","email":"m.j.sandy2916@gmail.com","password":"$2b$10$WrCkrHmjMZCVno73NHoeuu/6Rc/6ZIk8Y7kP9puvg8pRvauXzjrZy","role":"user","__v":{"$numberInt":"0"},"physicalAssessmentData":{'height': "175cm",
//         'weight': "70kg",
//         'bmi': "22.9",
//         'notes': "Healthy body metrics",
//         'bloodgroup':0+}
// },
// {"_id":{"$oid":"6803444722d3cfd653da1494"},"username":"priya","email":"priya143@gmail.com","password":"$2b$10$WrCkrHmjMZCVno73NHoeuu/6Rc/6ZIk8Y7kP9puvg8pRvauXzjrZy","role":"user","__v":{"$numberInt":"0"},"physicalAssessmentData":{'height': "175cm",
//         'weight': "70kg",
//         'bmi': "22.9",
//         'notes': "Healthy body metrics",
//         'bloodgroup':0+}
// },

// }]
