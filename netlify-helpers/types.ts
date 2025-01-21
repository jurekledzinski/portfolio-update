import { Collection, MongoClient } from 'mongodb';

export type connectDB = (mongoUrl: string) => Promise<MongoClient>;

export type getCollection = (
  clientPromise: Promise<MongoClient>,
  dbName: string,
  collectionName: string
) => Promise<Collection<Document>>;
