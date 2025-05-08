// library/sendEmail.ts

import nodemailer from "nodemailer";

export async function sendAffiliateWelcomeEmail(to: string, name: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",  // or your preferred SMTP provider
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME, // your email
      pass: process.env.EMAIL_PASSWORD, // your app-specific password or SMTP pass
    },
  });
 

  const mailOptions = {
    from: `"Illaram Healthcare" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject: "Welcome to Illaram Affiliate Program",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            font-family: 'Poppins', sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          }
          h2 {
            color: #0f766e;
            font-weight: 600;
            margin-bottom: 10px;
          }
          p {
            color: #555;
            font-size: 15px;
            line-height: 1.6;
            margin: 10px 0;
          }
          .button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            border: 1px solid #ff5f37;
            color: #ff5f37;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .button:hover {
            background-color: #ff5f37;
            color: #ffffff;
          }
          .footer {
            text-align: center;
            font-size: 13px;
            color: #aaa;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Welcome, ${name}!</h2>
          <p>Thank you for applying to become an affiliate with Illaram.</p>
          <p>We're reviewing your application and will get in touch with you shortly via email.</p>
          <p>We’re excited to have you onboard!</p>
          <a href="https://illaram-healthcare.netlify.app" class="button">Visit Illaram Website</a>
          <div class="footer">
            If you have any questions, contact us at <a href="mailto:support@illaram.com">support@illaram.com</a>.
          </div>
        </div>
      </body>
      </html>
    `,
  };
  


  await transporter.sendMail(mailOptions);
}
