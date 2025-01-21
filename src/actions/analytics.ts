export const sendData = async (body: { eventType: string }) => {
  const response = await fetch('/.netlify/functions/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error('Failed to send data');

  return response.json();
};
