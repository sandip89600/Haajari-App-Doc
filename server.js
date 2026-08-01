import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React app can communicate with the backend
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Allow default Vite dev ports
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Parse JSON request bodies
app.use(express.json());

// API route to handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, company, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Required fields are missing: name, email, phone, message' });
  }

  // Set up Nodemailer transporter using SMTP settings
  // The credentials should be supplied in a .env file
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Standard Gmail SMTP service
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address (e.g., info.haajariapp@gmail.com)
      pass: process.env.EMAIL_PASS  // Your Gmail App Password (not the default account password)
    }
  });

  // Compose HTML message layout
  const htmlContent = `
    <div style="font-family: sans-serif; padding: 20px; color: #0C1E29; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
      <h2 style="color: #FF5B06; border-bottom: 2px solid #FF5B06; padding-bottom: 10px;">New Help Center Contact Submission</h2>
      <p style="margin-top: 15px;">You have received a new inquiry from the Haajari App Help Center contact form:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 120px; border-bottom: 1px solid #f1f5f9;">Full Name:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Company:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${company || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="tel:${phone}">${phone}</a></td>
        </tr>
      </table>

      <div style="margin-top: 20px; padding: 15px; bg-color: #f8fafc; border-radius: 8px; border-left: 4px solid #FF5B06;">
        <h4 style="margin: 0 0 8px 0; color: #0C1E29;">Message:</h4>
        <p style="margin: 0; line-height: 1.5; font-style: italic;">"${message}"</p>
      </div>

      <footer style="margin-top: 30px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px; text-align: center;">
        This email was automatically generated and sent from the Haajari App Help Center.
      </footer>
    </div>
  `;

  const mailOptions = {
    from: `"Haajari Help Center" <${process.env.EMAIL_USER}>`, // Auth user as sender
    to: 'info.haajariapp@gmail.com',                           // Recipient email
    replyTo: email,                                           // Reply directly to the user who filled the form
    subject: `📩 Help Center Lead: ${name} (${company || 'No Company'})`,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ error: 'Failed to send email. Check backend server logs.' });
  }
});

// API route to handle account deletion requests
app.post('/api/delete-account', async (req, res) => {
  const { name, phone, email, company, reason, message } = req.body;

  // Basic validation
  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Required fields are missing: name, phone, email' });
  }

  // Set up Nodemailer transporter using SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const htmlContent = `
    <div style="font-family: sans-serif; padding: 20px; color: #0C1E29; max-width: 600px; border: 1px solid #fee2e2; border-radius: 12px; border-top: 4px solid #ef4444;">
      <h2 style="color: #ef4444; border-bottom: 2px solid #fee2e2; padding-bottom: 10px; margin-top: 0;">⚠️ URGENT: Account Deletion Request</h2>
      <p>A user has submitted an official request to permanently delete their Haajari account and operational data:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 150px; border-bottom: 1px solid #f1f5f9;">Full Name:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Registered Mobile:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="tel:${phone}">${phone}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Registered Email:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Company Profile:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${company || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Reason:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${reason || 'Not specified'}</td>
        </tr>
      </table>

      ${message ? `
      <div style="margin-top: 20px; padding: 15px; background-color: #fcfcfc; border-radius: 8px; border-left: 4px solid #94a3b8;">
        <h4 style="margin: 0 0 8px 0; color: #0C1E29;">Additional Comments:</h4>
        <p style="margin: 0; line-height: 1.5; font-style: italic;">"${message}"</p>
      </div>
      ` : ''}

      <footer style="margin-top: 30px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px; text-align: center;">
        This email was automatically generated and sent from the Haajari App Account Deletion Request Portal.
      </footer>
    </div>
  `;

  const mailOptions = {
    from: `"Haajari Accounts" <${process.env.EMAIL_USER}>`,
    to: 'info.haajariapp@gmail.com',
    replyTo: email,
    subject: `⚠️ Account Deletion Request: ${name} (${phone})`,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Deletion request sent successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ error: 'Failed to send email. Check backend server logs.' });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
