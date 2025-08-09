import { StartProjectEmailTemplate } from '@/components/email-template/start-project-email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { 
      package: selectedPackage,
      businessDescription,
      projectNeeds,
      firstName,
      lastName,
      company,
      email,
      phone
    } = body;

    // Validate required fields
    if (!email || !firstName || !lastName || !businessDescription || !projectNeeds || !selectedPackage) {
      return Response.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'LamGig <noreply@updatemail.lamgig.com>',
      to: ['nhat@lamgig.com'],
      subject: `New ${selectedPackage === 'enterprise' ? 'Enterprise' : 'Standard'} Project Request from ${firstName} ${lastName}`,
      react: StartProjectEmailTemplate({
        package: selectedPackage,
        businessDescription,
        projectNeeds,
        firstName,
        lastName,
        company,
        email,
        phone
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