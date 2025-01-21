import { connectDB, getCollection } from '../../netlify-helpers/mongodb.ts';
import { tryCatch } from '../../netlify-helpers/tryCatch.ts';
import type { Handler, HandlerEvent } from '@netlify/functions';
import { AnalyticsType } from '../../src/actions';
const atlasUrl = process.env.ATLAS_URL!;
const dbName = process.env.DB_NAME!;
const collectionName = process.env.COLLECTION_NAME!;

const clientPromise = connectDB(atlasUrl);

export const handler: Handler = tryCatch(async (event: HandlerEvent) => {
  const body = JSON.parse(event.body!) as { eventType: string };
  const eventType = body.eventType;

  const collection = await getCollection<AnalyticsType>(
    clientPromise,
    dbName,
    collectionName
  );

  if (!collection) throw new Error('Internal server error');

  const type = 'analytics';
  const timestamp = new Date().toISOString();
  const dayKey = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const monthKey = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
  const yearKey = new Date().getFullYear().toString();

  await collection.updateOne(
    { type },
    {
      $inc: {
        [`${eventType}.${timestamp}`]: 1,
        [`totalByDay.${eventType}.${dayKey}`]: 1,
        [`totalByMonth.${eventType}.${monthKey}`]: 1,
        [`totalByYear.${eventType}.${yearKey}`]: 1,
        [`total.${eventType}`]: 1,
      },
    },
    { upsert: true }
  );

  return {
    statusCode: 200,
    body: 'Analytics updated successfully',
  };
});
