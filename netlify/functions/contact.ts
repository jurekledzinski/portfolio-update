import fs from 'fs';
import handlebars from 'handlebars';
import juice from 'juice';
import nodemailer from 'nodemailer';
import path from 'path';
import { ContactEmailSchema } from '../../src/actions';
import { tryCatch } from '../../netlify-helpers/tryCatch';
import type { Handler, HandlerEvent } from '@netlify/functions';
import contactEmailTemplate from '../../src/templates/contactEmail.hbs';

// const contactEmailTemplate = fs.readFileSync(
//   path.join(__dirname, '../../src/templates/contactEmail.hbs'),
//   'utf-8'
// );
const compiledTemplate = handlebars.compile(contactEmailTemplate);

export const handler: Handler = tryCatch(async (event: HandlerEvent) => {
  const body = JSON.parse(event.body!);
  const parsedData = ContactEmailSchema.parse(body);

  console.log('body contact', body);

  const currentYear = new Date().getFullYear();
  const date = new Date().toLocaleString();
  const htmlContent = compiledTemplate({
    name: parsedData.name,
    email: parsedData.email,
    message: parsedData.message,
    currentYear,
    date,
  });

  const cssPath = path.join(
    process.cwd(),
    'src',
    'templates',
    'contactEmail.css'
  );

  const cssContent = fs.readFileSync(cssPath, 'utf-8');

  const htmlWithCss = juice.inlineContent(htmlContent, cssContent);

  const transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_PROVIDER_EMAIL,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASSWORD_USER,
    },
    tls: {
      rejectUnauthorized: false,
    },
  } as nodemailer.TransportOptions);

  const mailOptions = {
    from: `Portfolio <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_SENDTO,
    subject: 'Contact email',
    html: htmlWithCss,
  };

  await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Message sent successfully',
    }),
  };
});
