import { ProjectSubmissionTemplate } from '@/components/EmailTemplates/ProjectSubmissionTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, phonenumber, prompt } = body;

    // Validate required fields
    if (!email || !prompt) {
      return Response.json(
        { error: 'Email and project description are required' }, 
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'LamGig <projects@lamgig.com>',
      to: ['nhat@lamgig.com'],
      subject: `New Project Request from ${email}`,
      react: ProjectSubmissionTemplate({
        firstname: firstname || '',
        lastname: lastname || '',
        email,
        phonenumber: phonenumber || '',
        prompt
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}