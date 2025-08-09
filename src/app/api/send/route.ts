import { BasicEmailTemplate } from '@/components/email-template/BasicEmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'LamGig <updatemail@lamgig.com>',
      to: ['nhat@lamgig.com'],
      subject: 'Update from LamGig.com',
      react: BasicEmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}