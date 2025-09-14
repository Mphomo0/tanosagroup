import { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    // Get form data from the contact form
    const { name, email, phone, website, company, subject, message } =
      await req.json()

    // Create the transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail email address
        pass: process.env.GMAIL_PASS, // Your App Password (not your Gmail password)
      },
    })

    // Create HTML email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    // Define email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // sender address
      to: process.env.GMAIL_USER, // send to yourself
      replyTo: email, // so you can reply directly to the sender
      subject: `Contact Form: ${subject}`, // subject line
      text: `
        New contact form submission:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Website: ${website || 'Not provided'}
        Company: ${company || 'Not provided'}
        Subject: ${subject}
        
        Message:
        ${message}
      `, // plain text body
      html: htmlContent, // html body
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
