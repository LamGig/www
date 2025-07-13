import * as React from 'react';

interface ProjectSubmissionTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  prompt: string;
}

export function ProjectSubmissionTemplate({
  firstname,
  lastname,
  email,
  phonenumber,
  prompt
}: ProjectSubmissionTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '10px' }}>
        New Project Request
      </h1>
      
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#333333', fontSize: '18px' }}>Contact Information</h2>
        <table style={{ width: '100%', marginTop: '10px' }}>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', width: '120px' }}>Name:</td>
            <td style={{ padding: '8px 0' }}>{firstname} {lastname}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Email:</td>
            <td style={{ padding: '8px 0' }}>{email}</td>
          </tr>
          {phonenumber && (
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Phone:</td>
              <td style={{ padding: '8px 0' }}>{phonenumber}</td>
            </tr>
          )}
        </table>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ color: '#333333', fontSize: '18px' }}>Project Description</h2>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          border: '1px solid #e9ecef', 
          borderRadius: '8px', 
          padding: '15px', 
          marginTop: '10px',
          whiteSpace: 'pre-wrap'
        }}>
          {prompt}
        </div>
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px', 
        fontSize: '12px', 
        color: '#666666' 
      }}>
        This email was sent from the LamGig.com contact form.
      </div>
    </div>
  );
}