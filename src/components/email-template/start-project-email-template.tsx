import * as React from 'react';

interface StartProjectEmailTemplateProps {
  package: string;
  businessDescription: string;
  projectNeeds: string;
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone?: string;
}

export function StartProjectEmailTemplate({
  package: selectedPackage,
  businessDescription,
  projectNeeds,
  firstName,
  lastName,
  company,
  email,
  phone
}: StartProjectEmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#000000', padding: '20px', borderRadius: '8px 8px 0 0' }}>
        <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>
          New Project Request
        </h1>
      </div>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderLeft: '1px solid #e9ecef', borderRight: '1px solid #e9ecef' }}>
        <div style={{ 
          backgroundColor: selectedPackage === 'enterprise' ? '#1f2937' : '#3b82f6',
          color: '#ffffff',
          padding: '10px 15px',
          borderRadius: '6px',
          display: 'inline-block',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          {selectedPackage === 'enterprise' ? 'Enterprise' : 'Standard'} Package
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
          <h2 style={{ color: '#1f2937', fontSize: '18px', marginTop: 0, marginBottom: '15px' }}>
            Contact Information
          </h2>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', color: '#6b7280', fontSize: '14px' }}>Name:</td>
                <td style={{ padding: '8px 0', color: '#1f2937', fontSize: '14px', fontWeight: '500' }}>
                  {firstName} {lastName}
                </td>
              </tr>
              {company && (
                <tr>
                  <td style={{ padding: '8px 0', color: '#6b7280', fontSize: '14px' }}>Company:</td>
                  <td style={{ padding: '8px 0', color: '#1f2937', fontSize: '14px', fontWeight: '500' }}>
                    {company}
                  </td>
                </tr>
              )}
              <tr>
                <td style={{ padding: '8px 0', color: '#6b7280', fontSize: '14px' }}>Email:</td>
                <td style={{ padding: '8px 0', color: '#1f2937', fontSize: '14px', fontWeight: '500' }}>
                  <a href={`mailto:${email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                    {email}
                  </a>
                </td>
              </tr>
              {phone && (
                <tr>
                  <td style={{ padding: '8px 0', color: '#6b7280', fontSize: '14px' }}>Phone:</td>
                  <td style={{ padding: '8px 0', color: '#1f2937', fontSize: '14px', fontWeight: '500' }}>
                    {phone}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
          <h2 style={{ color: '#1f2937', fontSize: '18px', marginTop: 0, marginBottom: '15px' }}>
            Business Description
          </h2>
          <div style={{ 
            color: '#374151',
            fontSize: '14px',
            lineHeight: '1.6',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#f9fafb',
            padding: '15px',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            {businessDescription}
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px' }}>
          <h2 style={{ color: '#1f2937', fontSize: '18px', marginTop: 0, marginBottom: '15px' }}>
            Project Requirements
          </h2>
          <div style={{ 
            color: '#374151',
            fontSize: '14px',
            lineHeight: '1.6',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#f9fafb',
            padding: '15px',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            {projectNeeds}
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f3f4f6',
        padding: '15px 20px',
        borderRadius: '0 0 8px 8px',
        borderLeft: '1px solid #e9ecef',
        borderRight: '1px solid #e9ecef',
        borderBottom: '1px solid #e9ecef'
      }}>
        <p style={{ 
          margin: 0,
          fontSize: '12px',
          color: '#6b7280',
          textAlign: 'center'
        }}>
          This project request was submitted via LamGig.com
        </p>
        <p style={{ 
          margin: '5px 0 0 0',
          fontSize: '12px',
          color: '#6b7280',
          textAlign: 'center'
        }}>
          {new Date().toLocaleString('en-US', { 
            timeZone: 'America/New_York',
            dateStyle: 'medium',
            timeStyle: 'short'
          })} EST
        </p>
      </div>
    </div>
  );
}