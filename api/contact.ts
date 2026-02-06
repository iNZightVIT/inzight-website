import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, app, version, os, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Build email content
  const emailBody = `
New contact form submission from iNZight website:

Name: ${name}
Email: ${email}
Application: ${app || "Not specified"}
${app === "desktop" ? `Version: ${version || "Not specified"}` : ""}
${app === "desktop" ? `Operating System: ${os || "Not specified"}` : ""}

Message:
${message}
  `.trim();

  // Check for Resend API key
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY not configured");
    // In development, just log the message
    console.log("Contact form submission:", emailBody);
    return res.status(200).json({ success: true, message: "Form received (email not configured)" });
  }

  try {
    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "iNZight Contact Form <noreply@inzight.nz>",
        to: process.env.CONTACT_EMAIL || "inzight_support@stat.auckland.ac.nz",
        reply_to: email,
        subject: `[iNZight Contact] Message from ${name}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
