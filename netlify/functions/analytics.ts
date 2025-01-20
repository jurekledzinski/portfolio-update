import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  console.log('Analytics', { event }, { context });

  return {
    statusCode: 200,
    body: '',
  };
};
