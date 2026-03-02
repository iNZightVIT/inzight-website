import type { HandlerEvent, HandlerContext, HandlerResponse } from "@netlify/functions";
import { Resend } from "resend";

// Email templates embedded directly in code for Netlify Functions
const TICKET_HTML_TEMPLATE = `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }</style><!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }</style><style type="text/css"></style></head><body style="word-spacing:normal;"><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:150%;text-align:left;color:#000000;">{{message}}</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><p style="border-top:solid 4px #18afe3;font-size:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px #18afe3;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1;text-align:left;color:#000000;">Technical information</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:10px;line-height:1;text-align:left;color:#000000;"><strong>Sent on</strong>: {{date}}</div></td></tr>{{details}}<tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><p style="border-top:solid 4px #18afe3;font-size:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px #18afe3;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;

const TICKET_TEXT_TEMPLATE = `{{message}}

***

**Technical information**

Sent on: {{date}}
{{details}}`;

// Simple {{var}} template renderer
function renderTemplate(
  template: string,
  variables: Record<string, string>
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] ?? "");
}

function loadTemplate(name: string): string {
  if (name === "ticket.html") {
    return TICKET_HTML_TEMPLATE;
  }
  if (name === "ticket.txt") {
    return TICKET_TEXT_TEMPLATE;
  }
  throw new Error(`Template not found: ${name}`);
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

export const handler = async (
  event: HandlerEvent,
  context: HandlerContext
): Promise<HandlerResponse> => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Parse request body
  let body: any;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const { name, email, app, version, os, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
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
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Form received (email not configured)",
      }),
    };
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
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
