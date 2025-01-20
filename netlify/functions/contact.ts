import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  console.log('Contact', { event }, { context });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Message sent successfully',
    }),
  };
};
