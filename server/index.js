import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to submissions file
const SUBMISSIONS_FILE = path.join(__dirname, 'data', 'submissions.json');

// Email configuration
// IMPORTANT: Update these settings with your email credentials
const EMAIL_CONFIG = {
  service: 'gmail', // or 'outlook', 'yahoo', etc.
  auth: {
    user: 'contactelevationmyo@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'YOUR_APP_PASSWORD_HERE' // Use environment variable or app-specific password
  }
};

// Create email transporter
const createTransporter = () => {
  try {
    return nodemailer.createTransporter(EMAIL_CONFIG);
  } catch (error) {
    console.error('Error creating email transporter:', error);
    return null;
  }
};

// Ensure data directory and file exist
async function ensureDataFileExists() {
  try {
    const dataDir = path.join(__dirname, 'data');
    await fs.mkdir(dataDir, { recursive: true });

    try {
      await fs.access(SUBMISSIONS_FILE);
    } catch {
      // File doesn't exist, create it with empty array
      await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error('Error ensuring data file exists:', error);
  }
}

// Read submissions from file
async function readSubmissions() {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return [];
  }
}

// Write submissions to file
async function writeSubmissions(submissions) {
  try {
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  } catch (error) {
    console.error('Error writing submissions:', error);
    throw error;
  }
}

// Send email notification
async function sendEmailNotification(submission) {
  const transporter = createTransporter();

  if (!transporter) {
    console.log('Email transporter not configured. Skipping email notification.');
    return false;
  }

  const formTypeLabel = submission.formType === 'booking' ? 'Appointment Request' : 'Contact Form';

  const emailHtml = `
    <h2>New ${formTypeLabel} Submission</h2>
    <p><strong>Date:</strong> ${new Date(submission.date).toLocaleString()}</p>
    <hr>
    <p><strong>Name:</strong> ${submission.name}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${submission.message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><em>This is an automated notification from your website contact form.</em></p>
  `;

  const mailOptions = {
    from: EMAIL_CONFIG.auth.user,
    to: 'contactelevationmyo@gmail.com',
    subject: `New ${formTypeLabel} - ${submission.name}`,
    html: emailHtml,
    replyTo: submission.email
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, formType } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address'
      });
    }

    // Create submission object
    const submission = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      message: message.trim(),
      formType: formType || 'contact',
      date: new Date().toISOString(),
      status: 'new'
    };

    // Read existing submissions
    const submissions = await readSubmissions();

    // Add new submission
    submissions.push(submission);

    // Write back to file
    await writeSubmissions(submissions);

    // Send email notification
    const emailSent = await sendEmailNotification(submission);

    console.log('New submission received:', {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      formType: submission.formType,
      emailSent
    });

    res.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: submission.id
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
});

// Get all submissions (for admin purposes - you may want to add authentication)
app.get('/api/submissions', async (req, res) => {
  try {
    const submissions = await readSubmissions();
    res.json({
      success: true,
      count: submissions.length,
      submissions
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      error: 'Error fetching submissions'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize server
async function startServer() {
  await ensureDataFileExists();

  app.listen(PORT, () => {
    console.log(`\n✓ Server running on http://localhost:${PORT}`);
    console.log(`✓ API endpoint: http://localhost:${PORT}/api/contact`);
    console.log(`✓ Submissions stored in: ${SUBMISSIONS_FILE}`);
    console.log('\nIMPORTANT: To enable email notifications:');
    console.log('1. Set up an app-specific password for your Gmail account');
    console.log('2. Update EMAIL_CONFIG in server/index.js or use EMAIL_PASSWORD environment variable');
    console.log('3. Visit: https://support.google.com/accounts/answer/185833\n');
  });
}

startServer();
