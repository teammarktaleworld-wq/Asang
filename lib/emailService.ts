// // lib/emailService.ts
// import nodemailer from "nodemailer";

// // ============================================================
// // TYPES
// // ============================================================

// type InquiryEmailData = {
//   ticketId: string;
//   name: string;
//   phone: string;
//   email?: string;
//   vertical: string;
//   message: string;
// };

// type CareersEmailData = {
//   applicationId: string;
//   position: string;
//   name: string;
//   email: string;
//   phone: string;
//   portfolio?: string;
//   message?: string;
// };

// // ============================================================
// // CONFIG
// // ============================================================

// const SMTP_HOST =
//   process.env.SMTP_HOST || "smtpout.secureserver.net";

// const SMTP_PORT = Number(process.env.SMTP_PORT || 465);

// const SMTP_SECURE =
//   String(process.env.SMTP_SECURE ?? "true").toLowerCase() === "true";

// const SMTP_USER = process.env.SMTP_USER;
// const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

// const RECEIVER_EMAIL =
//   process.env.CONTACT_RECEIVER_EMAIL || "surya@asang.in";

// const FROM_NAME =
//   process.env.EMAIL_FROM_NAME || "ASANG Design Studio";

// const FROM_EMAIL =
//   process.env.EMAIL_FROM_EMAIL || SMTP_USER || RECEIVER_EMAIL;

// // ============================================================
// // HELPERS
// // ============================================================

// function escapeHtml(value: string) {
//   return value
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "&quot;")
//     .replaceAll("'", "&#039;");
// }

// function formatProjectType(value: string) {
//   return value
//     .replace(/[-_]/g, " ")
//     .replace(/\b\w/g, (letter) => letter.toUpperCase());
// }

// // ============================================================
// // TRANSPORTER
// // ============================================================

// function createTransporter() {
//   if (!SMTP_USER || !SMTP_PASSWORD) {
//     throw new Error("SMTP_USER and SMTP_PASSWORD are required.");
//   }

//   return nodemailer.createTransport({
//     host: SMTP_HOST,
//     port: SMTP_PORT,
//     secure: SMTP_PORT === 465 ? true : SMTP_SECURE,
//     auth: {
//       user: SMTP_USER,
//       pass: SMTP_PASSWORD,
//     },
//   });
// }

// // ============================================================
// // EMAIL SHELL
// // ============================================================

// function emailShell(bodyContent: string) {
//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>ASANG Design Studio</title>
// </head>
// <body style="margin:0;padding:0;background:#f4f1eb;font-family:Arial,Helvetica,sans-serif;color:#231f20;">
//   <div style="width:100%;padding:40px 16px;background:#f4f1eb;">
//     <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e7e1d7;">

//       <!-- HEADER -->
//       <div style="padding:34px 38px;background:#231f20;color:#f7f4ee;">
//         <div style="font-size:26px;letter-spacing:8px;font-family:Georgia,serif;">ASANG</div>
//         <div style="margin-top:8px;font-size:10px;letter-spacing:3px;color:#d8d0c3;">ARCHITECTURE &amp; INTERIORS</div>
//       </div>

//       ${bodyContent}

//       <!-- FOOTER -->
//       <div style="padding:20px 38px;background:#f7f4ee;border-top:1px solid #e7e1d7;">
//         <div style="font-size:11px;line-height:1.7;color:#8f9a9b;">
//           This email was sent from the ASANG Design Studio website.
//         </div>
//       </div>

//     </div>
//   </div>
// </body>
// </html>`;
// }

// // ============================================================
// // SEND ENQUIRY EMAIL (CONTACT PAGE)
// // ============================================================

// export async function sendEnquiryEmail(data: InquiryEmailData) {
//   const transporter = createTransporter();
//   const projectType = formatProjectType(data.vertical);

//   const safe = {
//     ticketId: escapeHtml(data.ticketId),
//     name: escapeHtml(data.name),
//     phone: escapeHtml(data.phone),
//     email: escapeHtml(data.email || "Not provided"),
//     vertical: escapeHtml(projectType),
//     message: escapeHtml(data.message).replace(/\n/g, "<br />"),
//   };

//   const subject = `[New Enquiry] ${data.ticketId} — ${projectType} — ${data.name}`;

//   const html = emailShell(`
//     <div style="padding:34px 38px 10px;">
//       <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8f9a9b;font-weight:bold;">New Website Enquiry</div>
//       <h1 style="margin:10px 0 8px;font-family:Georgia,serif;font-size:32px;font-weight:500;color:#231f20;">New project enquiry received</h1>
//       <p style="margin:0;color:#6f6a61;font-size:14px;line-height:1.7;">A new enquiry has been submitted through the ASANG website contact form.</p>
//     </div>

//     <div style="margin:22px 38px;padding:18px 20px;background:#f7f4ee;border-left:3px solid #dcc9a8;">
//       <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8f9a9b;font-weight:bold;">Ticket ID</div>
//       <div style="margin-top:7px;font-size:20px;font-weight:bold;color:#231f20;">${safe.ticketId}</div>
//     </div>

//     <div style="padding:8px 38px 30px;">
//       <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
//         <tr>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;width:34%;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Name</td>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:15px;color:#231f20;">${safe.name}</td>
//         </tr>
//         <tr>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Phone</td>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:15px;color:#231f20;">${safe.phone}</td>
//         </tr>
//         <tr>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Email</td>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:15px;color:#231f20;">${safe.email}</td>
//         </tr>
//         <tr>
//           <td style="padding:14px 0;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Project Type</td>
//           <td style="padding:14px 0;font-size:15px;color:#231f20;">${safe.vertical}</td>
//         </tr>
//       </table>

//       <div style="margin-top:28px;">
//         <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Message</div>
//         <div style="margin-top:10px;padding:18px;background:#faf9f6;font-size:15px;line-height:1.8;color:#3f3a34;">${safe.message}</div>
//       </div>

//       ${
//         data.email
//           ? `<div style="margin-top:26px;">
//               <a href="mailto:${data.email}" style="display:inline-block;padding:13px 22px;background:#231f20;color:#ffffff;text-decoration:none;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">
//                 Reply to Enquirer
//               </a>
//             </div>`
//           : ""
//       }
//     </div>
//   `);

//   const text = [
//     "NEW ASANG WEBSITE ENQUIRY",
//     "",
//     `Ticket ID: ${data.ticketId}`,
//     `Name: ${data.name}`,
//     `Phone: ${data.phone}`,
//     `Email: ${data.email || "Not provided"}`,
//     `Project Type: ${projectType}`,
//     "",
//     "Message:",
//     data.message,
//   ].join("\n");

//   await transporter.sendMail({
//     from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
//     to: RECEIVER_EMAIL,
//     replyTo: data.email || undefined,
//     subject,
//     text,
//     html,
//   });
// }

// // ============================================================
// // SEND CAREERS EMAIL
// // ============================================================

// export async function sendCareersEmail(data: CareersEmailData) {
//   const transporter = createTransporter();

//   const safe = {
//     applicationId: escapeHtml(data.applicationId),
//     position: escapeHtml(data.position),
//     name: escapeHtml(data.name),
//     email: escapeHtml(data.email),
//     phone: escapeHtml(data.phone),
//     portfolio: escapeHtml(data.portfolio || "Not provided"),
//     message: data.message
//       ? escapeHtml(data.message).replace(/\n/g, "<br />")
//       : "Not provided",
//   };

//   const subject = `[Career Application] ${data.applicationId} — ${data.position} — ${data.name}`;

//   const html = emailShell(`
//     <div style="padding:34px 38px 10px;">
//       <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8f9a9b;font-weight:bold;">Career Application</div>
//       <h1 style="margin:10px 0 8px;font-family:Georgia,serif;font-size:32px;font-weight:500;color:#231f20;">New application received</h1>
//       <p style="margin:0;color:#6f6a61;font-size:14px;line-height:1.7;">A new career application has been submitted through the ASANG website.</p>
//     </div>

//     <div style="margin:22px 38px;padding:18px 20px;background:#f7f4ee;border-left:3px solid #dcc9a8;">
//       <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8f9a9b;font-weight:bold;">Application ID</div>
//       <div style="margin-top:7px;font-size:20px;font-weight:bold;color:#231f20;">${safe.applicationId}</div>
//     </div>

//     <div style="padding:8px 38px 30px;">
//       <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
//         <tr>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;width:34%;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Position</td>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:15px;color:#231f20;font-weight:bold;">${safe.position}</td>
//         </tr>
//         <tr>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Name</td>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:15px;color:#231f20;">${safe.name}</td>
//         </tr>
//         <tr>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Email</td>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:15px;color:#231f20;">${safe.email}</td>
//         </tr>
//         <tr>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Phone</td>
//           <td style="padding:14px 0;border-bottom:1px solid #eee7dd;font-size:15px;color:#231f20;">${safe.phone}</td>
//         </tr>
//         <tr>
//           <td style="padding:14px 0;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Portfolio</td>
//           <td style="padding:14px 0;font-size:15px;color:#231f20;">
//             ${
//               data.portfolio
//                 ? `<a href="${data.portfolio}" style="color:#231f20;">${safe.portfolio}</a>`
//                 : "Not provided"
//             }
//           </td>
//         </tr>
//       </table>

//       <div style="margin-top:28px;">
//         <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8f9a9b;font-weight:bold;">Message</div>
//         <div style="margin-top:10px;padding:18px;background:#faf9f6;font-size:15px;line-height:1.8;color:#3f3a34;">${safe.message}</div>
//       </div>

//       <div style="margin-top:26px;">
//         <a href="mailto:${data.email}" style="display:inline-block;padding:13px 22px;background:#231f20;color:#ffffff;text-decoration:none;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">
//           Reply to Applicant
//         </a>
//       </div>
//     </div>
//   `);

//   const text = [
//     "NEW ASANG CAREER APPLICATION",
//     "",
//     `Application ID: ${data.applicationId}`,
//     `Position: ${data.position}`,
//     `Name: ${data.name}`,
//     `Email: ${data.email}`,
//     `Phone: ${data.phone}`,
//     `Portfolio: ${data.portfolio || "Not provided"}`,
//     "",
//     "Message:",
//     data.message || "Not provided",
//   ].join("\n");

//   await transporter.sendMail({
//     from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
//     to: RECEIVER_EMAIL,
//     replyTo: data.email,
//     subject,
//     text,
//     html,
//   });
// }











// lib/emailService.ts

import nodemailer from "nodemailer";

// ============================================================
// TYPES
// ============================================================

type InquiryEmailData = {
  ticketId: string;
  name: string;
  phone: string;
  email?: string;
  vertical: string;
  message: string;
};

type CareersEmailData = {
  ticketId: string;
  position: string;
  name: string;
  email: string;
  phone: string;
  portfolio?: string;
  message?: string;
};

// ============================================================
// CONFIG
// ============================================================

const SMTP_HOST =
  process.env.SMTP_HOST ||
  "smtpout.secureserver.net";

const SMTP_PORT = Number(
  process.env.SMTP_PORT || 465
);

const SMTP_SECURE =
  String(
    process.env.SMTP_SECURE ?? "true"
  ).toLowerCase() === "true";

const SMTP_USER =
  process.env.SMTP_USER;

const SMTP_PASSWORD =
  process.env.SMTP_PASSWORD;

// ============================================================
// NORMAL CONTACT / ENQUIRY RECEIVER
// ============================================================

const RECEIVER_EMAIL =
  process.env.CONTACT_RECEIVER_EMAIL ||
  "surya@asang.in";

// ============================================================
// CAREERS RECEIVER
// ============================================================
//
// All career applications are sent to:
// info@asang.in
//
// Optional .env.local:
//
// CAREERS_RECEIVER_EMAIL=info@asang.in
//
// ============================================================

const CAREERS_RECEIVER_EMAIL =
  process.env.CAREERS_RECEIVER_EMAIL ||
  "info@asang.in";

// ============================================================
// FROM
// ============================================================

const FROM_NAME =
  process.env.EMAIL_FROM_NAME ||
  "ASANG Design Studio";

const FROM_EMAIL =
  process.env.EMAIL_FROM_EMAIL ||
  SMTP_USER ||
  RECEIVER_EMAIL;

// ============================================================
// HELPERS
// ============================================================

function escapeHtml(value: unknown) {
  const safeValue = String(value ?? "");

  return safeValue
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatProjectType(value: string) {
  return String(value ?? "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
}

// ============================================================
// TRANSPORTER
// ============================================================

function createTransporter() {
  if (!SMTP_USER || !SMTP_PASSWORD) {
    throw new Error(
      "SMTP_USER and SMTP_PASSWORD are required."
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,

    port: SMTP_PORT,

    secure:
      SMTP_PORT === 465
        ? true
        : SMTP_SECURE,

    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
}

// ============================================================
// EMAIL SHELL
// ============================================================

function emailShell(bodyContent: string) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>ASANG Design Studio</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f1eb;
    font-family:Arial,Helvetica,sans-serif;
    color:#231f20;
  "
>
  <div
    style="
      width:100%;
      padding:40px 16px;
      background:#f4f1eb;
    "
  >

    <div
      style="
        max-width:680px;
        margin:0 auto;
        background:#ffffff;
        border:1px solid #e7e1d7;
      "
    >

      <!-- ================================================== -->
      <!-- HEADER -->
      <!-- ================================================== -->

      <div
        style="
          padding:34px 38px;
          background:#231f20;
          color:#f7f4ee;
        "
      >

        <div
          style="
            font-size:26px;
            letter-spacing:8px;
            font-family:Georgia,serif;
          "
        >
          ASANG
        </div>

        <div
          style="
            margin-top:8px;
            font-size:10px;
            letter-spacing:3px;
            color:#d8d0c3;
          "
        >
          ARCHITECTURE &amp; INTERIORS
        </div>

      </div>

      <!-- ================================================== -->
      <!-- BODY -->
      <!-- ================================================== -->

      ${bodyContent}

      <!-- ================================================== -->
      <!-- FOOTER -->
      <!-- ================================================== -->

      <div
        style="
          padding:20px 38px;
          background:#f7f4ee;
          border-top:1px solid #e7e1d7;
        "
      >

        <div
          style="
            font-size:11px;
            line-height:1.7;
            color:#8f9a9b;
          "
        >
          This email was sent from the ASANG Design Studio website.
        </div>

      </div>

    </div>

  </div>
</body>

</html>`;
}

// ============================================================
// SEND ENQUIRY EMAIL
// ============================================================

export async function sendEnquiryEmail(
  data: InquiryEmailData
) {
  const transporter =
    createTransporter();

  // ==========================================================
  // SAFE VALUES
  // ==========================================================

  const ticketId =
    String(data.ticketId ?? "");

  const name =
    String(data.name ?? "");

  const phone =
    String(data.phone ?? "");

  const email =
    String(data.email ?? "");

  const vertical =
    String(data.vertical ?? "");

  const message =
    String(data.message ?? "");

  const projectType =
    formatProjectType(vertical);

  // ==========================================================
  // ESCAPED VALUES
  // ==========================================================

  const safe = {
    ticketId:
      escapeHtml(ticketId),

    name:
      escapeHtml(name),

    phone:
      escapeHtml(phone),

    email:
      escapeHtml(
        email || "Not provided"
      ),

    vertical:
      escapeHtml(projectType),

    message:
      escapeHtml(message)
        .replace(/\n/g, "<br />"),
  };

  // ==========================================================
  // SUBJECT
  // ==========================================================

  const subject =
    `[New Enquiry] ${ticketId} — ${projectType} — ${name}`;

  // ==========================================================
  // HTML EMAIL
  // ==========================================================

  const html = emailShell(`
    <div style="padding:34px 38px 10px;">

      <div
        style="
          font-size:11px;
          letter-spacing:2px;
          text-transform:uppercase;
          color:#8f9a9b;
          font-weight:bold;
        "
      >
        New Website Enquiry
      </div>

      <h1
        style="
          margin:10px 0 8px;
          font-family:Georgia,serif;
          font-size:32px;
          font-weight:500;
          color:#231f20;
        "
      >
        New project enquiry received
      </h1>

      <p
        style="
          margin:0;
          color:#6f6a61;
          font-size:14px;
          line-height:1.7;
        "
      >
        A new enquiry has been submitted through
        the ASANG website contact form.
      </p>

    </div>

    <!-- TICKET -->

    <div
      style="
        margin:22px 38px;
        padding:18px 20px;
        background:#f7f4ee;
        border-left:3px solid #dcc9a8;
      "
    >

      <div
        style="
          font-size:10px;
          letter-spacing:2px;
          text-transform:uppercase;
          color:#8f9a9b;
          font-weight:bold;
        "
      >
        Ticket ID
      </div>

      <div
        style="
          margin-top:7px;
          font-size:20px;
          font-weight:bold;
          color:#231f20;
        "
      >
        ${safe.ticketId}
      </div>

    </div>

    <!-- DETAILS -->

    <div style="padding:8px 38px 30px;">

      <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="border-collapse:collapse;"
      >

        <!-- NAME -->

        <tr>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              width:34%;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Name
          </td>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:15px;
              color:#231f20;
            "
          >
            ${safe.name}
          </td>

        </tr>

        <!-- PHONE -->

        <tr>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Phone
          </td>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:15px;
              color:#231f20;
            "
          >
            ${safe.phone}
          </td>

        </tr>

        <!-- EMAIL -->

        <tr>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Email
          </td>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:15px;
              color:#231f20;
            "
          >
            ${safe.email}
          </td>

        </tr>

        <!-- PROJECT TYPE -->

        <tr>

          <td
            style="
              padding:14px 0;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Project Type
          </td>

          <td
            style="
              padding:14px 0;
              font-size:15px;
              color:#231f20;
            "
          >
            ${safe.vertical}
          </td>

        </tr>

      </table>

      <!-- MESSAGE -->

      <div style="margin-top:28px;">

        <div
          style="
            font-size:11px;
            text-transform:uppercase;
            letter-spacing:1.5px;
            color:#8f9a9b;
            font-weight:bold;
          "
        >
          Message
        </div>

        <div
          style="
            margin-top:10px;
            padding:18px;
            background:#faf9f6;
            font-size:15px;
            line-height:1.8;
            color:#3f3a34;
          "
        >
          ${safe.message || "Not provided"}
        </div>

      </div>

      <!-- REPLY -->

      ${
        email
          ? `
            <div style="margin-top:26px;">

              <a
                href="mailto:${escapeHtml(email)}"
                style="
                  display:inline-block;
                  padding:13px 22px;
                  background:#231f20;
                  color:#ffffff;
                  text-decoration:none;
                  font-size:11px;
                  letter-spacing:1.5px;
                  text-transform:uppercase;
                "
              >
                Reply to Enquirer
              </a>

            </div>
          `
          : ""
      }

    </div>
  `);

  // ==========================================================
  // PLAIN TEXT EMAIL
  // ==========================================================

  const text = [
    "NEW ASANG WEBSITE ENQUIRY",
    "",
    `Ticket ID: ${ticketId}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "Not provided"}`,
    `Project Type: ${projectType}`,
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");

  // ==========================================================
  // SEND
  // ==========================================================

  await transporter.sendMail({
    from:
      `"${FROM_NAME}" <${FROM_EMAIL}>`,

    to:
      RECEIVER_EMAIL,

    replyTo:
      email || undefined,

    subject,

    text,

    html,
  });
}

// ============================================================
// SEND CAREERS EMAIL
// ============================================================

export async function sendCareersEmail(
  data: CareersEmailData
) {
  const transporter =
    createTransporter();

  // ==========================================================
  // SAFE VALUES
  // ==========================================================

  const ticketId =
    String(data.ticketId ?? "");

  const position =
    String(data.position ?? "");

  const name =
    String(data.name ?? "");

  const email =
    String(data.email ?? "");

  const phone =
    String(data.phone ?? "");

  const portfolio =
    String(data.portfolio ?? "");

  const message =
    String(data.message ?? "");

  // ==========================================================
  // ESCAPED VALUES
  // ==========================================================

  const safe = {
    ticketId:
      escapeHtml(ticketId),

    position:
      escapeHtml(position),

    name:
      escapeHtml(name),

    email:
      escapeHtml(email),

    phone:
      escapeHtml(phone),

    portfolio:
      escapeHtml(
        portfolio || "Not provided"
      ),

    message:
      message
        ? escapeHtml(message)
            .replace(/\n/g, "<br />")
        : "Not provided",
  };

  // ==========================================================
  // SUBJECT
  // ==========================================================

  const subject =
    `[Career Application] ${ticketId} — ${position} — ${name}`;

  // ==========================================================
  // HTML EMAIL
  // ==========================================================

  const html = emailShell(`
    <div style="padding:34px 38px 10px;">

      <div
        style="
          font-size:11px;
          letter-spacing:2px;
          text-transform:uppercase;
          color:#8f9a9b;
          font-weight:bold;
        "
      >
        Career Application
      </div>

      <h1
        style="
          margin:10px 0 8px;
          font-family:Georgia,serif;
          font-size:32px;
          font-weight:500;
          color:#231f20;
        "
      >
        New application received
      </h1>

      <p
        style="
          margin:0;
          color:#6f6a61;
          font-size:14px;
          line-height:1.7;
        "
      >
        A new career application has been submitted
        through the ASANG website.
      </p>

    </div>

    <!-- APPLICATION ID -->

    <div
      style="
        margin:22px 38px;
        padding:18px 20px;
        background:#f7f4ee;
        border-left:3px solid #dcc9a8;
      "
    >

      <div
        style="
          font-size:10px;
          letter-spacing:2px;
          text-transform:uppercase;
          color:#8f9a9b;
          font-weight:bold;
        "
      >
        Application ID
      </div>

      <div
        style="
          margin-top:7px;
          font-size:20px;
          font-weight:bold;
          color:#231f20;
        "
      >
        ${safe.ticketId}
      </div>

    </div>

    <!-- DETAILS -->

    <div style="padding:8px 38px 30px;">

      <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="border-collapse:collapse;"
      >

        <!-- POSITION -->

        <tr>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              width:34%;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Position
          </td>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:15px;
              color:#231f20;
              font-weight:bold;
            "
          >
            ${safe.position}
          </td>

        </tr>

        <!-- NAME -->

        <tr>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Name
          </td>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:15px;
              color:#231f20;
            "
          >
            ${safe.name}
          </td>

        </tr>

        <!-- EMAIL -->

        <tr>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Email
          </td>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:15px;
              color:#231f20;
            "
          >
            ${safe.email}
          </td>

        </tr>

        <!-- PHONE -->

        <tr>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Phone
          </td>

          <td
            style="
              padding:14px 0;
              border-bottom:1px solid #eee7dd;
              font-size:15px;
              color:#231f20;
            "
          >
            ${safe.phone}
          </td>

        </tr>

        <!-- PORTFOLIO -->

        <tr>

          <td
            style="
              padding:14px 0;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:1.5px;
              color:#8f9a9b;
              font-weight:bold;
            "
          >
            Portfolio
          </td>

          <td
            style="
              padding:14px 0;
              font-size:15px;
              color:#231f20;
            "
          >

            ${
              portfolio
                ? `
                  <a
                    href="${escapeHtml(portfolio)}"
                    style="color:#231f20;"
                  >
                    ${safe.portfolio}
                  </a>
                `
                : "Not provided"
            }

          </td>

        </tr>

      </table>

      <!-- MESSAGE -->

      <div style="margin-top:28px;">

        <div
          style="
            font-size:11px;
            text-transform:uppercase;
            letter-spacing:1.5px;
            color:#8f9a9b;
            font-weight:bold;
          "
        >
          Message
        </div>

        <div
          style="
            margin-top:10px;
            padding:18px;
            background:#faf9f6;
            font-size:15px;
            line-height:1.8;
            color:#3f3a34;
          "
        >
          ${safe.message}
        </div>

      </div>

      <!-- REPLY -->

      ${
        email
          ? `
            <div style="margin-top:26px;">

              <a
                href="mailto:${escapeHtml(email)}"
                style="
                  display:inline-block;
                  padding:13px 22px;
                  background:#231f20;
                  color:#ffffff;
                  text-decoration:none;
                  font-size:11px;
                  letter-spacing:1.5px;
                  text-transform:uppercase;
                "
              >
                Reply to Applicant
              </a>

            </div>
          `
          : ""
      }

    </div>
  `);

  // ==========================================================
  // PLAIN TEXT EMAIL
  // ==========================================================

  const text = [
    "NEW ASANG CAREER APPLICATION",
    "",
    `Application ID: ${ticketId}`,
    `Position: ${position}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Portfolio: ${
      portfolio || "Not provided"
    }`,
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");

  // ==========================================================
  // SEND CAREER EMAIL
  // ==========================================================

  await transporter.sendMail({
    from:
      `"${FROM_NAME}" <${FROM_EMAIL}>`,

    // ALL CAREER APPLICATIONS
    // GO TO info@asang.in
    to:
      CAREERS_RECEIVER_EMAIL,

    // Reply directly to applicant
    replyTo:
      email || undefined,

    subject,

    text,

    html,
  });
}