import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Ensure proper typing for the global object
const globalWithMongoose = global as typeof globalThis & {
    mongoose: MongooseConnection;
};

// Set up cached connection
const cached: MongooseConnection = globalWithMongoose.mongoose || {
    conn: null,
    promise: null
};

globalWithMongoose.mongoose = cached;

export const connectToDatabase = async (): Promise<Mongoose> => {
    // If a cached connection exists, return it
    if (cached.conn) return cached.conn;

    // Check for MongoDB URL
    if (!MONGODB_URL) throw new Error("Missing MongoDB URL");

    // Create a new connection promise if it doesn't exist
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URL, {
            dbName: "Imaginify",
            bufferCommands: false,
        });
    }

    // Wait for the connection to resolve
    cached.conn = await cached.promise;
    return cached.conn;
};
