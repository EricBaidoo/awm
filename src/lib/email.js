import nodemailer from 'nodemailer';

// Configure the SMTP transporter using Environment Variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Sends an email using the configured SMTP transporter
 * 
 * @param {Object} options
 * @param {string} options.to - Recipient email (defaults to church admin if not provided)
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content of the email
 * @param {string} options.replyTo - Optional reply-to address (usually the submitter's email)
 */
export async function sendEmail({ to, subject, html, replyTo }) {
  const adminEmail = process.env.CONTACT_EMAIL || 'info@awm.e7techlab.com';
  
  try {
    const info = await transporter.sendMail({
      from: `"AWM Website" <${process.env.SMTP_USER || adminEmail}>`,
      to: to || adminEmail,
      replyTo: replyTo,
      subject: subject,
      html: html,
    });
    
    console.log('✉️ Email sent successfully: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // Don't throw, just return failure so the API can handle it gracefully if SMTP isn't set up yet
    return { success: false, error: error.message };
  }
}

/**
 * Generates a clean HTML email template
 */
export function generateEmailTemplate(title, fields) {
  const fieldsHtml = Object.entries(fields)
    .filter(([_, value]) => value) // Don't include empty fields
    .map(([key, value]) => `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
          <strong style="color: #333; display: block; text-transform: capitalize; font-size: 12px; margin-bottom: 4px;">${key.replace(/([A-Z])/g, ' $1').trim()}</strong>
          <span style="color: #555; font-size: 15px;">${value.replace(/\n/g, '<br/>')}</span>
        </td>
      </tr>
    `).join('');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
      <h2 style="color: #D4AF37; margin-bottom: 20px; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
        ${title}
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${fieldsHtml}
      </table>
      <div style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
        This is an automated message from the Anointed Word Ministries website.
      </div>
    </div>
  `;
}
