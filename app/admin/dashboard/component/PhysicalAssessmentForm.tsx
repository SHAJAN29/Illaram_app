"use client";

import { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Props } from "next/script";

// Yup Schema
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  height: Yup.string().required("Height is required"),
  weight: Yup.string().required("Weight is required"),
  bmi: Yup.string()
    .required("BMI is required")
    .matches(/^\d+(\.\d+)?$/, "BMI must be a number"),
  bloodgroup: Yup.string()
    .required("Blood group is required")
    .matches(/^(A|B|AB|O)[+-]$/, "Invalid blood group format (e.g., O+)"),
  notes: Yup.string().required("Notes are required"),
});

interface AdminPhysicalAssessmentFormProps {
  userName: string | string[] | undefined;
}

const AdminPhysicalAssessmentForm: React.FC<
  AdminPhysicalAssessmentFormProps
> = ({ userName }) => {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const username = watch("username");

  // ✅ Auto-fetch on username blur
  const fetchUserData = async () => {
    if (!username) return;
    setStatus("Fetching user data...");
    try {
      const res = await fetch(`/api/user/progress/physical/${username}`);
      if (!res.ok) throw new Error("User not found");

      const data = await res.json();

      if (data) {
        setValue("height", data.height || "");
        setValue("weight", data.weight || "");
        setValue("bmi", data.bmi || "");
        setValue("bloodgroup", data.bloodgroup || "");
        setValue("notes", data.notes || "");
        setStatus("User data loaded.");
      }
    } catch (err) {
      console.error(err);
      setStatus("User not found or error loading data.");
    }
  };

  const onSubmit = async (data: any) => {
    setStatus("Updating...");
    try {
      const res = await fetch(`/api/user/progress/physical/${data.username}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to update");

      setStatus("✅ Data updated successfully");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to update data");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Admin – Physical Assessment Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            {...register("username")}
            onBlur={fetchUserData}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder={`${userName}`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Height</label>
            <input
              {...register("height")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              placeholder="e.g. 175cm"
            />
            {errors.height && (
              <p className="text-red-500 text-sm mt-1">
                {errors.height.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Weight</label>
            <input
              {...register("weight")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              placeholder="e.g. 70kg"
            />
            {errors.weight && (
              <p className="text-red-500 text-sm mt-1">
                {errors.weight.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">BMI</label>
            <input
              {...register("bmi")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              placeholder="e.g. 22.5"
            />
            {errors.bmi && (
              <p className="text-red-500 text-sm mt-1">{errors.bmi.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Blood Group
            </label>
            <input
              {...register("bloodgroup")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              placeholder="e.g. O+"
            />
            {errors.bloodgroup && (
              <p className="text-red-500 text-sm mt-1">
                {errors.bloodgroup.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            {...register("notes")}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            placeholder="e.g. Good physical condition..."
          />
          {errors.notes && (
            <p className="text-red-500 text-sm mt-1">{errors.notes.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className=" btn btn-blue px-6 py-2 rounded-xl font-medium transition-all"
          >
            Save Assessment
          </button>
        </div>

        {status && <p className="text-center text-sm mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default AdminPhysicalAssessmentForm;

// const AdminPhysicalAssessmentForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     height: "",
//     weight: "",
//     bmi: "",
//     notes: "",
//     bloodgroup: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [status, setStatus] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setSuccess(false);

//   const onSubmit = async (data: any) => {
//     setLoading(true);
//     setSuccess(false);
//     setStatus("Updating...");
//     try {
//       const res = await fetch(`/api/user/progress/physical/${data.username}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await res.json();
//       if (!res.ok) throw new Error(result.message || "Failed to update");

//       setStatus("✅ Data updated successfully");
//       reset();
//     } catch (err) {
//       console.error(err);
//       setStatus("❌ Failed to update data");
//     }
//   };
//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">
//         Admin: Update Physical Assessment
//       </h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <Input
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             crossOrigin={undefined}
//             label="Username"
//             {...register("username")}
//           />
//           {errors.username && (
//             <p className="text-red-500 text-sm">{errors.username.message}</p>
//           )}
//         </div>
//         <div>
//           <Input
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             crossOrigin={undefined}
//             label="Height (e.g., 175cm)"
//             {...register("height")}
//           />
//           {errors.height && (
//             <p className="text-red-500 text-sm">{errors.height.message}</p>
//           )}
//         </div>
//         <div>
//           <Input
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             crossOrigin={undefined}
//             label="Weight (e.g., 70kg)"
//             {...register("weight")}
//           />
//           {errors.weight && (
//             <p className="text-red-500 text-sm">{errors.weight.message}</p>
//           )}
//         </div>
//         <div>
//           <Input
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             crossOrigin={undefined}
//             label="BMI"
//             {...register("bmi")}
//           />
//           {errors.bmi && (
//             <p className="text-red-500 text-sm">{errors.bmi.message}</p>
//           )}
//         </div>
//         <div>
//           <Input
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             crossOrigin={undefined}
//             label="Blood Group (e.g., O+)"
//             {...register("bloodgroup")}
//           />
//           {errors.bloodgroup && (
//             <p className="text-red-500 text-sm">{errors.bloodgroup.message}</p>
//           )}
//         </div>
//         <div>
//           <Textarea
//             onPointerEnterCapture={undefined}
//             onPointerLeaveCapture={undefined}
//             label="Notes"
//             {...register("notes")}
//           />
//           {errors.notes && (
//             <p className="text-red-500 text-sm">{errors.notes.message}</p>
//           )}
//         </div>

//         <Button
//           type="submit"
//           className="bg-blue-500 text-white"
//           placeholder={undefined}
//           onPointerEnterCapture={undefined}
//           onPointerLeaveCapture={undefined}
//         >
//           Save Assessment
//         </Button>
//         {status && <p className="text-sm mt-2">{status}</p>}
//       </form>
//     </div>
//   );
// };
