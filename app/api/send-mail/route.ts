import { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, website, company, subject, message } =
      await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

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

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
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
      `,
      html: htmlContent,
    }

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
