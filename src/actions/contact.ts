import { ContactFormInputs } from '@/components/shared';

export const sendContactMessage = async (body: ContactFormInputs) => {
  const response = await fetch('/.netlify/functions/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
};
