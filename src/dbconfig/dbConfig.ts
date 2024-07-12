import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log("Database connection established!");
    });

    connection.on('error', (err) => {
      console.log("Database connection error: ", err);
      process.exit();
    });
  } catch (error) {
    console.log("Database connection error: ", error);
    process.exit();
  }
}
