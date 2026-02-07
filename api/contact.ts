import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

// Simple {{var}} template renderer
function renderTemplate(
  template: string,
  variables: Record<string, string>
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] ?? "");
}

function loadTemplate(name: string): string {
  return fs.readFileSync(path.join(__dirname, "templates", name), "utf-8");
}

// Build the details rows for the ticket HTML template
function buildDetailsHtml(
  details: { label: string; value: string }[]
): string {
  return details
    .map(
      (d) =>
        `<tr><td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:10px;line-height:1;text-align:left;color:#000000;"><strong>${d.label}</strong>: ${d.value}</div></td></tr>`
    )
    .join("");
}

function buildDetailsText(
  details: { label: string; value: string }[]
): string {
  return details.map((d) => `${d.label}: ${d.value}`).join("\n");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, app, version, os, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { RESEND_API_KEY, RESEND_FROM, CONTACT_EMAIL } = process.env;

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    console.log("Contact form submission:", {
      name,
      email,
      app,
      version,
      os,
      message,
    });
    return res
      .status(200)
      .json({ success: true, message: "Form received (email not configured)" });
  }

  const resend = new Resend(RESEND_API_KEY);
  const fromAddress = RESEND_FROM || "support@inzight.nz";
  const supportEmail =
    CONTACT_EMAIL || "inzight_support@stat.auckland.ac.nz";

  // Format date in NZ timezone
  const date = new Date().toLocaleString("en-NZ", {
    timeZone: "Pacific/Auckland",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  // Build technical details
  const details: { label: string; value: string }[] = [
    { label: "Name", value: name },
    { label: "Email", value: email },
  ];

  if (app === "desktop") {
    details.push({
      label: "iNZight Version",
      value: version || "Not specified",
    });
    details.push({
      label: "Operating System",
      value: os || "Not specified",
    });
  } else if (app === "lite") {
    details.push({ label: "Application", value: "iNZight Lite" });
  }

  const subject = `[iNZight Contact] Message from ${name}`;

  // Convert newlines to <br> for HTML templates
  const messageHtml = message.replace(/\n/g, "<br>");

  // Render ticket email
  const ticketHtml = renderTemplate(loadTemplate("ticket.html"), {
    message: messageHtml,
    date,
    details: buildDetailsHtml(details),
  });
  const ticketText = renderTemplate(loadTemplate("ticket.txt"), {
    message,
    date,
    details: buildDetailsText(details),
  });

  try {
    // Send to Zoho Desk (or support email) — Zoho handles
    // ticket creation, ref numbers, and user confirmation
    const { error } = await resend.emails.send({
      from: `iNZight Contact Form <${fromAddress}>`,
      to: supportEmail,
      replyTo: name ? `${name} <${email}>` : email,
      subject,
      html: ticketHtml,
      text: ticketText,
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
