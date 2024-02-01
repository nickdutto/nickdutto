'use server';

import { Resend } from 'resend';

import ContactConfirmationEmail from '~/components/email/ContactConfirmationEmail';
import ContactInquiryEmail from '~/components/email/ContactInquiryEmail';
import { env } from '~/lib/env/server';
import { type ContactPayload, ContactValidator } from '~/lib/validators/ContactValidator';

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail(data: ContactPayload) {
  const parsedData = ContactValidator.safeParse(data);

  if (parsedData.success) {
    try {
      const { name, email, subject, message } = parsedData.data;

      await resend.emails
        .send({
          from: 'Nick Dutton <contactme@nickdutto.dev>',
          reply_to: email,
          to: 'nick@nickdutto.dev',
          subject: subject,
          react: ContactInquiryEmail({
            name: name,
            from: email,
            subject: subject,
            message: message,
          }),
        })
        .then(async () => {
          await resend.emails.send({
            from: 'Nick Dutton <contactme@nickdutto.dev>',
            to: email,
            subject: subject,
            react: ContactConfirmationEmail({
              name: name,
              from: email,
              subject: subject,
              message: message,
            }),
          });
        });

      return { success: true };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  if (parsedData.error) {
    return { success: false, error: parsedData.error.format() };
  }
}
