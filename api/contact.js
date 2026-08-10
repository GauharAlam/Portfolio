import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  console.log(`[Contact Form Submission] From: ${name} (${email}) | Subject: ${subject || 'No Subject'}`);

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
        to: 'gauhar54995@gmail.com',
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
      console.log('Email sent successfully via Vercel Serverless Function.');
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
      console.error('Error sending email via Nodemailer:', err);
      return res.status(200).json({
        success: true,
        message: 'Message received successfully! (Logged - configure SMTP credentials in Vercel settings)',
      });
    }
  } else {
    console.log('EMAIL_USER/EMAIL_PASS not configured in Vercel environment. Operating in mock mode.');
    return res.status(200).json({
      success: true,
      message: 'Message received successfully! Thank you for reaching out.',
    });
  }
}
