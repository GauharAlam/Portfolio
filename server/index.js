import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  console.log(`[Contact Form Submission] From: ${name} (${email}) | Subject: ${subject || 'No Subject'}`);
  console.log(`Message: ${message}`);

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (emailUser && emailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'gauharalam1377@gmail.com',
        subject: `[Portfolio Contact] ${subject || 'New Message from ' + name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #3b82f6;">New Portfolio Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; font-style: italic;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully via Nodemailer.');
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
      console.error('Error sending email via Nodemailer:', err);
      // Fallback return so user gets feedback
      return res.status(200).json({
        success: true,
        message: 'Message received! (Logged locally - configure SMTP credentials in .env for live email delivery)',
      });
    }
  } else {
    console.log('EMAIL_USER/EMAIL_PASS not configured. Operating in mock development mode.');
    return res.status(200).json({
      success: true,
      message: 'Message received successfully! (Development mode: logged to server console)',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on http://localhost:${PORT}`);
});
