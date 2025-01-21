import type { HandlerEvent, HandlerContext } from '@netlify/functions';

type ResponseType = {
  statusCode: number;
  body: string;
};

export const tryCatch = (
  hanlder: (
    event: HandlerEvent,
    context: HandlerContext
  ) => Promise<ResponseType>
) => {
  return async (
    event: HandlerEvent,
    context: HandlerContext
  ): Promise<ResponseType> => {
    try {
      return await hanlder(event, context);
    } catch (error) {
      const err = error as Error;
      return {
        statusCode: 500,
        body: JSON.stringify({ error: err.message }),
      };
    }
  };
};
