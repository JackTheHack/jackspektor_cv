'use server';

import nodemailer from 'nodemailer';

export default async function handler(formData: any) {
  const { name, email, message } = formData;

  let fromAddress = process.env.FROM_EMAIL_ADDRESS ?? 'jack.spektor@gmail.com';
  let emailPassword = process.env.EMAIL_PASSWORD;
  let toAddress = process.env.TO_EMAIL_ADDRESS ?? 'jack.spektor@gmail.com';

  const mailTransporter = nodemailer.createTransport(
    `smtps://${fromAddress}:${emailPassword}@smtp.gmail.com`,
  );

  const htmlMessage = `<html><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p></html>`;

  try {
    await mailTransporter.sendMail({
      from: '"Jack Spektor" website',
      html: htmlMessage,
      subject: 'jackspektor.com submission',
      to: toAddress,
    });
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false };
  }
}
