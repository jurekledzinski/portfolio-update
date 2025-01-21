import { MongoClient } from 'mongodb';

export const connectDB = (mongoUrl: string) => {
  const mongoClient = new MongoClient(mongoUrl);
  return mongoClient.connect();
};

export const getCollection = async <T extends object>(
  clientPromise: Promise<MongoClient>,
  dbName: string,
  collectionName: string
) => {
  const database = (await clientPromise).db(dbName);
  return database.collection<T>(collectionName);
};
