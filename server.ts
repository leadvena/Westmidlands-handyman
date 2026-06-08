import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares to parse JSON and URL-encoded request bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Contact Form Server-Side Validation API Route
  app.post("/api/contact", (req, res) => {
    const { name, phone, service, message } = req.body;
    const errors: Record<string, string> = {};

    // Name validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your name (at least 2 letters).";
    }

    // Phone validation
    const cleanPhone = phone ? String(phone).replace(/\s+/g, "") : "";
    const phoneRegex = /^(?:(?:\+44\s?|0)7\d{9}|(?:\+44\s?|0)\d{9,10})$/; // UK phone regex support
    if (!phone || typeof phone !== "string" || cleanPhone.length < 9) {
      errors.phone = "Please enter a valid contact phone number.";
    }

    // Service validation
    if (!service || typeof service !== "string" || service.trim() === "") {
      errors.service = "Please select a service you need help with.";
    }

    // Message validation
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

    // If successful (Phillip's business email simulated receipt)
    return res.status(200).json({
      success: true,
      message: `Thank you, ${name}! Your request has been sent of Phillip. He will contact you on ${phone} or via email shortly regarding "${service}".`,
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite HMR middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`West Midlands Handyman app running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
