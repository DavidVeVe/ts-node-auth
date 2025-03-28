import mongoose, { mongo } from "mongoose";

const connectToDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI as string, {
    dbName: "Auth",
    serverApi: { version: "1", strict: true, deprecationErrors: true }
  });

  console.log("Connected to Mongo");
};

export { connectToDB };
