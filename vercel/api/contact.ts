import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed. Use POST instead."
    });
  }

  const { name, phone, service, message } = req.body;
  const errors: Record<string, string> = {};

  // Server-side validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 letters).";
  }

  const cleanPhone = phone ? String(phone).replace(/\s+/g, "") : "";
  if (!phone || typeof phone !== "string" || cleanPhone.length < 9) {
    errors.phone = "Please enter a valid UK contact phone number.";
  }

  if (!service || typeof service !== "string" || service.trim() === "") {
    errors.service = "Please select a service you need help with.";
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.message = "Please describe your job with at least 10 characters.";
  }

  // If validation errors exist, return 400 Bad Request
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed. Please correct the highlighted fields.",
      errors,
    });
  }

  // Success response simulated receipt
  return res.status(200).json({
    success: true,
    message: `Thank you, ${name}! Your request has been sent to Phillip. He will contact you on ${phone} shortly regarding "${service}".`
  });
}
