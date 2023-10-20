import { MongoClient } from 'mongodb';

export const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.17rztfq.mongodb.net/?retryWrites=true&w=majority`
export const mongoDb = process.env.mongodb_database


export async function connectToDb() {
  const client = await MongoClient.connect(url);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db(mongoDb);

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db(mongoDb);

  const documents = await db
    .collection(collection)
    .find({})
    .sort(sort)
    .toArray();

  return documents;
}
