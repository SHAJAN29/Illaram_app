import * as Yup from 'yup';
import * as yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  role: Yup.string().oneOf(['user', 'admin'], 'Invalid role').required('Role is required'),
});




export const appointmentSchema = yup.object().shape({
  name: yup
  .string()
  .required("Full name is required")
  .min(3, "Name must be at least 3 characters"),
  email: yup
  .string()
  .required("Email is required")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Enter a valid email address"
  ),
phone: yup
  .string()
  .matches(/^[6-9]\d{9}$/, "Phone must be a valid 10-digit Indian number")
  .required("Phone is required"),
service: yup.string().required("Please select a service"),
message: yup
  .string()
  .max(500, "Message should be under 500 characters")
  .notRequired(),
});